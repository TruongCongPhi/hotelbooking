import React from 'react';
import { Form, Input, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import useLanguage from '@/locale/useLanguage';

export default function LoginForm() {
  const translate = useLanguage();
  return (
    <div>
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
            message: 'Nhập đúng định dạng Email',
          },
        ]}
        initialValue={'admin@gmail.com'}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder={'admin@gmail.com'}
          type="email"
          size="large"
        />
      </Form.Item>
      <Form.Item
        label={'Mật khẩu'}
        name="password"
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập mật khẩu',
          },
        ]}
        initialValue={'Admin123456.'}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          placeholder={'Admin123456.'}
          size="large"
        />
      </Form.Item>

      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>{'Nhớ đăng nhập'}</Checkbox>
        </Form.Item>
        <a className="login-form-forgot" href="/forgetpassword" style={{ marginLeft: '0px' }}>
          {'Quên mật khẩu'}
        </a>
      </Form.Item>
    </div>
  );
}
