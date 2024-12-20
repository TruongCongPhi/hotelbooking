import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

import { Tag, Row, Col } from 'antd';
import useLanguage from '@/locale/useLanguage';

import { useMoney } from '@/settings';

import { request } from '@/request';
import useFetch from '@/hooks/useFetch';
import useOnFetch from '@/hooks/useOnFetch';

import RecentTable from './components/RecentTable';

import SummaryCard from './components/SummaryCard';
import PreviewCard from './components/PreviewCard';
import CustomerPreviewCard from './components/CustomerPreviewCard';

export default function DashboardModule() {
  const translate = useLanguage();
  const { formatCurrency } = useMoney();

  const getStatsData = async ({ entity }) => {
    return await request.summary({
      entity,
    });
  };

  const { result: hotelResult, isLoading: hotelLoading, onFetch: fetchhotelsStats } = useOnFetch();

  const { result: clientResult, isLoading: clientLoading } = useFetch(() =>
    request.summary({ entity: 'user/user-statistic' })
  );

  useEffect(() => {
    fetchhotelsStats(getStatsData({ entity: 'statistic/statistic-room' }));
  }, []);
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
      title: translate('Tổng tiền'),
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
    {
      title: translate('Trạng thái'),
      dataIndex: 'bookingStatus',
      key: 'bookingStatus',
      render: (bookingStatus) => {
        const statusColors = {
          Cancelled: 'yellow',
          Pending: 'orange',
          Success: 'green',
          Failed: 'red',
        };

        const statusLabels = {
          Cancelled: 'Đã hủy',
          Pending: 'Đang chờ',
          Success: 'Đã đặt',
          Failed: 'Thất bại',
        };

        return (
          <Tag color={statusColors[bookingStatus] || 'default'}>
            {statusLabels[bookingStatus] || 'Không xác định'}
          </Tag>
        );
      },
    },
    {
      title: translate('Ngày đặt'),
      dataIndex: 'createdAt',
      onCell: () => {
        return {
          style: {
            whiteSpace: 'nowrap',
          },
        };
      },
      render: (_, record) => {
        return dayjs(record.createdAt).format('DD/MM/YYYY');
      },
    },
  ];

  const entityData = [
    {
      result: hotelResult,
      isLoading: hotelLoading,
      entity: 'roomBooking',
      title: translate('Tỷ lệ Đặt phòng'),
    },
  ];

  const statisticCards = entityData.map((data, index) => {
    const { result, entity, isLoading, title } = data;

    return (
      <PreviewCard
        key={index}
        title={title}
        isLoading={isLoading}
        entity={entity}
        statistics={
          !isLoading &&
          Object.entries(result?.roombookingStatusStatistic || {}).map(([key, value]) => ({
            tag: key,
            color: 'blue',
            value: value,
          }))
        }
      />
    );
  });

  return (
    <>
      <Row gutter={[32, 32]}>
        <SummaryCard
          title={translate('Lượt đặt phòng')}
          prefix={translate('Tháng này')}
          isLoading={hotelLoading}
          data={hotelResult?.totalBooking}
          isCurrency={false}
        />
        {/* <SummaryCard
          title={translate('Quote')}
          prefix={translate('This month')}
          isLoading={quoteLoading}
          data={quoteResult?.total}
        /> */}
        <SummaryCard
          title={translate('Đã thanh toán')}
          prefix={translate('Tháng này')}
          isLoading={hotelLoading}
          data={hotelResult?.totalPaid}
        />
        <SummaryCard
          title={translate('Chưa thanh toán')}
          prefix={translate('Tháng này')}
          isLoading={hotelLoading}
          data={hotelResult?.totalUnpaid}
        />
        <SummaryCard
          title={translate('Đã hoàn tiền')}
          prefix={translate('Tháng này')}
          isLoading={hotelLoading}
          data={hotelResult?.totalRefunded}
        />
      </Row>
      <div className="space30"></div>
      <Row gutter={[32, 32]}>
        <Col className="gutter-row w-full" sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 18 }}>
          <div className="whiteBox shadow" style={{ height: 458 }}>
            <Row className="pad20" gutter={[0, 0]}>
              {statisticCards}
            </Row>
          </div>
        </Col>
        <Col className="gutter-row w-full" sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 6 }}>
          <CustomerPreviewCard
            isLoading={clientLoading}
            activeCustomer={clientResult?.totalCustomers}
            newCustomer={clientResult?.totalNewCustomers}
          />
        </Col>
      </Row>
      <div className="space30"></div>
      <Row gutter={[32, 32]}>
        <Col className="gutter-row w-full" sm={{ span: 24 }} lg={{ span: 24 }}>
          <div className="whiteBox shadow pad20" style={{ height: '100%' }}>
            <h3 style={{ color: '#22075e', marginBottom: 5, padding: '0 20px 20px' }}>
              {translate('Đặt phòng gần đây')}
            </h3>

            <RecentTable entity={'roombooking'} dataTableColumns={dataTableColumns} />
          </div>
        </Col>
      </Row>
    </>
  );
}
