import React from 'react';

import useLanguage from '@/locale/useLanguage';

import { Switch, Space, Avatar } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import CrudModule from '@/modules/CrudModule/CrudModule';
import ServiceForm from '@/forms/ServiceForm';
import useMoney from '@/hooks/useMoney';
export default function Services() {
  const { formatCurrency } = useMoney();
  const translate = useLanguage();
  const entity = 'service';
  const searchConfig = {
    displayLabels: ['serviceName'],
    searchFields: 'serviceName',
  };

  const deleteModalLabels = ['serviceName'];

  const readColumns = [
    {
      title: translate('Tên'),
      dataIndex: 'serviceName',
    },
    {
      title: translate('Giá gốc'),
      dataIndex: 'originalPrice',
    },
    {
      title: translate('Giá giảm'),
      dataIndex: 'discountedPrice',
    },
    {
      title: translate('Trạng thái'),
      dataIndex: 'isActive',
    },
    // {
    //   title: translate('Ảnh'),
    //   dataIndex: 'imagePath',
    // },
  ];
  const dataTableColumns = [
    {
      title: translate('Tên'),
      dataIndex: 'serviceName',
    },
    {
      title: translate('Giá gốc'),
      dataIndex: 'originalPrice',
      render: (_, record) => {
        return <>{formatCurrency(record.originalPrice)}</>;
      },
    },
    {
      title: translate('Giá giảm'),
      dataIndex: 'discountedPrice',
      render: (_, record) => {
        return <>{record.discountedPrice ? formatCurrency(record.discountedPrice) : '-'}</>;
      },
    },
    {
      title: translate('Trạng thái'),
      dataIndex: 'isActive',
      key: 'isActive',
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
            checked={record.isActive}
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
          />
        );
      },
    },
    // {
    //   title: translate('Ảnh'),
    //   dataIndex: 'imagePath',
    //   key: 'imagePath',
    //   onCell: (record, rowIndex) => {
    //     return {
    //       props: {
    //         style: {
    //           width: '60px',
    //         },
    //       },
    //     };
    //   },
    //   render: (_, record) => {
    //     return (
    //       <Space wrap size={16}>
    //         <Avatar src={record.imagePath} shape="square" size="large" />
    //       </Space>
    //     );
    //   },
    // },
  ];

  const Labels = {
    PANEL_TITLE: translate('Dịch vụ phòng'),
    DATATABLE_TITLE: translate('Danh sách dịch vụ phòng'),
    ADD_NEW_ENTITY: translate('Thêm dịch vụ'),
    ENTITY_NAME: translate('service'),
  };

  const configPage = {
    entity,
    ...Labels,
  };
  const config = {
    ...configPage,
    readColumns,
    dataTableColumns,
    searchConfig,
    deleteModalLabels,
  };
  return (
    <CrudModule
      createForm={<ServiceForm />}
      updateForm={<ServiceForm isUpdateForm={true} />}
      config={config}
    />
  );
}
