import React from 'react';

import useLanguage from '@/locale/useLanguage';

import { Tag } from 'antd';
import CrudModule from '@/modules/CrudModule/CrudModule';
import RoomTypeForm from '@/forms/RoomTypeForm';

export default function RoomType() {
  const translate = useLanguage();
  const entity = 'roomtype';
  const searchConfig = {
    displayLabels: ['roomTypeName'],
    searchFields: 'roomTypeName',
  };

  const deleteModalLabels = ['roomTypeName'];

  const readColumns = [
    {
      title: translate('Tên'),
      dataIndex: 'roomTypeName',
    },
    {
      title: translate('Mô tả'),
      dataIndex: 'description',
    },
    {
      title: translate('Màu nhãn'),
      dataIndex: 'colorHex',
    },
  ];
  const dataTableColumns = [
    {
      title: translate('Tên'),
      dataIndex: 'roomTypeName',
    },
    {
      title: translate('Mô tả'),
      dataIndex: 'description',
    },
    {
      title: translate('Nhãn'),
      dataIndex: 'colorHex',
      key: 'colorHex',
      render: (_, record) => {
        const color = record.colorHex ? record.colorHex : 'cyan'; // Mặc định nếu colorHex không có giá trị
        return <Tag color={color}>{color}</Tag>;
      },
    },
  ];

  const Labels = {
    PANEL_TITLE: translate('Loại phòng'),
    DATATABLE_TITLE: translate('Danh sách loại phòng'),
    ADD_NEW_ENTITY: translate('Thêm loại phòng'),
    ENTITY_NAME: translate('roomtype'),
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
      createForm={<RoomTypeForm />}
      updateForm={<RoomTypeForm isUpdateForm={true} />}
      config={config}
    />
  );
}
