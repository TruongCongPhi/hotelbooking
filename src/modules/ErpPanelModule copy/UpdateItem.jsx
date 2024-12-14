import { useState, useEffect } from 'react';
import { Form, Divider } from 'antd';
import { Button, Tag } from 'antd';
import { PageHeader } from '@ant-design/pro-layout';

import { useSelector, useDispatch } from 'react-redux';
import useLanguage from '@/locale/useLanguage';
import { erp } from '@/redux/erp/actions';

import { generate as uniqueId } from 'shortid';
import { selectUpdatedItem } from '@/redux/erp/selectors';
import Loading from '@/components/Loading';

import { CloseCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { useNavigate, useParams } from 'react-router-dom';

// import { StatusTag } from '@/components/Tag';

function SaveForm({ form, translate }) {
  const handelClick = () => {
    form.submit();
  };

  return (
    <Button onClick={handelClick} type="primary" icon={<PlusOutlined />}>
      {translate('Cập nhật')}
    </Button>
  );
}

export default function UpdateItem({ config, UpdateForm }) {
  const translate = useLanguage();
  let { entity } = config;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { current, isLoading, isSuccess } = useSelector(selectUpdatedItem);
  const [form] = Form.useForm();

  const { id } = useParams();

  const onSubmit = (fieldsValue) => {
    console.log('🚀 ~ fieldsValue:', fieldsValue);
    const formDataa = new FormData();

    Object.entries(fieldsValue).forEach(([key, value]) => {
      if (
        key !== 'files' &&
        value !== undefined &&
        value !== 'undefined' &&
        value !== null &&
        value !== 'null'
      ) {
        if (
          Array.isArray(value) &&
          (key === 'amenityIds' || key === 'serviceIds' || key === 'deleteImageIds')
        ) {
          value.forEach((item) => {
            formDataa.append(key, item);
          });
        } else {
          formDataa.append(key, value);
        }
      }
    });

    if (fieldsValue.files && Array.isArray(fieldsValue.files)) {
      fieldsValue.files
        .filter((file) => file)
        .forEach((file) => {
          formDataa.append('files', file.originFileObj || file);
        });
    }

    console.log('🚀 FormData gửi đi:', Array.from(formDataa.entries()));

    dispatch(
      erp.updateAndUpload({
        entity,
        id,
        formDataa,
      })
    );
  };

  useEffect(() => {
    if (isSuccess) {
      form.resetFields();
      dispatch(erp.resetAction({ actionType: 'update' }));
      navigate(`/${entity.toLowerCase()}/read/${id}`);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (current) {
      let formData = { ...current };
      form.resetFields();
      form.setFieldsValue(formData);
    }
  }, [current]);

  return (
    <>
      <PageHeader
        onBack={() => {
          navigate(`/${entity.toLowerCase()}`);
        }}
        title={translate('Cập nhật')}
        ghost={false}
        extra={[
          <Button
            key={`${uniqueId()}`}
            onClick={() => {
              navigate(`/${entity.toLowerCase()}`);
            }}
            icon={<CloseCircleOutlined />}
          >
            {translate('Hủy')}
          </Button>,
          <SaveForm translate={translate} form={form} key={`${uniqueId()}`} />,
        ]}
        style={{
          padding: '20px 0px',
        }}
      ></PageHeader>
      <Divider dashed />
      <Loading isLoading={isLoading}>
        <Form form={form} layout="vertical" onFinish={onSubmit}>
          <UpdateForm current={current} form={form} />
        </Form>
      </Loading>
    </>
  );
}
