import { useNavigate } from 'react-router-dom';

import { Form, Result, Button } from 'antd';
import useOnFetch from '@/hooks/useOnFetch';
import { request } from '@/request';

import ForgetPasswordForm from '@/forms/ForgetPasswordForm';

import useLanguage from '@/locale/useLanguage';

import Loading from '@/components/Loading';
import AuthModule from '@/modules/AuthModule';

const ForgetPassword = () => {
  const translate = useLanguage();

  const navigate = useNavigate();

  const { onFetch, isSuccess, isLoading } = useOnFetch();

  async function postData(data) {
    return await request.post({ entity: 'account/forgot-password', jsonData: data });
  }

  const onFinish = (values) => {
    const callback = postData(values);
    onFetch(callback);
  };

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
          <ForgetPasswordForm />
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" size="large">
              {translate('Yêu cầu mật khẩu mới')}
            </Button>
            {translate('Quay lại')} <a href="/login"> {translate('Đăng nhập')} </a>
          </Form.Item>
        </Form>
      </Loading>
    );
  };
  if (!isSuccess) {
    return <AuthModule authContent={<FormContainer />} AUTH_TITLE="Quên mật khẩu" />;
  } else {
    return (
      <Result
        status="success"
        title={translate('Kiểm tra địa chỉ email của bạn để đặt lại mật khẩu')}
        subTitle={translate('Đang tiến hành đặt lại mật khẩu')}
        style={{ maxWidth: '450px', margin: 'auto' }}
        extra={
          <Button
            type="primary"
            onClick={() => {
              navigate(`/login`);
            }}
          >
            {translate('Đăng nhập')}
          </Button>
        }
      ></Result>
    );
  }
};

export default ForgetPassword;
