import {
    suggestionFetching,
    suggestionFetched,
    suggestionFetchingError
} from '../../../actions';
import { useDispatch, useSelector } from "react-redux";
import { useHttp } from "../../../hooks/http.hook";
import {useEffect} from 'react';

const Activity = () => {
    const { suggestions, loadingStatus } = useSelector(state => state);
    const dispatch = useDispatch();
    const { request } = useHttp();

    useEffect(() => {
        dispatch(suggestionFetching());
        request("http://localhost:3001/suggestions")
            .then(data => dispatch(suggestionFetched(data)))
            .catch((e) => dispatch(suggestionFetchingError(e)))

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
            <div className="activity">
                <div className="activity_activityBox">
                    <h4>Today</h4>
                    <ul className="activity_activityBox_ul">
                        {rendered}
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