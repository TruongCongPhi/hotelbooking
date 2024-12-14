import { Form, Input, Select } from 'antd';
import { UploadOutlined, CloseOutlined, CheckOutlined } from '@ant-design/icons';
import { message, Upload, Button, Switch } from 'antd';

import useLanguage from '@/locale/useLanguage';

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 5;
  if (!isLt2M) {
    message.error('Image must smaller than 5MB!');
  }
  return false;
};

export default function AdminForm({ isUpdateForm = false }) {
  const translate = useLanguage();
  return (
    <>
      <Form.Item
        label={translate('Họ tên')}
        name="fullName"
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập họ tên',
          },
        ]}
      >
        <Input autoComplete="off" />
      </Form.Item>
      <Form.Item
        label={translate('email')}
        name="email"
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập Email',
          },
          {
            type: 'email',
          },
        ]}
      >
        <Input autoComplete="off" />
      </Form.Item>

      <Form.Item
        name="file"
        label={translate('Ảnh')}
        valuePropName="fileList"
        getValueFromEvent={(e) => e.fileList}
      >
        <Upload
          beforeUpload={beforeUpload}
          listType="picture"
          accept="image/png, image/jpeg"
          maxCount={1}
        >
          <Button icon={<UploadOutlined />}>{translate('Chọn để tải ảnh')}</Button>
        </Upload>
      </Form.Item>
    </>
  );
}
