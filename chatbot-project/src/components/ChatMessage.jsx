import UserProfileImage from '../assets/user.png'
import RobotProfileImage from '../assets/robot.png'
import './ChatMessage.css'
import dayjs from 'dayjs';

function ChatMessage({ message, sender, Time }) {

    return (
        <div className='messages'>
            {
                sender === 'robot'
                ?   <div className="reply-message">
                        <img src={RobotProfileImage} width="45" />
                        {message}
                        <p className='time'>{dayjs(Time).format('h:mma')}</p>
                    </div>
                :   <div className="input-message">
                        
                        {message}
                        <p className='time'>{dayjs(Time).format('h:mma')}</p>
                        <img src={UserProfileImage} width="45" />
                        
                    </div>
            }
        </div>
    );
}

export default ChatMessage;
