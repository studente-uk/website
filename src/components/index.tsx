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
        <div class="landing-banner" id="landing">
            <div class="image">
                <img 
                    class="banner-image"
                    src="/assets/index-banner-i.webp" 
                    alt="https://www.pexels.com/photo/fruit-salads-in-plate-1640774/" 
                />
            </div>
            <div class="content">
                <img src="/favicon.svg" alt="studente icon" />
                <h1>Whats Cooking?</h1>
                <a href="/recipes">View our Recipes</a>
            </div>
        </div>
    );
}

function LoLoMe() {
    return (
        <div class="lolome" id="recipes">
            // TODO: Add lolome
        </div>
    );
}

function ContactBanner() {
    return (
        <div class="contact-banner" id="contact">
            <h2>Get in Touch</h2>
        </div>
    );
}

// TODO: add stuff here


/*
    NTFS:
    - Move AboutMe, ContactMe into this file
    - ... both in own components
    - ... make sure to remove the routes
    - ... look into redirects
*/