'use client';
import './styles.scss';

import { Checkbox, Col, InputNumber, Radio, Row, Space, Tag } from 'antd';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';
import clsx from 'clsx';

import type { IDataSelect } from '@/interfaces/common.interfaces';
import type { TBaseValueFilter } from '@/interfaces/shop.interfaces';

type CheckboxFilterProps = {
  title: string;
  classNameTitle?: string;
  data?: IDataSelect<TBaseValueFilter>[];
  value?: TBaseValueFilter;
  onChange?: (value: TBaseValueFilter) => void;
  type: 'radio' | 'checkbox' | 'tag' | 'range';
};

const ShopFilterItem = (props: CheckboxFilterProps) => {
  const { title, data = [], value, onChange, type, classNameTitle } = props;

  const handleChangeTag = (item: IDataSelect) => {
    const isContain = value?.includes(item.value);
    const safe = (Array.isArray(value) ? value : []) as string[];
    if (isContain) {
      onChange?.(safe?.filter((i: string) => i !== item.value));
    } else {
      onChange?.([...safe, item.value]);
    }
  };

  const renderContent = () => {
    switch (type) {
      case 'radio':
        return (
          <Radio.Group value={value} onChange={(evt) => onChange?.(evt.target.value)}>
            <Space direction='vertical'>
              {data?.map((item) => (
                <Radio key={item.id} value={item.value}>
                  {item.label}
                </Radio>
              ))}
            </Space>
          </Radio.Group>
        );
      case 'checkbox':
        return (
          <Checkbox.Group
            value={value as CheckboxValueType[]}
            onChange={(val) => onChange?.(val as TBaseValueFilter)}
          >
            <Row gutter={[0, 12]}>
              {data?.map((item) => (
                <Col span={12} key={item.id}>
                  <Checkbox value={item.value}>{item.label}</Checkbox>
                </Col>
              ))}
            </Row>
          </Checkbox.Group>
        );
      case 'tag':
        return (
          <div className='flex flex-wrap gap-2'>
            {data?.map((item) => (
              <Tag
                className={clsx(
                  'cursor-pointer px-3 py-1.5 text-sm font-medium',
                  value?.includes(item.value as string) ? 'text-white' : 'text-[#6F767E]',
                )}
                color={value?.includes(item.value as string) ? '#2A85FF' : ''}
                key={item.id}
                onClick={() => handleChangeTag(item)}
              >
                {item.label}
              </Tag>
            ))}
          </div>
        );
      case 'range':
        return (
          <div className='mb-4 flex gap-2'>
            <InputNumber
              size='large'
              className='flex-1'
              placeholder='Min price'
              min={1}
              max={10000}
              value={(value as number[])[0]}
              onChange={(min = 0) => onChange?.([min!, value![1] as number])}
            />
            <InputNumber
              size='large'
              className='flex-1'
              placeholder='Max price'
              min={1}
              max={10000}
              value={(value as number[])[1]}
              onChange={(max) => onChange?.([value![0] as number, max!])}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className='shop-filter-item flex flex-col gap-4'>
      <div className={clsx('text-title text-sm font-medium', classNameTitle)}>{title}</div>
      {renderContent()}
    </div>
  );
};

export default ShopFilterItem;
