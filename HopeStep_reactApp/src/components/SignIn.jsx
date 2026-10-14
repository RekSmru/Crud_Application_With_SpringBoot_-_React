import {useState} from "react";
import {Eye, EyeOff} from "lucide-react";
import {Link, useNavigate} from "react-router-dom";
import {FcGoogle} from "react-icons/fc";

function SignIn() {
    const [email, setEmail] = useState("");
    const [passwordHash, setPasswordHash] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const [openRegisterNow, setOpenRegisterNow] = useState(false);
    const [usernameOrEmail, setUsernameOrEmail] = useState("");
    const [resPassword, setResPassword] = useState("");
    const [showRegisterPassword, setShowRegisterPassword] = useState(false);
    const [institution, setInstitution] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Demo navigation only.
        // Replace this with successful Spring Boot login validation.
        const user = {
            email: email,
            username: email.split("@")[0],
        };

        localStorage.setItem("loggedInUser", JSON.stringify(user));

        navigate("/");
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setMessage("");

        try {
            const response = await fetch("http://localhost:8080/registerUser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    usernameOrEmail: usernameOrEmail,
                    passwordHash: resPassword,
                    institution: institution,
                }),
            });

            if (!response.ok) {
                throw new Error("Registration failed");
            }

            setMessage("Account created successfully!");
            setUsernameOrEmail("");
            setResPassword("");
            setInstitution("");
        } catch (error) {
            setMessage(error.message || "Unable to register. Please try again.");
        }
    };

    return (
        <div className="min-h-screen bg-emerald-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white border-2 border-slate-800 rounded-xl shadow-lg p-8">
                {/* Logo */}
                <div className="flex justify-center mb-3">
                    <img src="/HopeStep.png" alt="HopeStep" className="h-16 w-16 rounded-xl" />
                </div>

                <p className="text-center text-gray-600 mb-8">Welcome back to HopeStep!</p>

                <h1 className="text-3xl font-bold text-slate-800">Log In</h1>

                <p className="mt-2 mb-8">
                    New User?{" "}
                    <button
                        type="button"
                        onClick={() => {
                            setMessage("");
                            setOpenRegisterNow(true);
                        }}
                        className="text-blue-700 hover:underline"
                    >
                        Register Now
                    </button>
                </p>

                {/* Registration Popup */}
                {openRegisterNow && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
                        <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white border border-slate-300 rounded-xl shadow-lg p-8">
                            <button
                                type="button"
                                onClick={() => setOpenRegisterNow(false)}
                                className="absolute top-3 right-4 text-gray-600 text-2xl"
                                aria-label="Close registration"
                            >
                                &times;
                            </button>

                            <h2 className="text-2xl font-bold text-slate-800">Create Account</h2>

                            <p className="text-gray-600 mb-6 mt-2">
                                Already have an account?{" "}
                                <button
                                    type="button"
                                    onClick={() => setOpenRegisterNow(false)}
                                    className="text-blue-700 hover:underline"
                                >
                                    Log in
                                </button>
                            </p>

                            <form onSubmit={handleRegister} className="mt-6">
                                {/* Username or Email */}
                                <div className="mb-4">
                                    <label className="block text-slate-800 font-semibold mb-2">Username or Email</label>

                                    <input
                                        type="text"
                                        placeholder="Username or Email"
                                        value={usernameOrEmail}
                                        onChange={(e) => setUsernameOrEmail(e.target.value)}
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg outline-none focus:border-green-500"
                                        required
                                    />
                                </div>

                                {/* Registration Password */}
                                <div className="mb-4">
                                    <label className="block text-slate-800 font-semibold mb-2">Password</label>

                                    <div className="relative">
                                        <input
                                            type={showRegisterPassword ? "text" : "password"}
                                            placeholder="Enter password"
                                            value={resPassword}
                                            onChange={(e) => setResPassword(e.target.value)}
                                            className="w-full px-4 py-3 pr-12 border-2 border-gray-300 rounded-lg outline-none focus:border-green-500"
                                            required
                                        />

                                        <button
                                            type="button"
                                            onClick={() => setShowRegisterPassword(!showRegisterPassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
                                            aria-label={showRegisterPassword ? "Hide password" : "Show password"}
                                        >
                                            {showRegisterPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                        </button>
                                    </div>
                                </div>

                                {/* Institution */}
                                <div className="mb-4">
                                    <label className="block text-slate-800 font-semibold mb-2">
                                        Institution / Organization
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="Enter Institution/Organization"
                                        value={institution}
                                        onChange={(e) => setInstitution(e.target.value)}
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg outline-none focus:border-green-500"
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full mt-4 bg-emerald-700 text-white font-bold py-3 rounded-lg border-2 border-slate-800 hover:bg-green-500 transition"
                                >
                                    Sign Up
                                </button>

                                {message && <p className="mt-4 text-center text-sm text-emerald-700">{message}</p>}
                            </form>
                        </div>
                    </div>
                )}

                {/* Google Button */}
                <div className="flex items-center gap-3 my-6 text-gray-500 text-sm">
                    <span className="flex-1 border-t" />
                    OR
                    <span className="flex-1 border-t" />
                </div>

                <button
                    type="button"
                    className="w-full flex items-center justify-center gap-2 border mt-6 py-2 rounded-lg bg-gray-100 hover:bg-gray-300"
                >
                    <FcGoogle size={18} />
                    Continue with Google
                </button>

                {/* Sign In Form */}
                <form onSubmit={handleSubmit} className="mt-6">
                    <div className="mb-4">
                        <label className="block text-slate-800 font-semibold mb-2">Email</label>

                        <input
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg outline-none focus:border-green-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-slate-800 font-semibold mb-2">Password</label>

                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                value={passwordHash}
                                onChange={(e) => setPasswordHash(e.target.value)}
                                placeholder="Enter password"
                                className="w-full px-4 py-3 pr-12 border-2 border-gray-300 rounded-lg outline-none focus:border-green-500"
                                required
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
                                aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                    </div>

                    <p className="mt-2">
                        <Link to="/forgot-password" className="text-blue-700 hover:underline">
                            Forgot Password?
                        </Link>
                    </p>

                    <button
                        type="submit"
                        className="w-full mt-8 bg-emerald-700 text-white font-bold py-3 rounded-lg border-2 border-slate-800 hover:bg-green-500 transition"
                    >
                        Sign In
                    </button>
                </form>

                <div className="mt-4">
                    <Link to="/" className="text-black font-bold hover:text-blue-600 hover:underline">
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
