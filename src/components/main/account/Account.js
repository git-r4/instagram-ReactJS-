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
        </div>
    )
}
export default Account;