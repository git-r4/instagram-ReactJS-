import { Container, Row, Col } from 'react-bootstrap';
import {BrowserRouter, Routes, Route, NavLink, Link, useParams} from "react-router-dom";
import { NavbarData } from "../navbarData/NavbarData";
import {useEffect, useRef, useState} from "react";
import {RiMessengerFill, RiMessengerLine} from "react-icons/ri";
import {MdAddBox, MdOutlineAddBox, MdExplore, MdOutlineExplore} from "react-icons/md";
import {AiOutlineHome, AiFillHome, AiFillHeart, AiOutlineHeart, AiOutlineSetting} from "react-icons/ai";
import {BiUserCircle, BiBookmark} from 'react-icons/bi';
import {HiOutlineSwitchHorizontal} from 'react-icons/hi';

import '../../../styles/styles.scss';
import '../../../bootstrap_style/bootstrap-grid.min.css';

import Search from "../search/Search";
import Activity from "../../main/activity/Activity";
import Home from "../../main/home/Home";

const NavbarDesktop = () => {
    const [addDropdown, setAddDropdown] = useState(false);
    const [activityDropdown, setActivityDropdown] = useState(false);
    const [profileDropdown, setProfileDropdown] = useState(false);

    const addRefdd = useRef(null);
    const activityRefdd = useRef(null);
    const profileRefdd = useRef(null);

    useEffect(() => {

        const  exitDropdown = (e, ref, setPriority) => {
            if(!ref.current.contains(e.target)){
                setPriority(false);
            }
        }
        /*const exitActivity = (e) => {
            if(!activityRefdd.current.contains(e.target)){
                setActivityDropdown(false);
            }
        }*/
        document.addEventListener('mousedown', (e) => {
            exitDropdown(e, addRefdd, setAddDropdown);
            exitDropdown(e, activityRefdd, setActivityDropdown);
            exitDropdown(e, profileRefdd, setProfileDropdown);
        })
        return () => document.removeEventListener('mousedown', (e) => {
            exitDropdown(e, addRefdd, setAddDropdown);
            exitDropdown(e, activityRefdd, setActivityDropdown);
            exitDropdown(e, profileRefdd, setProfileDropdown);
        });
    }, [])

    /*const renderNavbar = NavbarData.map(({path, icon, activeIcon}) => {
        return(
            <NavLink to={path}
                     key={path}
                     className="navLink">
                { ({ isActive }) => (isActive ? activeIcon : icon) }
            </NavLink>
        )
    })*/

    const conditionForNavlink = (activeIcon, icon) => {
        if(addDropdown || activityDropdown){
            return(
                icon
            )
        }else{
            return(
                ({ isActive }) => (isActive ? activeIcon : icon)
            )
        }
    }
    const renderComponents = NavbarData.map(({Component, path}) => {
        return(
            <Route path={path} key={path} element={<Component />}/>
        )
    })

    const profileData = [
        {
            id: 1,
            text: 'Profile',
            icon: <BiUserCircle />
        },
        {
            id: 2,
            text: 'Saved',
            icon: <BiBookmark />
        },
        {
            id: 3,
            text: 'Settings',
            icon: <AiOutlineSetting />
        },
        {
            id: 4,
            text: 'Switch Accounts',
            icon: <HiOutlineSwitchHorizontal />
        }
    ];

    return(
        <BrowserRouter>
            <div className='navbarDesktop'>
                <Container>
                    <Row>
                        <Col>
                            <div className='navbarBox'>
                                <div className='navbarBox_firstColumn'>
                                    <div className='navbarBox_firstColumn_logoBox'>
                                        <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="instagram" />
                                    </div>
                                    <div className='navbarBox_firstColumn_searchBox'>
                                        <Search />
                                    </div>
                                </div>
                                <div className='navbarBox_secondColumn'>
                                    <div className='navbarBox_secondColumn_navlinkBox'>
                                        <NavLink to="/"
                                                 className="navLink">
                                            {conditionForNavlink(<AiFillHome className="navLink_icons" />, <AiOutlineHome className="navLink_icons" />)}
                                        </NavLink>
                                        <NavLink to="/inbox"
                                                 className="navLink">
                                            {conditionForNavlink(<RiMessengerFill className="navLink_icons" />, <RiMessengerLine className="navLink_icons" />)}
                                        </NavLink>
                                        <div className="navLink"
                                             ref={addRefdd}
                                             onClick={() => setAddDropdown(addDropdown => !addDropdown)}>
                                            { addDropdown ? <MdAddBox className="navLink_icons" /> : <MdOutlineAddBox className="navLink_icons" />}
                                            <div className="postBox">

                                            </div>
                                        </div>
                                        <NavLink to="/explore"
                                                 className="navLink">
                                            {conditionForNavlink(<MdExplore className="navLink_icons" />, <MdOutlineExplore className="navLink_icons" />)}
                                        </NavLink>
                                        <div className="navLink"
                                             ref={activityRefdd}
                                             onClick={() => setActivityDropdown(activityDropdown => !activityDropdown)}>
                                            { activityDropdown ? <AiFillHeart className="navLink_icons" /> : <AiOutlineHeart className="navLink_icons" /> }
                                            <div style={activityDropdown ? {display: 'block'} : {display: 'none', transition: '500ms'}}
                                                 className="triangleBoxNavlink placeForActivity">
                                                <div className="triangleForNavlinks"/>
                                            </div>
                                            <div style={activityDropdown ? {display: 'block'} : {display: 'none', transition: '500ms'}}
                                                 className="dropdownFixed navLink_activityBox">
                                                <Activity />
                                            </div>
                                        </div>
                                        <div className="navLink" ref={profileRefdd}>
                                            <div className="navLink_accountBox"
                                                 style={profileDropdown ? {border: '1px solid rgba(0, 0, 0, 0.8)'} : {border: '1px solid white'}}
                                                 onClick={() => setProfileDropdown(profileDropdown => !profileDropdown)}>
                                                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="profile"/>
                                            </div>
                                            <div>
                                                <div style={profileDropdown ? {display: 'block'} : {display: 'none', transition: '500ms'}}
                                                     className="triangleBoxNavlink placeForAccount">
                                                    <div className="triangleForNavlinks"/>
                                                </div>
                                                <div style={profileDropdown ? {display: 'block'} : {display: 'none', transition: '500ms'}}
                                                     className="dropdownFixed navLink_accountDetailsBox">
                                                    <ul className="navLink_accountDetailsBox_profileInfo">
                                                        {profileData.map(({id, text, icon}) => {
                                                            return(
                                                                <li key={id}>
                                                                    <div className="profileInfoIcon">
                                                                        {icon}
                                                                    </div>
                                                                    {text}
                                                                </li>
                                                            )
                                                        })}
                                                    </ul>
                                                    <div className="line"></div>
                                                    <div className="navLink_accountDetailsBox_logout">
                                                        <button>Log Out</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Routes>
                {renderComponents}
            </Routes>
        </BrowserRouter>
    )
}
export default NavbarDesktop;