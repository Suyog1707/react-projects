import UserProfileImage from '../assets/user.png'
import RobotProfileImage from '../assets/robot.png'
import './ChatMessage.css'

function ChatMessage({ message, sender }) {

    return (
        <div className='messages'>
            {
                sender === 'robot'
                ?   <div className="reply-message">
                        <img src={RobotProfileImage} width="45" />
                        {message}
                    </div>
                :   <div className="input-message">
                        {message}
                        <img src={UserProfileImage} width="45" />
                    </div>
            }
        </div>
    );
}

export default ChatMessage;
