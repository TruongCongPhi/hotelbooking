import dayjs from 'dayjs';
import { Tag, Switch } from 'antd';
import { tagColor } from '@/utils/statusTagColor';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

import TourDataTableModule from '@/modules/TourModule/TourDataTableModule';
import useMoney from '@/hooks/useMoney';
import useLanguage from '@/locale/useLanguage';

export default function Tour() {
  const translate = useLanguage();
  const entity = 'tour';
  const { formatCurrency } = useMoney();

  const searchConfig = {
    entity: 'tour',
    displayLabels: ['tourName'],
    searchFields: 'tourName',
  };
  const deleteModalLabels = ['tourName'];
  const dataTableColumns = [
    {
      title: translate('Tên tour'),
      dataIndex: 'tourName',
    },
    {
      title: translate('Được hủy'),
      dataIndex: 'isCancelable',
      render: (isCancelable) => (
        <Tag color={isCancelable ? 'green' : 'red'}>{isCancelable ? 'Có' : 'Không'}</Tag>
      ),
    },
    {
      title: translate('Được hoàn tiền'),
      dataIndex: 'isRefundable',
      render: (isRefundable) => (
        <Tag color={isRefundable ? 'green' : 'red'}>{isRefundable ? 'Có' : 'Không'}</Tag>
      ),
    },
    {
      title: translate('Được đổi lịch'),
      dataIndex: 'reschedulable',
      render: (reschedulable) => (
        <Tag color={reschedulable ? 'green' : 'red'}>{reschedulable ? 'Có' : 'Không'}</Tag>
      ),
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
      dataIndex: 'discountPrice',
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
        return <>{record.discountPrice ? formatCurrency(record.discountPrice) : ''}</>;
      },
    },
    {
      title: translate('Trạng thái'),
      dataIndex: 'isActive',
      render: (isActive) => (
        <Tag color={isActive ? 'green' : 'red'}>{isActive ? 'Hoạt động' : 'Đóng'}</Tag>
      ),
    },
  ];

  const Labels = {
    PANEL_TITLE: translate('Tour'),
    DATATABLE_TITLE: translate('Danh sách tour'),
    ADD_NEW_ENTITY: translate('Thêm tour'),
    ENTITY_NAME: translate('Tour'),
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
  return <TourDataTableModule config={config} />;
}
