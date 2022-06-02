import {Link} from "react-router-dom";
import {AiFillSetting} from "react-icons/ai";
import {IoMdPersonAdd} from "react-icons/io"
import {GrDown} from "react-icons/gr";

const Account = () => {

    return(
        <div className="account">
            <div className="headerAllPage">
                <div className="headerAllPage_account">
                    <Link to="." className="headerAllPage_account_link">
                        <AiFillSetting className="headerAllPage_account_link_icon"/>
                    </Link>
                    <div>
                        <h4>username </h4>
                        <GrDown />
                    </div>
                    <Link to="." className="headerAllPage_account_link">
                        <IoMdPersonAdd className="headerAllPage_account_link_icon"/>
                    </Link>
                </div>
            </div>
            <div className="account_box">
                <div className="account_box_img">
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="user"/>
                    <div>
                        <h3>username</h3>
                        <button>Edit Profile</button>
                    </div>
                </div>
                <div className="account_box_info">
                    <p>Name Surname</p>
                    <span>Blogger</span>
                    <p>Write 3 sentence for Bio</p>
                </div>
                <div className="account_box_followers">
                    <div>
                        <p>0</p>
                        <span>post</span>
                    </div>
                    <div>
                        <p>0</p>
                        <span>followers</span>
                    </div>
                    <div>
                        <p>0</p>
                        <span>following</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Account;