import React from 'react';
import { Redirect, Route, Switch, NavLink } from 'react-router-dom';
import { initializeApp } from './Redux/app_reducer'
import './App.css';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import { UsersPage } from './components/Users/UsersContainer';
import { Header } from './components/Header/Header';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import Preloader from './common/Preloader/Preloader';
import { AppStateType } from './Redux/redux-store';
import withSuspense from './hoc/withSuspense';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';


const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileCointainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ChatPage = React.lazy(() => import('./components/ChatPage/ChatPage'));



type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
  initializeApp: () => void
}

const SuspendedDialogs = withSuspense(DialogsContainer);
const SuspendedProfile = withSuspense(ProfileContainer);
const SuspendedChatPage = withSuspense(ChatPage);

class App extends React.Component<MapPropsType & DispatchPropsType>{

  componentDidMount() {
    this.props.initializeApp();

  }

  render() {
    const { SubMenu } = Menu;
    const { Content, Sider } = Layout;

    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <Layout>
        <Header />
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              {/* <div className={cl.nav_item}>
                <NavLink to='/profile' activeClassName={cl.activeLink}>Profile</NavLink>
            </div>
            <div className={cl.nav_item}>
                <NavLink to='/dialogs' activeClassName={cl.activeLink}>Messages</NavLink>
            </div> */}
              <SubMenu key="sub1" icon={<UserOutlined />} title="My Profile">
                <Menu.Item key="1"><NavLink to='/profile' >Profile</NavLink></Menu.Item>
                <Menu.Item key="2"><NavLink to='/dialogs'>Messages</NavLink></Menu.Item>
                <Menu.Item key="3"><NavLink to='/chatPage'>Chat</NavLink></Menu.Item>
              </SubMenu>
              {/* <SubMenu key="sub2" icon={<LaptopOutlined />} title="Users">
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu> */}
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}>
              <Switch>
                <Route exact path='/'
                  render={() => <Redirect to={'/profile'} />} />
                <Route path='/dialogs' render={() => <SuspendedDialogs />} />
                <Route path='/profile/:userId?' render={() => <SuspendedProfile />} />
                <Route path='/news' render={() => <News />} />
                <Route path='/musik' render={() => <Music />} />
                <Route path='/settings' render={() => <Settings />} />
                <Route path='/users' render={() => <UsersPage />} />
                <Route path='/login' render={() => <Login />} />
                <Route path='/chatPage' render={() => <SuspendedChatPage />} />
                <Route path='*' render={() => <div>404 NOT FOUND</div>} />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Layout>



      //  <div className='app-wrapper'>
      //   <div className='header'>
      //     <HeaderContainer />
      //   </div>
      //   <Navbar />
      //   <div className='wrapper-content'>
      //     <Switch>
      //       <Route exact path='/'
      //         render={() => <Redirect to={'/profile'} />} />
      //       <Route path='/dialogs' render={() => <SuspendedDialogs />} />
      //       <Route path='/profile/:userId?' render={() => <SuspendedProfile />} />
      //       <Route path='/news' render={() => <News />} />
      //       <Route path='/musik' render={() => <Music />} />
      //       <Route path='/settings' render={() => <Settings />} />
      //       <Route path='/users' render={() => <UsersPage />} />
      //       <Route path='/login' render={() => <Login />} />
      //       <Route path='*' render={() => <div>404 NOT FOUND</div>} />
      //     </Switch>
      //   </div>
      // </div>
    );
  }

}

let mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, { initializeApp })(App);