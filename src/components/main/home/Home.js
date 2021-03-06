import { Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { fetchSlider,
         fetchPost,
         fetchSuggestions} from "../../../actions";
import { useDispatch, useSelector } from "react-redux";
import { useHttp } from "../../../hooks/http.hook";
import {useEffect, useRef} from 'react';
import { BsBookmark } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import { Link } from "react-router-dom";
import {IoIosArrowDroprightCircle, IoIosArrowDropleftCircle} from "react-icons/io";
import {RiMessengerLine} from 'react-icons/ri';

const Home = () => {
    const { suggestions, suggestionLoadingStatus } = useSelector(state => state.suggestionReducer);
    const { sliderUsers, sliderLoadingStatus } = useSelector(state => state.sliderReducer);
    const { posts, postLoadingStatus } = useSelector(state => state.postReducer);
    const { request } = useHttp();
    const dispatch = useDispatch();

    const scrollStory = document.querySelector('.firstHomeColumn_storyBox_sliderBox');

    const nextSlide = () => {
        scrollStory.scrollLeft += 300;
        console.log(scrollStory.scrollLeft);
        /*console.log(scrollStory.offsetWidth);
        console.log(scrollStory.clientWidth);
        console.log(scrollStory.clientLeft);

        console.log(scrollStory.clientHeight);
        console.log(scrollStory.offsetHeight);*/
    }

    /*const nextSlide = () => {
        if(scrollStory.scrollLeft < 511 && scrollStory.scrollLeft >= 0){
            scrollStory.scrollLeft += 300;
            console.log(scrollStory.scrollLeft);
            document.querySelector('.buttonNextSlide').style.display = 'block';
            console.log('block');
        }else {
            document.querySelector('.buttonNextSlide').style.display = 'none';
            console.log('none');
        }
    }*/
    const goBackSlide = () => {
        scrollStory.scrollLeft -= 300;
        console.log(scrollStory.scrollLeft);
    }

    useEffect(() => {
        dispatch(fetchSlider(request));

        dispatch(fetchPost(request));

        dispatch(fetchSuggestions(request));

        let listenScrollStory = document.querySelector('.firstHomeColumn_storyBox_sliderBox');

        const ruleForScrollStory = (event) => {
            if(event.target.scrollLeft >= 511){
                document.querySelector('.buttonNextSlide').style.display = 'none';
            }else{
                document.querySelector('.buttonNextSlide').style.display = 'block';
            }

            if(event.target.scrollLeft <= 0){
                document.querySelector('.buttonGoBackSlide').style.display = 'none';
            }else{
                document.querySelector('.buttonGoBackSlide').style.display = 'block';
            }
        }

        listenScrollStory.addEventListener('scroll', (event) => ruleForScrollStory(event));

        return () => listenScrollStory.removeEventListener('scroll', (event) => ruleForScrollStory(event));

    }, [])

    const renderSliderUsers = (arr) => {
        return arr.map(({id, name}) => {
            return(
                /*<SwiperSlide key={id}>
                    <div className="swiperUserBox">
                        <div className="swiperUserBox_line">
                            <div className="swiperUserBox_line_img">
                                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="user" />
                            </div>
                        </div>

                        <p>{name}</p>
                    </div>
                </SwiperSlide>*/
                <div key={id}>
                    <div className="sliderUser">
                        <div className="sliderUser_line">
                            <div className="sliderUser_line_img">
                                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="user" />
                            </div>
                        </div>

                        <p>{name}</p>
                    </div>
                </div>
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
            <div className="headerAllPage">
                <div className="headerAllPage_home">
                    <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="instagram" />
                    <Link to="/inbox"
                          className="headerAllPage_home_inbox">
                        <RiMessengerLine className="headerAllPage_home_inbox_icon"/>
                    </Link>
                </div>
            </div>
            <Container className="colAndContainerForMobile">
                <Row style={{width: '100%', margin: '0'}}>
                    <Col lg={8} sm={12} className="colAndContainerForMobile">
                        <div className="firstHomeColumn">
                            <div className="firstHomeColumn_storyBox">
                                <button className="buttonNextSlide dnForSliderStoryBtn"
                                        onClick={() => nextSlide()}><IoIosArrowDroprightCircle className="slideIcon"/></button>
                                <button className="buttonGoBackSlide dnForSliderStoryBtn"
                                        onClick={() => goBackSlide()}><IoIosArrowDropleftCircle className="slideIcon"/></button>
                                <div className="firstHomeColumn_storyBox_sliderBox">
                                    {
                                        sliderLoadingStatus === 'error' ? <h5>Error</h5> :
                                            sliderLoadingStatus === 'loading' ? <h5>Loading</h5> : renderedSliderUsers
                                                /*<Swiper
                                                    breakpoints={{
                                                        1024: {
                                                            slidesPerView: 8,
                                                        },
                                                        // when window width is >= 768px
                                                        768: {
                                                            slidesPerView: 7,
                                                        },
                                                        // when window width is >= 640px
                                                        640: {
                                                            slidesPerView: 5,
                                                        },
                                                        540: {
                                                            slidesPerView: 5
                                                        }
                                                    }}>
                                                    {renderedSliderUsers}
                                                </Swiper>*/
                                    }
                                </div>
                            </div>
                            <div className="firstHomeColumn_postsBox">
                                {
                                    postLoadingStatus === 'error' ? <h5>Error</h5> :
                                        postLoadingStatus === 'loading' ? <h5>Loading</h5> :
                                            <ul>
                                                {renderedPost}
                                            </ul>
                                }
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} className="secondColHomePageD-none">
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
                                <p>?? 2022 INSTAGRAM FROM META</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Home;