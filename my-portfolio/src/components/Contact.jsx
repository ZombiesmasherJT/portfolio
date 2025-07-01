import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../contact.css';




function ContactForm() {
    const [state, handleSubmit] = useForm("mrbkjlod");


    return (
        <section id="contact">
            <div className="contact-container">
                <h2 className="contact-heading">Let's Connect</h2>
                {state.succeeded ? (
                    <div className="success-message">
                        <h3>Thanks for reaching out!</h3>
                        <p>Ill get back to you as soon as I can</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Name</label>
                        <input id="name" type="text" name="name" required />

                        <label htmlFor="email">Email Address</label>
                        <input id="email" type="email" name="email" required />
                        <ValidationError prefix="Email" field="email" errors={state.errors} />

                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" required />
                        <ValidationError prefix="Message" field="message" errors={state.errors} />

                        <button type="submit" disabled={state.submitting}>
                            {state.submitting ? "Sending..." : "Submit"}
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
}

export default ContactForm;
