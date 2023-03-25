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
        <ul>
            <div class="socials">
                <li class="github">
                    <p><img src="/assets/github.svg" class="icon"/><a href="https://github.com/studente-uk">Github</a></p>
                </li>
                <div class="contact">
                   
                </div>
                <div class="contact">
                    <p><a href="https://linkedin.com/in/studente-uk">LinkedIn</a></p>
                </div>
                <div class="contact">
                    <p><a href="https://twitter.com/studente-uk">Twitter</a></p>
                </div>
                <div class="contact">
                    <p><a href="mailto://contact@studente.co.uk">Email</a></p>
                </div>
            </div>
        </ul>
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