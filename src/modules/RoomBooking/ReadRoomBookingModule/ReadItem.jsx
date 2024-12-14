import { Row, Col, Statistic, Tag, Descriptions, Divider, Card, Button } from 'antd';
import dayjs from 'dayjs';

import { PageHeader } from '@ant-design/pro-layout';
import { EditOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import useLanguage from '@/locale/useLanguage';
import useMoney from '@/hooks/useMoney';

export default function BookingDetail({ selectedItem }) {
  const translate = useLanguage();
  const navigate = useNavigate();
  const { formatCurrency } = useMoney();

  const {
    id,
    bookingReference,
    roomNumber,
    checkInDate,
    checkOutDate,
    numberOfPeople,
    serviceNames,
    paymentStatus,
    price,
    paymentReference,
    fullName,
    bookingStatus,
    cancellationReason,
    isRefundable,
    isCancelable,
    cancellationPolicyDescription,
  } = selectedItem;

  return (
    <>
      <PageHeader
        onBack={() => navigate('/roombooking')}
        title={'Đặt phòng #' + bookingReference}
        extra={[
          <Button
            key="close"
            onClick={() => navigate('/roombooking')}
            icon={<CloseCircleOutlined />}
          >
            {translate('Đóng')}
          </Button>,
          <Button
            key="edit"
            type="primary"
            icon={<EditOutlined />}
            onClick={() => navigate(`/roombooking/update/${id}`)}
          >
            {translate('Chỉnh sửa')}
          </Button>,
        ]}
      />
      <Divider dashed />

      <div style={{ padding: '20px' }}>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Statistic title="Tên khách hàng" value={fullName || 'N/A'} />
          </Col>
          <Col span={8}>
            <Statistic title="Số phòng" value={roomNumber || 'N/A'} />
          </Col>
          <Col span={8}>
            <Statistic title="Số người" value={numberOfPeople || 'N/A'} />
          </Col>
        </Row>
        <Divider />

        <Descriptions title="Thông tin đặt phòng" bordered>
          <Descriptions.Item label="Mã đặt phòng" span={3}>
            {'#' + bookingReference || 'Không có'}
          </Descriptions.Item>
          <Descriptions.Item label="Ngày nhận phòng">
            {dayjs(checkInDate).format('DD/MM/YYYY')}
          </Descriptions.Item>
          <Descriptions.Item label="Ngày trả phòng">
            {dayjs(checkOutDate).format('DD/MM/YYYY')}
          </Descriptions.Item>
          <Descriptions.Item label="Trạng thái">
            <Tag
              color={
                bookingStatus === 'Success'
                  ? 'green'
                  : bookingStatus === 'Pending'
                    ? 'orange'
                    : 'red'
              }
            >
              {bookingStatus === 'Success'
                ? 'Đã đặt'
                : bookingStatus === 'Pending'
                  ? 'Đang chờ'
                  : 'Đã hủy'}
            </Tag>
          </Descriptions.Item>
        </Descriptions>
        <Divider />

        <Descriptions title="Thông tin thanh toán" bordered>
          <Descriptions.Item label="Trạng thái thanh toán">
            <Tag
              color={
                paymentStatus === 'Success'
                  ? 'green'
                  : paymentStatus === 'Pending'
                    ? 'orange'
                    : 'red'
              }
            >
              {paymentStatus === 'Success'
                ? 'Đã thanh toán'
                : paymentStatus === 'Pending'
                  ? 'Chờ thanh toán'
                  : 'Thất bại'}
            </Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Số tiền">{formatCurrency(price)}</Descriptions.Item>
          <Descriptions.Item label="Mã thanh toán">
            {paymentReference || 'Không có'}
          </Descriptions.Item>
        </Descriptions>
        <Divider />

        <Descriptions title="Chính sách hủy và hoàn tiền" bordered>
          <Descriptions.Item label="Có thể hủy">{isCancelable ? 'Có' : 'Không'}</Descriptions.Item>
          <Descriptions.Item label="Có thể hoàn tiền">
            {isRefundable ? 'Có' : 'Không'}
          </Descriptions.Item>
          <Descriptions.Item label="Mô tả chính sách hủy" span={3}>
            {cancellationPolicyDescription || 'Không có thông tin'}
          </Descriptions.Item>
          <Descriptions.Item label="Lý do hủy (nếu có)" span={3}>
            {cancellationReason || 'Không có'}
          </Descriptions.Item>
        </Descriptions>

        <Divider />
        <Descriptions title="Dịch vụ đi kèm" bordered>
          <Descriptions.Item label="Dịch vụ">
            {serviceNames?.length ? serviceNames.join(', ') : 'Không có dịch vụ kèm theo'}
          </Descriptions.Item>
        </Descriptions>
      </div>
    </>
  );
}
