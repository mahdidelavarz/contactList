import { useEffect, useRef, useState } from 'react';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/contactList/ContactList';
import Header from '../components/Header';
import { getAllContacts, deleteContact, postContacts } from '../services/httpRequests'


const ContactManage = () => {

    const [contacts, setContacts] = useState(null);
    const [formValue, setFormValue] = useState('');
    const nameInputRef = useRef();
    const emailInputRef = useRef();


    useEffect(() => {
        const getContacts = async () => {
            const { data } = await getAllContacts();
            setContacts(data)
        }
        try {
            getContacts();
        } catch (err) {
            console.log(err);
        }
    }, []);

    const handleContactValue = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value, id: new Date().getTime() });
    }

    const handleAddContact = (e) => {
        e.preventDefault();
        console.log(formValue)

        if (!nameInputRef.current.value, !emailInputRef.current.value) {
            alert('please complete the form !')
        } else {
            try {
                setContacts([...contacts, { ...formValue }]);
                postContacts(formValue);
            } catch (error) {
                console.log(error)
            }
            emailInputRef.current.value = '';
            nameInputRef.current.value = '';
        }

    }

    const handleDelete = async (id) => {
        try {
            const filteredContacts = contacts.filter((c) => c.id !== id);
            setContacts(filteredContacts);
            await deleteContact(id);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section className="app">
            <Header />
            <ContactForm
                onAddContact={handleAddContact}
                onAddContactValue={handleContactValue}
                formValue={formValue}
                emailInputRef={emailInputRef}
                nameInputRef={nameInputRef}
            />
            <ContactList contacts={contacts} onDelete={(id) => handleDelete(id)} />
        </section>
    );
}

export default ContactManage;