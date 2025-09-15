import { useState } from 'react'
import axios from 'axios'
import viteLogo from '/vite.svg'
import reactLogo from '../../assets/react.svg'
import './Login.css'

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const response = await axios.post("http://localhost:5000/api/login", {
                email,
                password,
            });

            const { token } = response.data;
            localStorage.setItem("authToken", token);

            alert("Login successful!");
            window.location.href = "/dashboard";
        } catch (err) {
            setError(err.response?.data?.message || "Login failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        // <div className="container" style={{ marginTop: "5rem" }}>
        <div style={{ marginTop: "5rem" }}>
            <a href="https://vite.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
            {/* <div className="card z-depth-3"> */}
            <div className="card">
                <div className="card-content">
                    <span className="card-title center">Login</span>

                    {error && (
                        <p className="red-text center" style={{ marginBottom: "1rem" }}>
                            {error}
                        </p>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="input-field">
                            <input
                                id="email"
                                type="email"
                                className="validate"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <label htmlFor="email">Email</label>
                        </div>

                        <div className="input-field">
                            <input
                                id="password"
                                type="password"
                                className="validate"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <label htmlFor="password">Password</label>
                        </div>

                        <button
                            type="submit"
                            className="btn waves-effect waves-light blue lighten-1 full-width"
                            style={{ width: "100%", marginTop: "1rem" }}
                            disabled={loading}
                        >
                            {loading ? "Logging in..." : "Login"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;