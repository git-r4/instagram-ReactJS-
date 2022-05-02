
import {RiMessengerFill, RiMessengerLine} from "react-icons/ri";
import {MdAddBox, MdOutlineAddBox, MdExplore, MdOutlineExplore} from "react-icons/md";
import {AiOutlineHome, AiFillHome, AiFillHeart, AiOutlineHeart} from "react-icons/ai";

import Home from "../../main/home/Home";
import Inbox from "../../main/inbox/Inbox";
import AddPost from "../../main/addPost/AddPost";
import Explore from "../../main/explore/Explore";
import Activity from "../../main/activity/Activity";

export const NavbarData = [
    {
        path: '/',
        Component: Home
    },
    {
        path: '/inbox',
        Component: Inbox
    },
    {
        path: '/explore',
        Component: Explore
    }
]
