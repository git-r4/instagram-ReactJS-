import { Container, Row, Col } from 'react-bootstrap';
import { FiEdit } from 'react-icons/fi';
import { GrDown } from "react-icons/gr";
import { IoPaperPlaneOutline } from 'react-icons/io5';

const Inbox = () => {
    return(
        <div className="topMarginForPage inboxFullHeight">
            <Container className="inboxContainer">
                <div className="inbox">
                    <div className="inbox_firstInboxColumn">
                        <div className="inbox_firstInboxColumn_selectUser">
                            <div>
                                <h4>username </h4>
                                <GrDown />
                            </div>
                            <FiEdit />
                        </div>
                        <div className="inbox_firstInboxColumn_selectOptions">
                            <div>
                                <h4>PRIMARY</h4>
                            </div>
                            <div>
                                <h4>GENERAL</h4>
                            </div>
                        </div>
                        <div className="inbox_firstInboxColumn_selectPerson">
                            <h3>No Messages</h3>
                        </div>
                    </div>
                    <div className="verticalLineInbox"></div>
                    <div className="inbox_secondInboxColumn">
                        <div className="inbox_secondInboxColumn_yourMessages">
                            <div className="inbox_secondInboxColumn_yourMessages_icon">
                                <div><IoPaperPlaneOutline /></div>
                            </div>
                            <div className="inbox_secondInboxColumn_yourMessages_text">
                                <h4>Your Messages</h4>
                                <p>Send private photos and messages to a friend or group.</p>
                            </div>
                            <div className="inbox_secondInboxColumn_yourMessages_btn">
                                <button>Send Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default Inbox;