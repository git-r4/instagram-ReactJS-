import { Container } from "react-bootstrap";
import {Link} from "react-router-dom";
import {RiMessengerLine} from "react-icons/ri";


const Explore = () => {
    return(
        <div>
            <div className="headerAllPage">
                <div className="headerAllPage_explore">
                    <input placeholder="search" type="text"/>
                </div>
            </div>
            <Container className="colAndContainerForMobile">
                <div className="exploreBox">
                    <div className="sectionExplore">
                        <div className="sectionExplore_boxFirst">
                            <div className="sectionExplore_boxFirst_bigger"></div>
                            <div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                        <div className="sectionExplore_box">
                            <div className="sectionExplore_box_standart">
                                <div></div>
                            </div>
                            <div className="sectionExplore_box_standart">
                                <div></div>
                            </div>
                            <div className="sectionExplore_box_standart">
                                <div></div>
                            </div>
                        </div>
                        <div className="sectionExplore_box">
                            <div className="sectionExplore_box_standart">
                                <div></div>
                            </div>
                            <div className="sectionExplore_box_standart">
                                <div></div>
                            </div>
                            <div className="sectionExplore_box_standart">
                                <div></div>
                            </div>
                        </div>
                        <div className="sectionExplore_boxFirst">
                            <div className="sectionExplore_boxFirst_bigger"></div>
                            <div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default Explore;