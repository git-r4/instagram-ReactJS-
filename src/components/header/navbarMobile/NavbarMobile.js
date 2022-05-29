import { useState } from 'react';
import { NavbarData } from "../navbarData/NavbarData";
import {BrowserRouter, NavLink} from "react-router-dom";

const NavbarMobile = () => {
    const [activeAccountIcon, setActiveAccountIcon] = useState(false);

    const renderNav = NavbarData.map(({path, icon, activeIcon}) => {
        return(
            <NavLink to={path}
                     key={path}
                     className="bottomNav_accountBox_mobileNavlink">
                {({isActive}) => {
                    if(isActive){
                        setActiveAccountIcon(false)
                        return(
                            activeIcon
                        )
                    }else{
                        return (
                            icon
                        )
                    }
                }}
            </NavLink>
        )
    })

    return(

            <div className="navbarMobile">
                <div className="bottomNav">
                    <div className="bottomNav_accountBox">
                        {renderNav}
                        <div>
                            <NavLink
                                to="/account"
                                onClick={() => {setActiveAccountIcon(true)}}>
                                <div className={activeAccountIcon ? "imgBoxAccount activeMobileAccountIcon" : "imgBoxAccount"}>
                                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="suggestionUser"/>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default NavbarMobile;