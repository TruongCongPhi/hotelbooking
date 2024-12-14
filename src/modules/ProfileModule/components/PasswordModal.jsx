import { useProfileContext } from '@/context/profileContext';
import useOnFetch from '@/hooks/useOnFetch';
import { request } from '@/request';
import { Form, Input, Modal } from 'antd';

import useLanguage from '@/locale/useLanguage';

const PasswordModal = () => {
  const translate = useLanguage();

  const { state, profileContextAction } = useProfileContext();
  const { modal } = profileContextAction;
  const { passwordModal } = state;
  const modalTitle = translate('Đổi mật khẩu');

  const [passForm] = Form.useForm();

  const { onFetch } = useOnFetch();

  const handelSubmit = (fieldsValue) => {
    const entity = 'account/change-password/';
    const updateFn = async () => {
      return await request.patch({ entity, jsonData: fieldsValue });
    };
    const callback = updateFn();
    onFetch(callback);
    passForm.resetFields();
    modal.close();
  };
  return (
    <Modal
      title={modalTitle}
      open={passwordModal.isOpen}
      onCancel={modal.close}
      cancelText="Hủy"
      okText="Lưu"
      onOk={() => {
        passForm.submit();
      }}
    >
      <Form form={passForm} layout="vertical" onFinish={handelSubmit}>
        <Form.Item
          label={translate('Mật khẩu cũ')}
          name="currentPassword"
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập mật khẩu cũ',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label={translate('Mật khẩu mới')}
          name="newPassword"
          hasFeedback
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
          <Input.Password />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default PasswordModal;
