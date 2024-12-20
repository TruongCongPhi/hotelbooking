import dayjs from 'dayjs';
import { Tag, Switch } from 'antd';
import { tagColor } from '@/utils/statusTagColor';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

import RoomBookingDataTableModule from '@/modules/RoomBooking/RoomBookingDataTableModule';
import useMoney from '@/hooks/useMoney';
import useLanguage from '@/locale/useLanguage';

export default function RoomBooking() {
  const translate = useLanguage();
  const entity = 'roombooking';
  const { formatCurrency } = useMoney();

  const searchConfig = {
    entity: 'roombooking',
    displayLabels: ['paymentReference'],
    searchFields: 'paymentReference',
  };
  const deleteModalLabels = ['paymentReference'];
  const dataTableColumns = [
    {
      title: translate('Mã'),
      dataIndex: 'bookingReference',
      render: (bookingReference) => {
        return '#' + bookingReference;
      },
    },
    {
      title: translate('Tên khách'),
      dataIndex: 'fullName',
    },
    {
      title: translate('Phòng'),
      dataIndex: 'roomNumber',
    },

    {
      title: translate('Thời gian lưu trú'),
      dataIndex: 'checkInDate',
      onCell: () => {
        return {
          style: {
            whiteSpace: 'nowrap',
          },
        };
      },
      render: (_, record) => {
        const checkIn = dayjs(record.checkInDate).format('DD/MM/YY');
        const checkOut = dayjs(record.checkOutDate).format('DD/MM/YY');
        return `${checkIn} - ${checkOut}`;
      },
    },
    {
      title: translate('Số người'),
      dataIndex: 'numberOfPeople',
    },
    {
      title: translate('Trạng thái đặt'),
      dataIndex: 'bookingStatus',
      key: 'bookingStatus',
      render: (bookingStatus) => {
        const statusColors = {
          Cancelled: 'red',
          Pending: 'orange',
          Success: 'green',
        };

        const statusLabels = {
          Cancelled: 'Đã hủy',
          Pending: 'Đang chờ',
          Success: 'Đã đặt',
        };

        return (
          <Tag color={statusColors[bookingStatus] || 'default'}>
            {statusLabels[bookingStatus] || 'Không xác định'}
          </Tag>
        );
      },
    },
    {
      title: translate('Thanh toán'),
      dataIndex: 'paymentStatus',
      key: 'paymentStatus',
      render: (paymentStatus) => {
        const statusColors = {
          Failed: 'red',
          Pending: 'orange',
          Success: 'green',
          Refunded: 'primary',
          NotRefunded: 'secondary',
          PendingRefund: 'yellow',
        };

        const statusLabels = {
          Pending: 'Đang chờ',
          Success: 'Đã thanh toán',
          Failed: 'Thất bại',
          Refunded: 'Đã hoàn tiền',
          NotRefunded: 'Không hoàn tiền',
          PendingRefund: 'Chờ hoàn tiền',
        };

        return (
          <Tag color={statusColors[paymentStatus] || 'default'}>
            {statusLabels[paymentStatus] || 'Không xác định'}
          </Tag>
        );
      },
    },

    {
      title: translate('Số tiền'),
      dataIndex: 'price',
      onCell: () => ({
        style: {
          textAlign: 'right',
          whiteSpace: 'nowrap',
          direction: 'ltr',
        },
      }),
      render: (_, record) => <>{formatCurrency(record.price)}</>,
    },
  ];

  const Labels = {
    PANEL_TITLE: translate('Đặt phòng'),
    DATATABLE_TITLE: translate('Danh sách đặt phòng'),
    ADD_NEW_ENTITY: translate('Tạo đặt phòng'),
    ENTITY_NAME: translate('roombooking'),
  };

  const configPage = {
    entity,
    ...Labels,
  };
  const config = {
    ...configPage,
    dataTableColumns,
    searchConfig,
    deleteModalLabels,
  };
  return <RoomBookingDataTableModule config={config} />;
}
