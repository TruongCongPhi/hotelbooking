import { useState, useEffect, useRef } from 'react';
import {
  Form,
  Input,
  InputNumber,
  Button,
  Select,
  Divider,
  Row,
  Col,
  Switch,
  Upload,
  message,
} from 'antd';

import { PlusOutlined, UploadOutlined } from '@ant-design/icons';

import AutoCompleteAsync from '@/components/AutoCompleteAsync';
import SelectTag from '@/components/SelectTag';
import useLanguage from '@/locale/useLanguage';

const { TextArea } = Input;

export default function RoomForm({ current = null, form = null }) {
  return <LoadRoomForm current={current} form={form} />;
}

function LoadRoomForm({ current = null, form = null }) {
  const [serviceIds, setServiceIds] = useState([]);
  const [amenityIds, setAmenityIds] = useState([]);
  const [imageList, setImageList] = useState([]);

  const handleRemoveImage = (file) => {
    const imageId = file.uid;

    const currentDeleteIds = form.getFieldValue('deleteImageIds') || [];

    form.setFieldsValue({
      deleteImageIds: [...currentDeleteIds, imageId],
    });
  };

  useEffect(() => {
    if (current) {
      const amenityIds = current.amenities?.map((amenity) => amenity.id) || [];
      const serviceIds = current.services?.map((service) => service.id) || [];
      const imageList =
        current.roomImages?.map((img) => ({
          uid: img.id,
          name: img.filePath.split('/').pop(),
          url: img.filePath,
          thumbUrl: img.filePath,
        })) || [];

      setAmenityIds(amenityIds);
      setServiceIds(serviceIds);
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
        <Col span={24}>
          <Form.Item
            name="roomNumber"
            label={'Tên phòng'}
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập tên phòng',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={8}>
          <Form.Item
            name="roomTypeId"
            label={'Loại phòng'}
            rules={[
              {
                required: true,
                message: 'Vui lòng chọn loại phòng',
              },
            ]}
          >
            <AutoCompleteAsync
              entity={'roomtype'}
              displayLabels={['roomTypeName']}
              searchFields={'roomTypeName'}
              redirectLabel={'Thêm loại phòng'}
              withRedirect
              urlToRedirect={'/roomtype'}
            />
          </Form.Item>
        </Col>

        <Col className="gutter-row" span={6}>
          <Form.Item
            label={'Trạng thái'}
            name="status"
            rules={[
              {
                required: true,
              },
            ]}
            initialValue={'Available'}
          >
            <Select
              options={[
                { value: 'Available', label: 'Có sẵn' },
                { value: 'Locked', label: 'Khóa' },
              ]}
            ></Select>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="numberOfPeople"
            label={'Số người tối đa'}
            rules={[{ required: true, type: 'number', message: 'Vui lòng nhập số người' }]}
          >
            <InputNumber min={1} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="originalPrice"
            label={'Giá gốc'}
            min={0}
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
          <Form.Item name="discountedPrice" label={'Giá giảm'}>
            <InputNumber
              style={{ width: '100%' }}
              formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
              parser={(value) => value.replace(/\./g, '')}
              min={0}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="priceDescription" label={'Mô tả giá'}>
            <TextArea rows={1} />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={24}>
          <Form.Item name="amenityIds" label={'Tiện ích'}>
            <SelectTag
              defaultValue={amenityIds}
              entity="amenity"
              labelKey="amenityName" // Tên hiển thị
              mode="multiple" // Chế độ chọn nhiều
              onChange={(selectedValues) => console.log('Selected:', selectedValues)}
            />
          </Form.Item>
        </Col>

        <Col className="gutter-row" span={24}>
          <Form.Item name="serviceIds" label={'Dịch vụ'}>
            <SelectTag
              defaultValue={serviceIds}
              entity="service"
              labelKey="serviceName"
              mode="multiple"
              onChange={(selectedValues) => console.log('Selected:', selectedValues)}
            />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item name="roomDescription" label={'Mô tả phòng'}>
            <TextArea rows={2} />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item name="isRefundable" label={'Hoàn tiền'} valuePropName="checked">
            <Switch checkedChildren={'Có'} unCheckedChildren={'Không'} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="isCancelable" label={'Hủy phòng'} valuePropName="checked">
            <Switch checkedChildren={'Có'} unCheckedChildren={'Không'} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="cancellationDeadlineHours" label={'Giờ hết hạn hủy'}>
            <InputNumber min={0} />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item name="CancellationPolicyDescription" label={'Mô tả chính sách hủy bỏ'}>
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
      <div style={{ position: 'relative', width: ' 100%', float: 'right' }}>
        <Row gutter={[12, -5]}>
          <Col className="gutter-row" span={5}>
            <Form.Item>
              <Button type="primary" htmlType="submit" icon={<PlusOutlined />} block>
                {'Lưu'}
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </div>
    </>
  );
}
