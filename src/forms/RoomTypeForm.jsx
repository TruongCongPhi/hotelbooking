import React from 'react';
import { Switch, Form, Input, InputNumber, message, Button, Upload } from 'antd';
import { CloseOutlined, CheckOutlined, UploadOutlined } from '@ant-design/icons';
import useLanguage from '@/locale/useLanguage';

export default function RoomTypeForm({ isUpdateForm = false, withUpload = false }) {
  const translate = useLanguage();
  return (
    <>
      <Form.Item
        label={translate('Tên loại phòng')}
        name="roomTypeName"
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập Tên loại phòng!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item label={translate('Mô tả')} name="description">
        <Input />
      </Form.Item>

      <Form.Item label={translate('Màu nhãn')} name="colorHex">
        <Input />
      </Form.Item>
    </>
  );
}
