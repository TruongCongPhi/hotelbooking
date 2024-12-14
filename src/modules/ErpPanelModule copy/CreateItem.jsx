import { useState, useEffect } from 'react';

import { Button, Tag, Form, Divider } from 'antd';
import { PageHeader } from '@ant-design/pro-layout';

import { useSelector, useDispatch } from 'react-redux';

import useLanguage from '@/locale/useLanguage';

import { erp } from '@/redux/erp/actions';
import { selectCreatedItem } from '@/redux/erp/selectors';

import { generate as uniqueId } from 'shortid';

import Loading from '@/components/Loading';
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CloseCircleOutlined,
  PlusOutlined,
} from '@ant-design/icons';

import { useNavigate } from 'react-router-dom';

function SaveForm({ form }) {
  const translate = useLanguage();
  const handelClick = () => {
    form.submit();
  };

  return (
    <Button onClick={handelClick} type="primary" icon={<PlusOutlined />}>
      {translate('Thêm')}
    </Button>
  );
}

export default function CreateItem({ config, CreateForm, withUpload }) {
  const translate = useLanguage();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let { entity } = config;

  const { isLoading, isSuccess, result } = useSelector(selectCreatedItem);
  const [form] = Form.useForm();

  useEffect(() => {
    if (isSuccess) {
      form.resetFields();
      dispatch(erp.resetAction({ actionType: 'create' }));
      navigate(`/${entity.toLowerCase()}/read/${result.id}`);
    }
    return () => {};
  }, [isSuccess]);

  const onSubmit = (fieldsValue) => {
    const formData = new FormData();

    Object.entries(fieldsValue).forEach(([key, value]) => {
      if (
        key !== 'files' &&
        value !== undefined &&
        value !== 'undefined' &&
        value !== null &&
        value !== 'null'
      ) {
        if (Array.isArray(value) && (key === 'amenityIds' || key === 'serviceIds')) {
          value.forEach((item) => {
            formData.append(key, item);
          });
        } else {
          formData.append(key, value);
        }
      }
    });

    if (fieldsValue.files && Array.isArray(fieldsValue.files)) {
      fieldsValue.files.forEach((file) => {
        formData.append('files', file.originFileObj || file);
      });
    }

    console.log('🚀 FormData gửi đi:', Array.from(formData.entries()));
    dispatch(erp.createAndUpload({ entity, jsonData: formData }));
  };

  return (
    <>
      <PageHeader
        onBack={() => {
          navigate(`/${entity.toLowerCase()}`);
        }}
        backIcon={<ArrowLeftOutlined />}
        title={translate('Thêm mới')}
        ghost={false}
        tags={<Tag>{translate('Phòng')}</Tag>}
        // subTitle="This is create page"
        extra={[
          <Button
            key={`${uniqueId()}`}
            onClick={() => navigate(`/${entity.toLowerCase()}`)}
            icon={<CloseCircleOutlined />}
          >
            {translate('Đóng')}
          </Button>,
          <SaveForm form={form} key={`${uniqueId()}`} />,
        ]}
        style={{
          padding: '20px 0px',
        }}
      ></PageHeader>
      <Divider dashed />
      <Loading isLoading={isLoading}>
        <Form form={form} layout="vertical" onFinish={onSubmit}>
          <CreateForm />
        </Form>
      </Loading>
    </>
  );
}
