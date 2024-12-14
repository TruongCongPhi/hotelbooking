import { Result, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

import useLanguage from '@/locale/useLanguage';

export default function NotFound({ entity = '' }) {
  const translate = useLanguage();

  const navigate = useNavigate();

  return (
    <Result
      status="404"
      title={translate('Lỗi 404')}
      subTitle={translate('Xin lỗi, trang bạn yêu cầu không tồn tại')}
      extra={
        <Button
          type="primary"
          onClick={() => {
            navigate('/');
          }}
        >
          {translate('Quay lại')}
        </Button>
      }
    />
  );
}
