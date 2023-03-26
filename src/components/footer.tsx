//import motds from "../libs/motds";

export default function Footer() {
    return (
        <footer>                                         
            <Copyright />
            <Legal />
            <GitHub />
            <Email />

        </footer>
    );
}

function GitHub() {
    return (
        <div class="footer-item">
            {/*<img src="/assets/github.svg" alt="" />*/}
            <a href="https://github.com/studente-uk">GitHub</a>
        </div>
    );
}

function Email() {
    return (
        <div class="footer-item">
            {/*<img src="/assets/icon-bg.svg" alt="" />*/}
            <a href="mailto://studente.uk@protonmail.com">Email</a>
        </div>
    );
}

function Legal() {
    return (
        <div class="footer-item">
            <a href="https://studente.co.uk/legal">Legal</a>
        </div>
    );
}

function Copyright() {
    let currentYear = new Date().getFullYear();
    let output = currentYear > 2023 ? `2023-${currentYear}` : currentYear;
    return (
        <div class="copyright">
            <img src="/assets/icon-bg.svg" alt="" />
            <p> &copy; <a href="https://studente.co.uk/contact">Studente</a> {output} </p>
        </div>
    );
}