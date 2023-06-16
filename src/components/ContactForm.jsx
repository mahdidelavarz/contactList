import '../styles/contact-form.css'
import { BsCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import { useState } from 'react';
const ContactForm = ({ onAddContact, onAddContactValue, nameInputRef, emailInputRef }) => {
    const [formActive, setFormActive] = useState(false);
    const toggleHandler = (e) => {
        e.preventDefault();
        setFormActive(!formActive);
    }
    return (
        <div className="contact-form">
            <div className='form-add'>
                <button className='form-toggle-btn' onClick={toggleHandler}>Add Contact {formActive ? <BsFillCaretUpFill className='svg' /> : <BsCaretDownFill className='svg' />}</button>
            </div>
            <form className={formActive ? 'form' : 'disable'}>
                <label>Name</label>
                <input type="text" onChange={onAddContactValue} name='name' placeholder='enter your name ...' ref={nameInputRef} />
                <label>Email</label>
                <input type="email" onChange={onAddContactValue} name='email' placeholder='test@email.com' ref={emailInputRef} />
                <button className='add-contact-btn' type="submit" onClick={onAddContact}>Add</button>
            </form>
        </div>
    );
}

export default ContactForm;