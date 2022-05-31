import {
    fetchSuggestions
} from '../../../actions';
import { useDispatch, useSelector } from "react-redux";
import { useHttp } from "../../../hooks/http.hook";
import {useEffect} from 'react';
import {Link} from "react-router-dom";
import {RiMessengerLine} from "react-icons/ri";

const Activity = () => {
    const { suggestions, suggestionLoadingStatus } = useSelector(state => state.suggestionReducer);
    const dispatch = useDispatch();
    const { request } = useHttp();

    useEffect(() => {
        dispatch(fetchSuggestions(request));

    }, []);

    const renderSuggestion = (arr) => {
        return arr.map(({id, name}) => {
            return(
                <li key={id}>
                    <div className="activityImg">
                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="username" />
                    </div>
                    <h6>{name}</h6> liked your photo. <span>2d</span>
                </li>
            )
        })
    }
    const rendered = renderSuggestion(suggestions);

    return(
        <div className="">
            <div className="headerAllPage">
                <div className="headerAllPage_activity">
                    <h3>Activity</h3>
                </div>
            </div>
            <div className="activity">
                <div className="activity_activityBox">
                    <h4>Today</h4>
                    <ul className="activity_activityBox_ul">
                        {suggestionLoadingStatus === 'error' ? <h5>Error</h5> :
                            suggestionLoadingStatus === 'loading' ? <h5>Loading</h5> : rendered}
                    </ul>
                    <div className="activityLine"/>
                    <h4>This week</h4>
                    <ul className="activity_activityBox_ul">
                        {rendered}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Activity;