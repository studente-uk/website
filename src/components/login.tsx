import '../styles/login.scss';

export default function LoginForm() {
    return (
            <div class="login">
            <h1>Login</h1>

            <div class="oauth-buttons">
                <a class="oauth-button google">Login with Google</a>
                <a class="oauth-button microsoft">Login with Microsoft</a>
                <a class="oauth-button github">Login with GitHub</a>
            </div>
            

            <form action="/profiles/admin">
                <div class="form-item">
                    <label class="email" for="email">Email</label>
                    <input class="input" type="email" name="email" id="email" placeholder="Email" />
                </div>
                <div class="form-item">
                    <label class="password" for="password">Password</label>
                    <input class="input" type="password" name="password" id="password" placeholder="Password" />
                </div>

                <button class="submit" type="submit">Login</button>
            </form>
        </div>
        
    )
}