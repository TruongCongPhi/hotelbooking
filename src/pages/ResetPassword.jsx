import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { resetPassword } from '@/redux/auth/actions';
import { selectAuth } from '@/redux/auth/selectors';

import { Form, Button } from 'antd';

import ResetPasswordForm from '@/forms/ResetPasswordForm';

import useLanguage from '@/locale/useLanguage';

import Loading from '@/components/Loading';
import AuthModule from '@/modules/AuthModule';

const ResetPassword = () => {
  const translate = useLanguage();
  const { isLoading, isSuccess } = useSelector(selectAuth);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const email = searchParams.get('email');
  const token = searchParams.get('token');

  const dispatch = useDispatch();
  const onFinish = (values) => {
    dispatch(
      resetPassword({
        resetPasswordData: {
          newPassword: values.newPassword,
          email,
          token,
        },
      })
    );
  };

  useEffect(() => {
    if (isSuccess) navigate('/login');
  }, [isSuccess, navigate]);

  const FormContainer = () => {
    return (
      <Loading isLoading={isLoading}>
        <Form
          name="signup"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <ResetPasswordForm />
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" size="large">
              {translate('Đặt lại mật khẩu')}
            </Button>
            {translate('Quay lại')} <a href="/login"> {'Đăng nhập'} </a>
          </Form.Item>
        </Form>
      </Loading>
    );
  };
  return <AuthModule authContent={<FormContainer />} AUTH_TITLE="Đặt lại mật khẩu" />;
};

export default ResetPassword;
