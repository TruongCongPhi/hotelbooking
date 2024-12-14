import React, { useEffect, useState } from 'react';
import { Card, Space, Button } from 'antd';
import { request } from '@/request';

const Demo = () => {
  const [data, setData] = useState([]);
  const entity = 'room';
  const options = { items: 10, page: 1 };

  useEffect(() => {
    const fetchData = async () => {
      const response = await request.list({ entity, options });
      setData(response.result.pageItems);
      console.log(response.result.pageItems);
    };

    fetchData();
  }, []);

  return (
    <Space direction="vertical" size={16}>
      <Button type="primary">Hello</Button>

      {data.map((room) => (
        <Card
          key={room.id}
          title={room.roomNumber}
          extra={<a href="#">More</a>}
          style={{
            width: 300,
          }}
        >
          <p>ID: {room.id}</p>
          <p>Tên phòng: {room.roomNumber}</p>
        </Card>
      ))}
    </Space>
  );
};

export default Demo;
