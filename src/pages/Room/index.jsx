import dayjs from 'dayjs';
import { Tag, Switch } from 'antd';
import { tagColor } from '@/utils/statusTagColor';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

import RoomDataTableModule from '@/modules/RoomModule/RoomDataTableModule';
import useMoney from '@/hooks/useMoney';
import useLanguage from '@/locale/useLanguage';

export default function Room() {
  const translate = useLanguage();
  const entity = 'room';
  const { formatCurrency } = useMoney();

  const searchConfig = {
    entity: 'room',
    displayLabels: ['roomNumber'],
    searchFields: 'roomNumber',
  };
  const deleteModalLabels = ['roomNumber'];
  const dataTableColumns = [
    {
      title: translate('Tên phòng'),
      dataIndex: 'roomNumber',
    },
    {
      title: translate('Loại phòng'),
      dataIndex: 'roomTypeName',
    },
    {
      title: translate('Số người tối đa'),
      dataIndex: 'numberOfPeople',
    },
    {
      title: translate('Được hủy'),
      dataIndex: 'isCancelable',
      key: 'isCancelable',
      onCell: (record, rowIndex) => {
        return {
          props: {
            style: {
              width: '60px',
            },
          },
        };
      },
      render: (_, record) => {
        return (
          <Switch
            checked={record.isCancelable}
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
          />
        );
      },
    },
    {
      title: translate('Được hoàn tiền'),
      dataIndex: 'isRefundable',
      key: 'isRefundable',
      onCell: (record, rowIndex) => {
        return {
          props: {
            style: {
              width: '60px',
            },
          },
        };
      },
      render: (_, record) => {
        return (
          <Switch
            checked={record.isRefundable}
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
          />
        );
      },
    },
    {
      title: translate('Giá gốc'),
      dataIndex: 'originalPrice',
      onCell: () => {
        return {
          style: {
            textAlign: 'right',
            whiteSpace: 'nowrap',
            direction: 'ltr',
          },
        };
      },
      render: (_, record) => {
        return <>{formatCurrency(record.originalPrice)}</>;
      },
    },
    {
      title: translate('Giá đã giảm'),
      dataIndex: 'discountedPrice',
      onCell: () => {
        return {
          style: {
            textAlign: 'right',
            whiteSpace: 'nowrap',
            direction: 'ltr',
          },
        };
      },
      render: (_, record) => {
        return <>{record.discountedPrice ? formatCurrency(record.discountedPrice) : ''}</>;
      },
    },

    {
      title: translate('Trạng thái'),
      dataIndex: 'status',
      render: (_, record) => {
        return <>{record.status === 'Available' ? 'Hoạt động' : 'Khóa'}</>;
      },
    },
  ];

  const Labels = {
    PANEL_TITLE: translate('Phòng'),
    DATATABLE_TITLE: translate('Danh sách phòng'),
    ADD_NEW_ENTITY: translate('Thêm phòng'),
    ENTITY_NAME: translate('room'),
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
  return <RoomDataTableModule config={config} />;
}
