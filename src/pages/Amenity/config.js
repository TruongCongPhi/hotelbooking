export const fields = {
  iconSvg: {
    label: 'Biểu tượng',
    type: 'icon',
    width: '32px',
    height: '32px',
    dataIndex: ['iconSvg'],
  },
  amenityName: {
    type: 'string',
    label: 'Tên tiện ích',
    required: true,
  },
  description: {
    type: 'textarea',
    label: 'Mô tả',
  },
  isActive: {
    type: 'boolean',
    label: 'Kích hoạt',
  },
};
