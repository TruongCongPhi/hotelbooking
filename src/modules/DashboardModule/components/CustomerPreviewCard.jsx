import { Statistic, Progress, Divider, Row, Spin } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import useLanguage from '@/locale/useLanguage';

export default function CustomerPreviewCard({
  isLoading = false,
  activeCustomer = 0,
  newCustomer = 0,
}) {
  const translate = useLanguage();
  return (
    <Row className="gutter-row">
      <div className="whiteBox shadow" style={{ height: 458 }}>
        <div
          className="pad20"
          style={{
            textAlign: 'center',
            justifyContent: 'center',
          }}
        >
          <h3 style={{ color: '#333', marginBottom: 40, marginTop: 15, fontSize: 'large' }}>
            {translate('Người dùng')}
          </h3>

          {isLoading ? (
            <Spin />
          ) : (
            <div
              style={{
                display: 'grid',
                justifyContent: 'center',
              }}
            >
              <Progress type="dashboard" percent={newCustomer} size={148} />
              <p>{translate('Người dùng mới tháng này')}</p>
              <Divider />
              <Statistic
                title={translate('Tổng người dùng')}
                value={activeCustomer}
                precision={2}
                valueStyle={
                  activeCustomer > 0
                    ? { color: '#333' }
                    : activeCustomer < 0
                      ? { color: '#333' }
                      : { color: '#000000' }
                }
                prefix={
                  activeCustomer > 0 ? (
                    <ArrowUpOutlined />
                  ) : activeCustomer < 0 ? (
                    <ArrowDownOutlined />
                  ) : null
                }
              />
            </div>
          )}
        </div>
      </div>
    </Row>
  );
}
