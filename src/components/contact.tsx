export default function Contact() {
    return (
        <div class="contact-us">
            <p>Get in touch with us!</p>

            <form class="contact-form">
                <label> Your Name </label>
                <input type="text" name="name" />

                <label> Your Email </label>
                <input type="email" name="email" />

                <label> Your Message </label>
                <textarea name="message" />

                <button type="submit">Send</button>
            </form>
        </div>
    );
}