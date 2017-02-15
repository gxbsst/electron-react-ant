// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

export class SliderContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: '1'
    }
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <div>
        <Menu onClick={this.handleClick}
          style={{ width: 240 }}
          defaultOpenKeys={['sub1']}
          selectedKeys={[this.state.current]}
          mode="inline"
          theme="dark"
        >
          <SubMenu key="sub1" title={<span><Icon type="mail" /><span>基础资料设定</span></span>}>
            <MenuItemGroup title="设备模块">
              <Menu.Item key="1"> <Link to="/suppliers">供应商信息</Link></Menu.Item>
              <Menu.Item key="2">工程师群组</Menu.Item>
              <Menu.Item key="3">设备群组</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="品种">
              <Menu.Item key="3"></Menu.Item>
              <Menu.Item key="4"></Menu.Item>
            </MenuItemGroup>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}
export default class App extends Component {
  static propTypes = {
    children: React.PropTypes.element
  };

  constructor(props) {
    super(props)
    this.state = {
      collapsed: false
    }
  }

  render() {
    return (
      <div>
        <Layout>
          <Sider
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
          >
            <div className="logo" />
            <SliderContent />
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
            </Header>
            <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
              {this.props.children}
            </Content>
          </Layout>
        </Layout>


      </div>
    );
  }
}


