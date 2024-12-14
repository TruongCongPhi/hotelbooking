import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { crud } from '@/redux/crud/actions';
import { useCrudContext } from '@/context/crud';
import { selectCreatedItem } from '@/redux/crud/selectors';

import useLanguage from '@/locale/useLanguage';

import { Button, Form } from 'antd';
import Loading from '@/components/Loading';

export default function CreateForm({ config, formElements, withUpload = false }) {
  let { entity } = config;
  const dispatch = useDispatch();
  const { isLoading, isSuccess } = useSelector(selectCreatedItem);
  const { crudContextAction } = useCrudContext();
  const { panel, collapsedBox, readBox } = crudContextAction;
  const [form] = Form.useForm();
  const translate = useLanguage();
  const onSubmit = (fieldsValue) => {
    if (fieldsValue.file && withUpload) {
      const formData = new FormData();

      Object.keys(fieldsValue).forEach((key) => {
        if (key === 'file') {
          formData.append(key, fieldsValue.file[0].originFileObj);
        } else {
          formData.append(key, fieldsValue[key]);
        }
      });

      console.log('Tạo mới có upload: ', formData);

      dispatch(crud.create({ entity, formData, withUpload: true }));
    } else {
      const trimmedValues = Object.keys(fieldsValue).reduce((acc, key) => {
        acc[key] =
          typeof fieldsValue[key] === 'string' ? fieldsValue[key].trim() : fieldsValue[key];
        return acc;
      }, {});

      console.log('Tạo mới không upload: ', trimmedValues);

      dispatch(crud.create({ entity, jsonData: trimmedValues, withUpload: false }));
    }
  };

  useEffect(() => {
    if (isSuccess) {
      readBox.open();
      collapsedBox.open();
      panel.open();
      form.resetFields();
      dispatch(crud.resetAction({ actionType: 'create' }));
      dispatch(crud.list({ entity }));
    }
  }, [isSuccess]);

  return (
    <Loading isLoading={isLoading}>
      <Form form={form} layout="vertical" onFinish={onSubmit}>
        {formElements}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {translate('Xác nhận')}
          </Button>
        </Form.Item>
      </Form>
    </Loading>
  );
}
