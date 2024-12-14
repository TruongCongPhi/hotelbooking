import { useEffect, useState } from 'react';
import { Select } from 'antd';
import { generate as uniqueId } from 'shortid';
import { request } from '@/request';

const SelectTag = ({
  entity,
  labelKey = 'label',
  valueKey = 'id',
  mode = 'default',
  defaultValue,
  onChange,
  style = {},
}) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await request.list({ entity });
        setOptions(response?.result.pageItems || []);
      } catch (error) {
        console.error('Failed to fetch options:', error);
      }
    }
    fetchData();
  }, [entity]);

  return (
    <Select
      mode={mode}
      defaultValue={defaultValue}
      style={{ width: '100%', ...style }}
      onChange={onChange}
    >
      {options.map((option) => (
        <Select.Option key={`${uniqueId()}`} value={option[valueKey]}>
          {option[labelKey]}
        </Select.Option>
      ))}
    </Select>
  );
};

export default SelectTag;
