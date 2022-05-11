import { Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { sliderFetched,
        sliderFetching,
        sliderFetchingError,
        postFetched,
        postFetching,
        postFetchingError,
        suggestionFetched,
        suggestionFetching,
        suggestionFetchingError} from "../../../actions";
import { useDispatch, useSelector } from "react-redux";
import { useHttp } from "../../../hooks/http.hook";
import { useEffect } from 'react';
import { BsBookmark } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import { Link } from "react-router-dom";

const Home = () => {
    const { sliderUsers, posts, suggestions, loadingStatus } = useSelector(state => state);
    const { request } = useHttp();
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(sliderFetching());
        request("http://localhost:3001/sliderUsers")
            .then(data => dispatch(sliderFetched(data)))
            .catch((e) => dispatch(sliderFetchingError(e)))

        dispatch(postFetching())
        request("http://localhost:3001/posts")
            .then(data => dispatch(postFetched(data)))
            .catch((e) => dispatch(postFetchingError(e)))

        request("http://localhost:3001/suggestions")
            .then(data => dispatch(suggestionFetched(data)))
            .catch((e) => dispatch(suggestionFetchingError(e)))
    }, [])

    const renderSliderUsers = (arr) => {
        return arr.map(({id, name}) => {
            return(
                <SwiperSlide key={id}>
                    <div className="swiperUserBox">
                        <div className="swiperUserBox_line">
                            <div className="swiperUserBox_line_img">
                                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="user" />
                            </div>
                        </div>

                        <p>{name}</p>
                    </div>
                </SwiperSlide>
            )
        })
    }
    const renderedSliderUsers = renderSliderUsers(sliderUsers);

    const renderPosts = (arr) => {
        return arr.map(({id, name, location, likes, descriptions, posted}) => {
            return(
                <li key={id}>
                    <div className="postBox">
                        <div className="postBox_user">
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="user" />
                            <p>{name}</p>
                        </div>
                        <div className="postBox_postedContent">
                            ReSize x 700
                        </div>
                        <div className="postBox_selectBox">
                            <div className="postBox_selectBox_icons">
                                <div>
                                    <AiOutlineHeart className="iconHover"/>
                                    <FaRegComment className="iconHover"/>
                                    <IoPaperPlaneOutline className="iconHover"/>
                                </div>
                                <div>
                                    <BsBookmark className="iconHover"/>
                                </div>
                            </div>
                            <div className="postBox_selectBox_likes">
                                <p>{likes} likes</p>
                            </div>
                            <div className="postBox_selectBox_postInfo">
                                <span>{name}</span>
                                <p>{descriptions}</p>
                            </div>
                            <div className="postBox_selectBox_comments">
                                <p>View all comments</p>
                            </div>
                            <div className="postBox_selectBox_postedDate">
                                <p>{posted} DAYS AGO</p>
                            </div>
                        </div>
                    </div>
                </li>
            )
        })
    }
    const renderedPost = renderPosts(posts);

    const renderSuggestion = (arr) => {
        return arr.map(({id, name}) => {
            return(
                <li key={id}>
                    <div>
                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="suggestionUser"/>
                        <h4>{name}</h4>
                    </div>
                    <div>
                        <h4>Follow</h4>
                    </div>
                </li>
            )
        })
    }
    const renderedSuggestions = renderSuggestion(suggestions);

    return(
        <div className="homePage topMarginForPage">
            <Container>
                <Row>
                    <Col lg={8} sm={12}>
                        <div className="firstHomeColumn">
                            <div className="firstHomeColumn_storyBox">
                                <div className="firstHomeColumn_storyBox_swiperjs">
                                    {
                                        loadingStatus === 'error' ? <h5>Error</h5> :
                                            loadingStatus === 'loading' ? <h5>Loading</h5> :
                                                <Swiper
                                                    breakpoints={{
                                                        1024: {
                                                            slidesPerView: 8,
                                                        },
                                                        // when window width is >= 768px
                                                        768: {
                                                            slidesPerView: 6,
                                                        },
                                                        // when window width is >= 640px
                                                        640: {
                                                            slidesPerView: 6,
                                                        },
                                                        540: {
                                                            slidesPerView: 5
                                                        }
                                                    }}>
                                                    {renderedSliderUsers}
                                                </Swiper>
                                    }
                                </div>
                            </div>
                            <div className="firstHomeColumn_postsBox">
                                {
                                    loadingStatus === 'error' ? <h5>Error</h5> :
                                        loadingStatus === 'loading' ? <h5>Loading</h5> :
                                            <ul>
                                                {renderedPost}
                                            </ul>
                                }
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} >
                        <div className="secondHomeColumn">
                            <div className="secondHomeColumn_accountBox">
                                <div>
                                    <div className="secondHomeColumn_accountBox_img">
                                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="accountImg"/>
                                    </div>
                                    <div className="secondHomeColumn_accountBox_name">
                                        <h4>username</h4>
                                        <p>Name Surname</p>
                                    </div>
                                </div>
                                <div>
                                    <h4>Switch</h4>
                                </div>
                            </div>
                            <div className="secondHomeColumn_suggestionBox">
                                <div>
                                    <h3>Suggestions For You</h3>
                                    <h4>See All</h4>
                                </div>
                                <ul>
                                    {renderedSuggestions}
                                </ul>
                            </div>
                            <div className="secondHomeColumn_instagramFooter">
                                <ul>
                                    <li className="marginRightForUp"><Link to=".">About</Link></li>
                                    <li className="marginRightForUp"><Link to=".">Help</Link></li>
                                    <li className="marginRightForUp"><Link to=".">Press</Link></li>
                                    <li className="marginRightForUp"><Link to=".">API</Link></li>
                                    <li className="marginRightForUp"><Link to=".">Jobs</Link></li>
                                    <li className="marginRightForUp"><Link to=".">Privacy</Link></li>
                                    <li><Link to=".">Terms</Link></li>
                                    <br/>
                                    <li className="marginRightForDown"><Link to=".">Locations</Link></li>
                                    <li className="marginRightForDown"><Link to=".">Top</Link></li>
                                    <li className="marginRightForDown"><Link to=".">Accounts</Link></li>
                                    <li className="marginRightForDown"><Link to=".">Hashtags</Link></li>
                                    <li className="marginRightForDown"><Link to=".">Language</Link></li>
                                    <li><Link to=".">English</Link></li>
                                </ul>
                                <p>© 2022 INSTAGRAM FROM META</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Home;