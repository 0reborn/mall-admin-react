import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React from 'react';
import { Table, Card, Row, Button, Form, Col, Input, Select, DatePicker, Icon } from 'antd';
import { FormComponentProps } from 'antd/es/form';
import { connect } from 'dva';
import styles from './index.less';

const { Option } = Select;

const { RangePicker } = DatePicker;

const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];

const fieldLabels = {
  name: '输入搜索',
  url: '仓库域名',
  owner: '仓库管理员',
  approver: '审批人',
  dateRange: '生效日期',
  type: '仓库类型',
  name2: '任务名',
  url2: '任务描述',
  owner2: '执行人',
  approver2: '责任人',
  dateRange2: '生效日期',
  type2: '任务类型',
};

// 右上角按钮组
const ExtraButtons: React.FC = () => (
  <div className="horizon-button-group-reverse">
    <Button>重置</Button>
    <Button type="primary">查询结果</Button>
  </div>
);

// 搜索表单Title
const FormTitle: React.FC = () => (
  <div>
    <Icon type="search" />
    <span style={{ marginLeft: '5px' }}>筛选搜索</span>
  </div>
);

// 搜索表单
const SearchForm: React.FC<FormComponentProps> = props => {
  const {
    form: { getFieldDecorator },
  } = props;
  return (
    <Row>
      <Card title={<FormTitle />} extra={<ExtraButtons />}>
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col lg={6} md={12} sm={24}>
              <Form.Item label={fieldLabels.name}>
                {getFieldDecorator('productName', {
                  rules: [{ required: true, message: '请输入仓库名称' }],
                })(<Input placeholder="商品名称" />)}
              </Form.Item>
            </Col>
            <Col xl={{ span: 6, offset: 2 }} lg={{ span: 8 }} md={{ span: 12 }} sm={24}>
              <Form.Item label={fieldLabels.url}>
                {getFieldDecorator('url', {
                  rules: [{ required: true, message: '请选择' }],
                })(
                  <Input
                    style={{ width: '100%' }}
                    addonBefore="http://"
                    addonAfter=".com"
                    placeholder="请输入"
                  />,
                )}
              </Form.Item>
            </Col>
            <Col xl={{ span: 8, offset: 2 }} lg={{ span: 10 }} md={{ span: 24 }} sm={24}>
              <Form.Item label={fieldLabels.owner}>
                {getFieldDecorator('owner', {
                  rules: [{ required: true, message: '请选择管理员' }],
                })(
                  <Select placeholder="请选择管理员">
                    <Option value="xiao">付晓晓</Option>
                    <Option value="mao">周毛毛</Option>
                  </Select>,
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col lg={6} md={12} sm={24}>
              <Form.Item label={fieldLabels.approver}>
                {getFieldDecorator('approver', {
                  rules: [{ required: true, message: '请选择审批员' }],
                })(
                  <Select placeholder="请选择审批员">
                    <Option value="xiao">付晓晓</Option>
                    <Option value="mao">周毛毛</Option>
                  </Select>,
                )}
              </Form.Item>
            </Col>
            <Col xl={{ span: 6, offset: 2 }} lg={{ span: 8 }} md={{ span: 12 }} sm={24}>
              <Form.Item label={fieldLabels.dateRange}>
                {getFieldDecorator('dateRange', {
                  rules: [{ required: true, message: '请选择生效日期' }],
                })(
                  <RangePicker placeholder={['开始日期', '结束日期']} style={{ width: '100%' }} />,
                )}
              </Form.Item>
            </Col>
            <Col xl={{ span: 8, offset: 2 }} lg={{ span: 10 }} md={{ span: 24 }} sm={24}>
              <Form.Item label={fieldLabels.type}>
                {getFieldDecorator('type', {
                  rules: [{ required: true, message: '请选择仓库类型' }],
                })(
                  <Select placeholder="请选择仓库类型">
                    <Option value="private">私密</Option>
                    <Option value="public">公开</Option>
                  </Select>,
                )}
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
    </Row>
  );
};

const WrappedSearchForm = connect()(Form.create<FormComponentProps>()(SearchForm));

const ProductListTable: React.FC = () => (
  <Row>
    <Table dataSource={dataSource} columns={columns} bordered />
  </Row>
);

const ProductList = () => (
    <PageHeaderWrapper className={styles.main}>
      <div className="row-group">
        <WrappedSearchForm />
        <ProductListTable />
      </div>
    </PageHeaderWrapper>
  );

export default ProductList;
