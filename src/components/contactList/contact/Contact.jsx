import '../../../styles/contact.css'
import { SlUser } from "react-icons/sl";
import { BsTrashFill } from "react-icons/bs";
import { FiPhoneCall, FiEdit } from "react-icons/fi";

const Contact = ({ name, email, onDelete }) => {
    return (
        <div className='contact'>
            <div className='contact-profile'>
                <SlUser className='user' />
                <div className='contact-info'>
                    <span>{name}</span>
                    <span>{email}</span>
                </div>
            </div>
            <div className='contact-actions'>
                <FiEdit className='edit' />
                <FiPhoneCall className='call' />
                <BsTrashFill className='trash' onClick={onDelete} />
            </div>
        </div>
    );
}

export default Contact;