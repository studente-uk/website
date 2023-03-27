import { animatedTyping } from "../libs/animations";

export default function LandingBanner() {
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
                <img src="/assets/icon.svg" alt="studente icon"/>
                <h1 onMouseOver={(e) => animatedTyping(e)}>Whats Cooking?</h1>
                <a href="/recipes">View our Recipes</a>
            </div>
        </div>
    );
}