import { useHttp } from "../../../hooks/http.hook";
import { fetchSearch } from "../../../actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useRef } from 'react';
import { AiOutlineSearch, AiFillCloseCircle } from "react-icons/ai";

import '../../../styles/styles.scss';

const Search = () => {
    const [searchUser, setSearchUser] = useState("");
    const [onSearchClick, setOnSearchClick] = useState(false);

    const searchBox = useRef(null);
    const dispatch = useDispatch();
    const { search, searchLoadingStatus } = useSelector(state => state.searchReducer);
    const { request } = useHttp();

    useEffect(() => {
        dispatch(fetchSearch(request));

        let onClickSearch = (e) => {
            if(!searchBox.current.contains(e.target)){
                setOnSearchClick(onSearchClick => false);
            }
        }
        document.addEventListener('mousedown', onClickSearch);

        return () => document.removeEventListener('mousedown', onClickSearch);

    }, []);

    const renderSearchInfo = (arr) => {
        return arr.filter(value => {
            return value.name.toLowerCase().includes(searchUser)
        }).map((item, i) => {
            return (
                <div className="searchBox_searchResult_userBox" key={i}>
                    <div className="searchBox_searchResult_userBox_line">
                        <div className="searchBox_searchResult_userBox_line_img">
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="userPhoto" />
                        </div>
                    </div>
                    <div className="searchBox_searchResult_userBox_name">
                        {item.name}
                    </div>
                </div>
            )
        })
    }
    const element = renderSearchInfo(search);
    return(
        <div className="searchBox" ref={searchBox}>
            <div className="searchBox_inputBox">
                <AiOutlineSearch className="magnifyIcon"
                                 style={onSearchClick ? {display: 'none'} : {display: 'block'}}/>
                <input type="text"
                       placeholder="Search"
                       onChange={(e) => setSearchUser(searchUser => e.target.value)}
                       onClick={() => setOnSearchClick(onSearchClick => true)}/>
                <AiFillCloseCircle className="closeBtn"
                                   style={onSearchClick ? {display: 'block'} : {display: 'none'}}
                                   onClick={() => setOnSearchClick(onSearchClick => false)}/>
            </div>
            <div className="triangleBox">
                <div style={onSearchClick ? {display: 'block'} : {display: 'none', transition: '500ms'}} className="triangle"></div>
            </div>
            <div style={onSearchClick ? {display: 'block'} : {display: 'none', transition: '500ms'}} className="searchBox_searchResult">
                { searchUser === "" ?
                    <div className="searchBox_searchResult_noResult">No recent searches.</div> :
                    searchLoadingStatus === 'error' ?
                        <h5>Error</h5> :
                        <div style={{marginTop: '11px'}}>{element}</div>
                }
            </div>
        </div>
    )
}
export default Search;