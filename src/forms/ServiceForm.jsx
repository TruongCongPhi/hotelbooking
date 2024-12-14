import React from 'react';
import { Switch, Form, Input, InputNumber, message, Button, Upload } from 'antd';
import { CloseOutlined, CheckOutlined, UploadOutlined } from '@ant-design/icons';
import useLanguage from '@/locale/useLanguage';

export default function ServiceForm({ isUpdateForm = false, withUpload = false }) {
  const translate = useLanguage();
  // const beforeUpload = (file) => {
  //   const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  //   if (!isJpgOrPng) {
  //     message.error('Bạn chỉ có thể tải lên tệp JPG / PNG!');
  //   }
  //   const isLt2M = file.size / 1024 / 1024 < 5;
  //   if (!isLt2M) {
  //     message.error('Hình ảnh phải nhỏ hơn 5MB!');
  //   }
  //   return false;
  // };
  return (
    <>
      <Form.Item
        label={translate('Tên dịch vụ')}
        name="serviceName"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={translate('Giá gốc')}
        name="originalPrice"
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập giá gốc!',
            type: 'number',
            min: 0,
          },
        ]}
      >
        <InputNumber min={0} suffix={'VND'} style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        label={translate('Giá giảm')}
        name="discountedPrice"
        rules={[
          {
            type: 'number',
            min: 0,
          },
        ]}
      >
        <InputNumber min={0} suffix={'VND'} style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        label={translate('Trạng thái')}
        name="isActive"
        style={{
          display: 'inline-block',
          width: 'calc(50%)',
          paddingRight: '5px',
        }}
        valuePropName="checked"
        initialValue={true}
      >
        <Switch checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} />
      </Form.Item>

      {/* <Form.Item
        name="file"
        label="Ảnh"
        valuePropName="fileList"
        getValueFromEvent={(e) => e.fileList}
      >
        <Upload
          beforeUpload={beforeUpload}
          listType="picture"
          accept="image/png, image/jpeg"
          maxCount={1}
          name="imagePath"
        >
          <Button icon={<UploadOutlined />}>{translate('Chọn để tải ảnh')}</Button>
        </Upload>
      </Form.Item> */}
    </>
  );
}
