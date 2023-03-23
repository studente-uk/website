import { animatedTyping } from "../libs/animations";

export default function Index() {
    return (
        <div class="index">
            <LandingBanner />
            <LoLoMe />
            <ContactBanner />
        </div>
    );
}

function LandingBanner() {
    return (
        <div class="landing-banner">
            <h1>Whats Cooking?</h1>
        </div>
    );
}

function LoLoMe() {
    return (
        <div class="lolome">
            // TODO: Add lolome
        </div>
    );
}

function ContactBanner() {
    return (
        <div class="contact-banner">
            <h2>Get in Touch</h2>
        </div>
    );
}

// TODO: add stuff here