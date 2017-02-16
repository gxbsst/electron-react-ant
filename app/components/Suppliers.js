import React, { Component } from 'react'
import { Table, Button, Icon } from 'antd';

const columns = [{
  title: '名称',
  dataIndex: 'name',
  render: text => <a href="#">{text}</a>,
}, {
  title: '地址',
  dataIndex: 'age',
}, {
  title: '联系人',
  dataIndex: 'address',
}];
const data = [{
  key: '1',
  name: '上海明匠智能系统有限公司',
  age: "上海嘉定区高台路1111",
  address: '韦旭红',
}, {
  key: '2',
  name: '上海明匠智能系统有限公司',
  age: "上海嘉定区高台路1111",
  address: '韦旭红',
}, {
  key: '3',
  name: '上海明匠智能系统有限公司',
  age: "上海嘉定区高台路1111",
  address: '韦旭红',
}, {
  key: '4',
  name: '上海明匠智能系统有限公司',
  age: "上海嘉定区高台路1111",
  address: '韦旭红',
},
{
  key: '5',
  name: '上海明匠智能系统有限公司',
  age: "上海嘉定区高台路1111",
  address: '韦旭红',
},
{
  key: '6',
  name: '上海明匠智能系统有限公司',
  age: "上海嘉定区高台路1111",
  address: '韦旭红',
},
{
  key: '7',
  name: '上海明匠智能系统有限公司',
  age: "上海嘉定区高台路1111",
  address: '韦旭红',
},
{
  key: '8',
  name: '上海明匠智能系统有限公司',
  age: "上海嘉定区高台路1111",
  address: '韦旭红',
},
{
  key: '9',
  name: '上海明匠智能系统有限公司',
  age: "上海嘉定区高台路1111",
  address: '韦旭红',
},
{
  key: '10',
  name: '上海明匠智能系统有限公司',
  age: "上海嘉定区高台路1111",
  address: '韦旭红',
},
{
  key: '11',
  name: '上海明匠智能系统有限公司',
  age: "上海嘉定区高台路1111",
  address: '韦旭红',
},
{
  key: '12',
  name: '上海明匠智能系统有限公司',
  age: "上海嘉定区高台路1111",
  address: '韦旭红',
}
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User',    // Column configuration not to be checked
  }),
};

class Suppliers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      size: 'default'
    }
  }
  render() {
    const size = this.state.size;
    return (
      <div className="suppliers">
        <div className="actions">
          <Button type="primary" shape="circle" icon="download" size={size} />
          <Button type="primary" shape="circle" icon="delete" size={size} />
          <Button type="primary" shape="circle" icon="export" size={size} />
        </div>
        <Table pagination={{ defaultPageSize: 8 }} rowSelection={rowSelection} size="4" columns={columns} dataSource={data} />
      </div>
    )
  }
}

export default Suppliers