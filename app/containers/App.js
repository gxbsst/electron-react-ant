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
        >
          <SubMenu key="sub1" title={<span><Icon type="mail" /><span>基础资料设定</span></span>}>
            <MenuItemGroup title={<span><Icon type="user" /><span>设备模块</span></span>}>
              <Menu.Item key="1"> <Link to="/suppliers">供应商信息</Link></Menu.Item>
              <Menu.Item key="2"> <Link to="/">工程师群组</Link></Menu.Item>
              <Menu.Item key="3"><Link to="counter">设备群组</Link></Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="工位">
              <Menu.Item key="4">工位</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="工艺路线">
              <Menu.Item key="5">工艺路线</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="产品">
              <Menu.Item key="6">产品</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="物料">
              <Menu.Item key="7">物料</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="区域">
              <Menu.Item key="8">区域</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="企业">
              <Menu.Item key="9">工位</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="品质">
              <Menu.Item key="10">品质</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="报表">
              <Menu.Item key="11">报表</Menu.Item>
            </MenuItemGroup>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>应用程序</span></span>}>
            <Menu.Item key="12">计划管理</Menu.Item>
            <Menu.Item key="13">在制品管理</Menu.Item>
            <Menu.Item key="14">工单管理</Menu.Item>
            <Menu.Item key="15">库存管理</Menu.Item>
            <Menu.Item key="16">设备状态</Menu.Item>
            <Menu.Item key="17">品种分析</Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" title={<span><Icon type="setting" /><span>系统管理</span></span>}>
            <Menu.Item key="18">系统设定</Menu.Item>
            <Menu.Item key="19">审核流程</Menu.Item>
            <Menu.Item key="20">用户设定</Menu.Item>
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

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
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
            <div className="logo">
              <img src="assets/images/vt-ims.png" alt="" />
            </div>
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

        <Footer>
          ©2017 上海文什数据科技有限公司
        </Footer>
      </div>
    );
  }
}


