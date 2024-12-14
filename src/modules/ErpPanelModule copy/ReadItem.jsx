import { useState, useEffect } from 'react';
import {
  Row,
  Col,
  Statistic,
  Tag,
  Descriptions,
  Divider,
  Card,
  Image,
  Button,
  Typography,
  List,
} from 'antd';
import { PageHeader } from '@ant-design/pro-layout';
import { EditOutlined, FilePdfOutlined, CloseCircleOutlined } from '@ant-design/icons';

import { useSelector, useDispatch } from 'react-redux';
import useLanguage from '@/locale/useLanguage';
import { erp } from '@/redux/erp/actions';

import { generate as uniqueId } from 'shortid';

import { selectCurrentItem } from '@/redux/erp/selectors';
import useMoney from '@/hooks/useMoney';
import { useNavigate } from 'react-router-dom';

export default function ReadItem({ config, selectedItem }) {
  const translate = useLanguage();
  const { entity, ENTITY_NAME } = config;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { formatCurrency } = useMoney();
  const { result: currentResult } = useSelector(selectCurrentItem);
  console.log(currentResult);

  const resetErp = {
    id: '',
    status: 'Unavailable',
    roomTypeId: '',
    roomTypeName: '',
    roomNumber: '',
    numberOfPeople: 0,
    originalPrice: null,
    discountedPrice: null,
    price: null,
    priceDescription: '',
    roomDescription: '',
    cancellationPolicyDescription: '',
    isCancelable: false,
    isRefundable: false,
    amenities: [],
    services: [],
    roomImages: [],
  };

  const [currentErp, setCurrentErp] = useState(selectedItem ?? resetErp);

  useEffect(() => {
    if (currentResult) {
      setCurrentErp(currentResult);
    }
    return () => {
      setCurrentErp(resetErp);
    };
  }, [currentResult]);

  return (
    <>
      <PageHeader
        onBack={() => {
          navigate(`/${entity.toLowerCase()}`);
        }}
        title={`${ENTITY_NAME}`}
        ghost={false}
        extra={[
          <Button
            key={`${uniqueId()}`}
            onClick={() => {
              navigate(`/${entity.toLowerCase()}`);
            }}
            icon={<CloseCircleOutlined />}
          >
            {translate('Đóng')}
          </Button>,

          <Button
            key={`${uniqueId()}`}
            onClick={() => {
              dispatch(
                erp.currentAction({
                  actionType: 'update',
                  data: currentErp,
                })
              );
              navigate(`/${entity.toLowerCase()}/update/${currentErp.id}`);
            }}
            type="primary"
            icon={<EditOutlined />}
          >
            {translate('Chỉnh sửa')}
          </Button>,
        ]}
        style={{
          padding: '20px 0px',
        }}
      ></PageHeader>
      <Divider dashed />
      <div style={{ padding: '20px' }}>
        <Row gutter={[16, 16]}>
          <Col span={6}>
            <Statistic title="Loại phòng" value={currentResult?.roomTypeName || 'N/A'} />
          </Col>
          <Col span={6}>
            <Statistic title="Số phòng" value={currentResult?.roomNumber || 'N/A'} />
          </Col>
          <Col span={6}>
            <Statistic title="Số người" value={currentResult?.numberOfPeople || 'N/A'} />
          </Col>
          <Col span={6}>
            <Statistic
              title="Trạng thái"
              value={currentResult?.status === 'Available' ? 'Hoạt động' : 'Khóa'}
            />
          </Col>
        </Row>

        <Divider />

        {/* Room Pricing Info */}
        <Descriptions title="Thông tin giá" bordered>
          <Descriptions.Item label="Giá gốc">
            {currentResult?.originalPrice ? formatCurrency(currentResult.originalPrice) : 'N/A'}
          </Descriptions.Item>
          <Descriptions.Item label="Giá đã giảm">
            {currentResult?.discountedPrice
              ? formatCurrency(currentResult.discountedPrice)
              : 'Không có'}
          </Descriptions.Item>
          <Descriptions.Item label="Giá hiện tại">
            {currentResult?.price ? formatCurrency(currentResult.price) : 'N/A'}
          </Descriptions.Item>
        </Descriptions>

        <Divider />

        <Descriptions title="Thông tin phòng" bordered>
          <Descriptions.Item label="Tiện ích" span={3}>
            {currentResult?.amenities?.length ? (
              <List
                itemLayout="horizontal"
                dataSource={currentResult?.amenities}
                renderItem={(item, index) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={
                        <span
                          dangerouslySetInnerHTML={{ __html: item.iconSvg }}
                          style={{
                            display: 'inline-block',
                            verticalAlign: 'middle',
                            width: '24px',
                            height: '24px',
                          }}
                        />
                      }
                      title={item.amenityName}
                    />
                  </List.Item>
                )}
              />
            ) : (
              'Không có tiện ích'
            )}
          </Descriptions.Item>
          <Descriptions.Item label="Dịch vụ" span={3}>
            {currentResult?.services?.length ? (
              <List
                itemLayout="horizontal"
                dataSource={currentResult?.services}
                renderItem={(item, index) => (
                  <List.Item>
                    <List.Item.Meta title={item.serviceName} />
                  </List.Item>
                )}
              />
            ) : (
              'Không có tiện ích'
            )}
          </Descriptions.Item>

          <Descriptions.Item label="Mô tả">
            {currentResult?.roomDescription || 'Không có thông tin'}
          </Descriptions.Item>
        </Descriptions>
        <Divider />

        <Descriptions title="Chính sách phòng" bordered>
          <Descriptions.Item label="Được hủy phòng">
            {currentResult?.isCancelable ? 'Có' : 'Không'}
          </Descriptions.Item>
          <Descriptions.Item label="Mô tả chính sách hủy" span={2}>
            {currentResult?.cancellationPolicyDescription || 'Không có thông tin'}
          </Descriptions.Item>
          <Descriptions.Item label="Được hoàn tiền">
            {currentResult?.isCancelable ? 'Có' : 'Không'}
          </Descriptions.Item>
          <Descriptions.Item label="Mô tả chính sách hoàn tiền" span={2}>
            {currentResult?.cancellationPolicyDescription || 'Không có thông tin'}
          </Descriptions.Item>
        </Descriptions>

        <Divider />
        <Descriptions title="Ảnh"></Descriptions>
        <Row gutter={[16, 16]}>
          {currentResult?.roomImages?.map((image, index) => (
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
