
import {RiMessengerFill, RiMessengerLine} from "react-icons/ri";
import {MdAddBox, MdOutlineAddBox, MdExplore, MdOutlineExplore} from "react-icons/md";
import {AiOutlineHome, AiFillHome, AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import {BiSearch, BiSearchAlt} from "react-icons/bi";

import Home from "../../main/home/Home";
import Inbox from "../../main/inbox/Inbox";
import AddPost from "../../main/addPost/AddPost";
import Explore from "../../main/explore/Explore";
import Activity from "../../main/activity/Activity";
import Search from "../search/Search";
import Account from "../../main/account/Account";

export const NavbarData = [
    {
        path: '/',
        Component: Home,
        icon: <AiOutlineHome/>,
        activeIcon: <AiFillHome/>
    },
    {
        path: '/explore',
        Component: Explore,
        icon: <BiSearch/>,
        activeIcon: <BiSearchAlt/>
    },
    {
        path: '*',
        icon: <MdOutlineAddBox/>,
        activeIcon: <MdAddBox/>
    },
    {
        path: '/activity',
        Component: Activity,
        icon: <AiOutlineHeart/>,
        activeIcon: <AiFillHeart/>
    }
]
