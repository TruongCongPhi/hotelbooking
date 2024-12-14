import { useState, useEffect } from 'react';
import { Form, Input, InputNumber, Button, Switch, Upload, Row, Col, Divider, message } from 'antd';
import { UploadOutlined, PlusOutlined } from '@ant-design/icons';

const { TextArea } = Input;

export default function TourForm({ current = null, form = null }) {
  return <LoadTourForm current={current} form={form} />;
}

function LoadTourForm({ current = null, form = null }) {
  console.log(JSON.stringify(current));
  const [imageList, setImageList] = useState([]);

  const handleRemoveImage = (file) => {
    if (form != null) {
      const imageId = file.uid;
      const currentDeleteIds = form.getFieldValue('deleteImageIds') || [];
      form.setFieldsValue({
        deleteImageIds: [...currentDeleteIds, imageId],
      });
    }
  };

  useEffect(() => {
    if (current != null) {
      const imageList =
        current.tourImages?.map((img) => ({
          uid: img.id,
          name: img.filePath.split('/').pop(),
          url: img.filePath,
          thumbUrl: img.filePath,
        })) || [];
      setImageList(imageList);
      form.setFieldsValue({
        deleteImageIds: [],
      });
    }
  }, [current, form]);

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('Bạn chỉ có thể tải lên tệp JPG/PNG!');
    }
    const isLt2M = file.size / 1024 / 1024 < 5;
    if (!isLt2M) {
      message.error('Ảnh phải nhỏ hơn 5MB!');
    }
    return false;
  };

  return (
    <>
      <Row gutter={[12, 0]}>
        <Col span={8}>
          <Form.Item name="isActive" label={'Trạng thái'} valuePropName="checked">
            <Switch checkedChildren={'Hoạt động'} unCheckedChildren={'Đóng'} />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item
            name="tourName"
            label={'Tên tour'}
            rules={[{ required: true, message: 'Vui lòng nhập tên tour' }]}
          >
            <Input />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item name="shortDescription" label={'Mô tả ngắn'}>
            <TextArea rows={2} />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item name="longDescription" label={'Mô tả chi tiết'}>
            <TextArea rows={4} />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item
            name="originalPrice"
            label={'Giá gốc'}
            rules={[{ required: true, message: 'Vui lòng nhập giá gốc' }]}
          >
            <InputNumber
              style={{ width: '100%' }}
              formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
              parser={(value) => value.replace(/\./g, '')}
              suffix="VND"
              min={0}
            />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item name="discountPrice" label={'Giá giảm'}>
            <InputNumber
              style={{ width: '100%' }}
              formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
              parser={(value) => value.replace(/\./g, '')}
              suffix="VND"
              min={0}
            />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item
            name="duration"
            label={'Thời lượng (giờ)'}
            rules={[{ required: true, type: 'number', message: 'Vui lòng nhập thời lượng' }]}
          >
            <InputNumber min={1} />
          </Form.Item>
        </Col>

        <Col span={6}>
          <Form.Item name="isRefundable" label={'Hoàn tiền'} valuePropName="checked">
            <Switch checkedChildren={'Có'} unCheckedChildren={'Không'} />
          </Form.Item>
        </Col>

        <Col span={6}>
          <Form.Item name="isCancelable" label={'Hủy tour'} valuePropName="checked">
            <Switch checkedChildren={'Có'} unCheckedChildren={'Không'} />
          </Form.Item>
        </Col>

        <Col span={6}>
          <Form.Item name="reschedulable" label={'Có thể dời lịch'} valuePropName="checked">
            <Switch checkedChildren={'Có'} unCheckedChildren={'Không'} />
          </Form.Item>
        </Col>

        <Col span={6}>
          <Form.Item
            name="cancellationDeadlineHours"
            label={'Giờ hết hạn hủy'}
            rules={[{ type: 'number', min: 0, message: 'Vui lòng nhập số giờ hợp lệ' }]}
          >
            <InputNumber min={0} />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item name="voucherValidity" label={'Hiệu lực voucher'}>
            <TextArea rows={2} />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item name="redemptionMethod" label={'Phương thức nhận ưu đãi'}>
            <TextArea rows={2} />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item name="cancellationPolicyDescription" label={'Mô tả chính sách hủy bỏ'}>
            <TextArea rows={2} />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item name="refundPolicy" label={'Chính sách hoàn tiền'}>
            <TextArea rows={2} />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item name="reschedulePolicy" label={'Chính sách dời lịch'}>
            <TextArea rows={2} />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item name="termsAndConditions" label={'Điều khoản và điều kiện'}>
            <TextArea rows={2} />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item
            name="files"
            label="Ảnh"
            valuePropName="imageList"
            getValueFromEvent={(e) => e.fileList.map((file) => file.originFileObj)}
          >
            <Upload
              beforeUpload={beforeUpload}
              listType="picture"
              accept="image/png, image/jpeg"
              maxCount={10}
              multiple={true}
              onRemove={handleRemoveImage}
              defaultFileList={imageList}
            >
              <Button icon={<UploadOutlined />}>{'Chọn để tải ảnh'}</Button>
            </Upload>
          </Form.Item>
        </Col>

        <Form.Item name="deleteImageIds" initialValue={[]}>
          <Input type="hidden" />
        </Form.Item>
      </Row>

      <Divider dashed />

      <Row gutter={[12, -5]}>
        <Col span={5}>
          <Form.Item>
            <Button type="primary" htmlType="submit" icon={<PlusOutlined />} block>
              {'Lưu'}
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </>
  );
}
