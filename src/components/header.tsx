
export default function Header() {
    return (
        <header>
            <Title />
            <Nav />
        </header>
    );
}

function Title() {
    // add svg logo here
    return (
        <div class="logo">
            <a href="/"><img src="/assets/icon-green.svg" alt="Header Logo" /></a>
        </div>
    );
}

function Nav() {
    return (
        <div class="nav">
            <div class="nav-item">
                <a href="/#about">About</a>
                </div>
                <div class="nav-item">
                    <a href="/recipes">Recipes</a>
                </div>
                <div class="nav-item">
                    <a href="/blog">Blog</a>
                </div>
                <div class="nav-item">
                    <a href="/#contact">Contact</a>
                </div>
                <div class="nav-login">
                    <a href="/login">Login</a>
                </div>
            </div>
    );
}