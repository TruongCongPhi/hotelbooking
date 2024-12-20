import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Form, Input, Select } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';

import useLanguage from '@/locale/useLanguage';
import { countryList } from '@/utils/countryList';

export default function RegisterForm({ userLocation }) {
  const translate = useLanguage();

  return (
    <>
      <Form.Item
        name="fullName"
        label={translate('Họ tên')}
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập họ tên',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} size="large" />
      </Form.Item>
      <Form.Item
        name="email"
        label={translate('email')}
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
      >
        <Input
          prefix={<MailOutlined className="site-form-item-icon" />}
          type="email"
          size="large"
        />
      </Form.Item>
      <Form.Item
        name="password"
        label={translate('password')}
        rules={[
          {
            required: true,
            message: translate('Vui lòng nhập mật khẩu mới'),
          },
          {
            min: 8,
            message: translate('Mật khẩu phải có ít nhất 8 ký tự'),
          },
          {
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/,
            message: translate(
              'Mật khẩu phải chứa ít nhất 1 ký tự in hoa, 1 ký tự in thường và 1 ký tự đặc biệt'
            ),
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('currentPassword') !== value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error('Mật khẩu mới không được trùng với mật khẩu hiện tại!')
              );
            },
          }),
        ]}
      >
        <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} size="large" />
      </Form.Item>
      {/* <Form.Item
        name="confirm_password"
        label={translate('confirm_password')}
        rules={[
          {
            required: true,
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
        hasFeedback
      >
        <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} size="large" />
      </Form.Item> */}
      {/* <Form.Item
        label={translate('country')}
        name="country"
        rules={[
          {
            required: true,
          },
        ]}
        initialValue={userLocation}
      >
        <Select
          showSearch
          defaultOpen={false}
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
          }
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? '').toLowerCase().startsWith((optionB?.label ?? '').toLowerCase())
          }
          style={{
            width: '100%',
          }}
          size="large"
        >
          {countryList.map((language) => (
            <Select.Option
              key={language.value}
              value={language.value}
              label={translate(language.label)}
            >
              {language?.icon && language?.icon + ' '}
              {translate(language.label)}
            </Select.Option>
          ))}
        </Select>
      </Form.Item> */}
    </>
  );
}
