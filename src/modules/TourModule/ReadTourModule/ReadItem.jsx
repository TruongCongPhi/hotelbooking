import { Row, Col, Statistic, Tag, Descriptions, Divider, Card, Button, Image } from 'antd';
import dayjs from 'dayjs';

import { PageHeader } from '@ant-design/pro-layout';
import { EditOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import useLanguage from '@/locale/useLanguage';
import useMoney from '@/hooks/useMoney';

export default function TourDetail({ selectedItem }) {
  const translate = useLanguage();
  const navigate = useNavigate();
  const { formatCurrency } = useMoney();

  const {
    id,
    tourName,
    shortDescription,
    longDescription,
    originalPrice,
    discountPrice,
    duration,
    voucherValidity,
    redemptionMethod,
    isRefundable,
    isCancelable,
    cancellationDeadlineHours,
    cancellationPolicyDescription,
    refundPolicy,
    reschedulable,
    reschedulePolicy,
    termsAndConditions,
    isActive,
    tourImages,
  } = selectedItem;

  return (
    <>
      <PageHeader
        onBack={() => navigate('/Tour')}
        title={'Chi tiết tour: ' + (tourName || 'Không có tên')}
        extra={[
          <Button key="close" onClick={() => navigate('/Tour')} icon={<CloseCircleOutlined />}>
            {translate('Đóng')}
          </Button>,
          <Button
            key="edit"
            type="primary"
            icon={<EditOutlined />}
            onClick={() => navigate(`/Tour/update/${id}`)}
          >
            {translate('Chỉnh sửa')}
          </Button>,
        ]}
      />
      <Divider dashed />

      <div style={{ padding: '20px' }}>
        <Descriptions title="Thông tin Tour" bordered>
          <Descriptions.Item label="Tên Tour" span={3}>
            {tourName || 'Không có tên'}
          </Descriptions.Item>
          <Descriptions.Item label="Mô tả ngắn" span={3}>
            {shortDescription || 'Không có mô tả'}
          </Descriptions.Item>
          <Descriptions.Item label="Mô tả chi tiết" span={3}>
            {longDescription || 'Không có thông tin'}
          </Descriptions.Item>
          <Descriptions.Item label="Thời lượng">
            {duration ? `${duration} giờ` : 'Không có'}
          </Descriptions.Item>
          <Descriptions.Item label="Hiệu lực voucher">
            {voucherValidity || 'Không có'}
          </Descriptions.Item>
          <Descriptions.Item label="Phương thức sử dụng">
            {redemptionMethod || 'Không có'}
          </Descriptions.Item>
          <Descriptions.Item label="Trạng thái">
            <Tag color={isActive ? 'green' : 'red'}>
              {isActive ? 'Đang hoạt động' : 'Không hoạt động'}
            </Tag>
          </Descriptions.Item>
        </Descriptions>
        <Divider />

        <Descriptions title="Chính sách giá" bordered>
          <Descriptions.Item label="Giá gốc">{formatCurrency(originalPrice)}</Descriptions.Item>
          <Descriptions.Item label="Giá giảm">
            {formatCurrency(discountPrice || 0)}
          </Descriptions.Item>
        </Descriptions>
        <Divider />

        <Descriptions title="Chính sách hủy và hoàn tiền" bordered>
          <Descriptions.Item label="Có thể hoàn tiền">
            {isRefundable ? 'Có' : 'Không'}
          </Descriptions.Item>
          <Descriptions.Item label="Có thể hủy">{isCancelable ? 'Có' : 'Không'}</Descriptions.Item>
          <Descriptions.Item label="Hạn hủy (giờ)">
            {cancellationDeadlineHours || 'Không có'}
          </Descriptions.Item>
          <Descriptions.Item label="Mô tả chính sách hủy" span={3}>
            {cancellationPolicyDescription || 'Không có'}
          </Descriptions.Item>
          <Descriptions.Item label="Chính sách hoàn tiền" span={3}>
            {refundPolicy || 'Không có'}
          </Descriptions.Item>
        </Descriptions>
        <Divider />

        <Descriptions title="Chính sách thay đổi lịch" bordered>
          <Descriptions.Item label="Có thể thay đổi lịch">
            {reschedulable ? 'Có' : 'Không'}
          </Descriptions.Item>
          <Descriptions.Item label="Chính sách thay đổi lịch" span={3}>
            {reschedulePolicy || 'Không có'}
          </Descriptions.Item>
        </Descriptions>
        <Divider />

        <Descriptions title="Điều khoản và điều kiện" bordered>
          <Descriptions.Item label="Điều khoản và điều kiện" span={3}>
            {termsAndConditions || 'Không có'}
          </Descriptions.Item>
        </Descriptions>
        <Divider />

        <Descriptions title="Ảnh"></Descriptions>
        <Row gutter={[16, 16]}>
          {tourImages?.map((image, index) => (
            <Col span={6} key={index}>
              <Card cover={<Image src={image.filePath} />}></Card>
            </Col>
          ))}
        </Row>
        <Divider />
      </div>
    </>
  );
}
