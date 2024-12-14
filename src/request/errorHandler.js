import { notification } from 'antd';
import codeMessage from './codeMessage';
import { json } from 'react-router-dom';

const errorHandler = (error) => {
  if (!navigator.onLine) {
    notification.config({
      duration: 15,
      maxCount: 1,
    });
    // Code to execute when there is internet connection
    notification.error({
      message: 'Không có kết nối internet',
      description: 'Không thể kết nối Internet, hãy kiểm tra mạng Internet của bạn',
    });
    return {
      success: false,
      result: null,
      message: 'Không thể kết nối tới máy chủ, hãy kiểm tra mạng internet của bạn',
    };
  }

  const { response } = error;
  //console.log(JSON.stringify(response));
  if (!response) {
    notification.config({
      duration: 20,
      maxCount: 1,
    });
    // Code to execute when there is no internet connection
    // notification.error({
    //   message: 'Problem connecting to server',
    //   description: 'Cannot connect to the server, Try again later',
    // });
    return {
      success: false,
      result: null,
      message: 'Không thể kết nối với máy chủ, hãy liên hệ với quản trị viên Tài khoản của bạn',
    };
  }

  if (response && response.data && response.data.jwtExpired) {
    const result = window.localStorage.getItem('auth');
    const jsonFile = window.localStorage.getItem('isLogout');
    const { isLogout } = (jsonFile && JSON.parse(jsonFile)) || false;
    window.localStorage.removeItem('auth');
    window.localStorage.removeItem('isLogout');
    if (result || isLogout) {
      window.location.href = '/logout';
    }
  }
  if (response && response.data) {
    const { code, message } = response.data;
    const errorMessage = message || codeMessage[code] || 'Đã xảy ra lỗi không xác định';

    notification.error({
      message: `Yêu cầu lỗi ${code || response.status || 'Không rõ'}`,
      description: errorMessage,
    });
    notification.config({
      duration: 20,
      maxCount: 2,
    });

    if (response?.data?.error?.name === 'JsonWebTokenError') {
      window.localStorage.removeItem('auth');
      window.localStorage.removeItem('isLogout');
      window.location.href = '/logout';
    } else return response.data;
  }
  if (response && response.status) {
    const message = response.result && response.message;

    const errorText = message || codeMessage[response.status];
    const { status, error } = response;
    notification.config({
      duration: 20,
      maxCount: 2,
    });
    notification.error({
      message: `Yêu cầu lỗi ${status}`,
      description: errorText,
    });

    if (response?.data?.error?.name === 'JsonWebTokenError') {
      window.localStorage.removeItem('auth');
      window.localStorage.removeItem('isLogout');
      window.location.href = '/logout';
    } else return response.data;
  } else {
    notification.config({
      duration: 15,
      maxCount: 1,
    });

    if (navigator.onLine) {
      // Code to execute when there is internet connection
      notification.error({
        message: 'Sự cố kết nối với máy chủ',
        description: 'Không thể kết nối tới máy chủ, hãy thử lại sau',
      });
      return {
        success: false,
        result: null,
        message: 'Không thể kết nối với máy chủ, hãy liên hệ với quản trị viên Tài khoản của bạn',
      };
    } else {
      // Code to execute when there is no internet connection
      notification.error({
        message: 'Không có kết nối internet',
        description: 'Không thể kết nối Internet, hãy kiểm tra mạng Internet của bạn',
      });
      return {
        success: false,
        result: null,
        message: 'Không thể kết nối tới máy chủ, hãy kiểm tra mạng internet của bạn',
      };
    }
  }
};

export default errorHandler;
