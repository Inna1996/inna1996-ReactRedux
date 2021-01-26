import React from 'react';
import { Link } from 'react-router-dom';
import cl from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth, selectLogin } from './../../Redux/auth-selectors';
import { logout } from '../../Redux/auth_reducer'
import { Layout, Menu, Button, Row, Col, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export const Header: React.FC = (props) => {

    const { Header } = Layout;
    const isAuth = useSelector(selectIsAuth);
    const login = useSelector(selectLogin);
    const dispatch = useDispatch();

    const logoutCallBack = () => {
        dispatch(logout())
    };
    return (

        <Header className="header">
            <div className="logo" />
            <Row>
                <Col span={18}> <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <Link to='/users'>Users</Link>
                    </Menu.Item>
                </Menu></Col>
                {isAuth
                    ? <><Col span={1}>
                        <Avatar alt={login || ''} style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                    </Col>
                        <Col span={5}><Button onClick={logoutCallBack}>Log out</Button></Col>
                    </>
                    : <Col span={6}>
                        <Button>
                            <Link to={'/login'}>
                                Login
                </Link></Button></Col>}
            </Row>

        </Header>
        // <div className={cl.header}>
        //
        //     <div className={cl.loginBlock}>
        //         {isAuth
        //             ? <div> {login} - <button onClick={logoutCallBack}>Log out</button></div>
        //             : <NavLink to={'/login'}>
        //                 Login
        //         </NavLink>}
        //     </div>
        // </div>
    );
}

