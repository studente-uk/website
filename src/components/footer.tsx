//import motds from "../libs/motds";

export default function Footer() {
    return (
        <footer>
            <div class="logo"></div>
            <div class="footer">
                <Socials />
                <Copyright />
            </div>
            <div class="logo">
                <img src="/favicon.svg" alt="</>" />
            </div>
        </footer>
    );
}

function Socials() {
    return (
        <div class="socials">
            <strong><p class="socials-title">Socials</p></strong>
            <span class="socials-links">
                <a href="https://twitter.com/studente-uk" target="_blank" rel="noreferrer">
                    <img src="/twitter.svg" alt="Twitter" />Twitter
                </a>
            </span>
            <span class="socials-links">
                <a href="https://twitter.com/studente-uk" target="_blank" rel="noreferrer">
                    <img src="/twitter.svg" alt="Twitter" />Twitter
                </a>
            </span>
            
        </div>
    );
}

function Copyright() {
    let currentYear = new Date().getFullYear();
    let output = currentYear > 2023 ? `2023-${currentYear}` : currentYear;
    return (
        <div class="copyright">
            <p> &copy; <a href="https://studente.co.uk/contact">Studente</a> {output} </p>
        </div>
    );
}