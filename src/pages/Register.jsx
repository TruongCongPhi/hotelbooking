import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import useLanguage from '@/locale/useLanguage';

import { Form, Button } from 'antd';

import { register } from '@/redux/auth/actions';
import { selectAuth } from '@/redux/auth/selectors';
import RegisterForm from '@/forms/RegisterForm';
import Loading from '@/components/Loading';
import AuthModule from '@/modules/AuthModule';

const RegisterPage = () => {
  const translate = useLanguage();
  const { isLoading, isSuccess } = useSelector(selectAuth);
  const navigate = useNavigate();
  // const size = useSize();

  const dispatch = useDispatch();
  const onFinish = (values) => {
    console.log(values);
    dispatch(register({ registerData: values }));
  };

  useEffect(() => {
    if (isSuccess) navigate('/login');
  }, [isSuccess]);

  const FormContainer = () => {
    return (
      <Loading isLoading={isLoading}>
        <Form
          layout="vertical"
          name="normal_register"
          className="register-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <RegisterForm />
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="register-form-button"
              loading={isLoading}
              size="large"
            >
              {translate('Đăng ký')}
            </Button>
            Quay lại <a href="/">Đăng nhập</a>
          </Form.Item>
        </Form>
      </Loading>
    );
  };

  return <AuthModule authContent={<FormContainer />} AUTH_TITLE="Đăng ký" />;
};

export default RegisterPage;
