// import {  House,Search, Menu ,Mic } from "lucide-react";
import {
    Search,
    Mic,
    ChevronUp,
    ChevronDown,
    Menu,
    User,
    RotateCcwClock,
    LogOut,
    Pencil,
    NotebookText,
} from "lucide-react";
import {useState} from "react";
import {Link} from "react-router-dom";

function HopeSteps() {
    // const [openHomePage , setOpenHomePage] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const [openCourses, setopenCourse] = useState(false);
    const [openTutorial, setOpenTutorial] = useState(false);
    const [openInterviewPrep, setInterviewPrep] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
    const [openLoggedInUser, setOpenLoggedInUser] = useState(false);
    const [loggedInUser, setLoggedInUser] = useState(() => {
        const savedUser = localStorage.getItem("loggedInUser");
        return savedUser ? JSON.parse(savedUser) : null;
    });

    const handleClickMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <>
            <div className="min-h-screen bg-gray-100 sticky top-0 left-0">
                <header className="flex item-center justify-between p-8 bg-slate-800 text-white">
                    {/* ========== Hamburger Menu =========== */}
                    <div className="relative">
                        <button onClick={handleClickMenu} className=" p-2 hover:text-yellow-400">
                            <Menu size={30} />
                        </button>

                        {/* ===Open menu=== */}

                        {openMenu && (
                            <div className="absolute left-4 pl-12 p-6 gap-8 top-14 w-68 bg-white border-2 border-slate-400 rounded-lg shadow-lg z-50">
                                <button
                                    type="button"
                                    onClick={() => setopenCourse(!openCourses)}
                                    className="flex items-center justify-center w-44 gap-3 py-3 text-black  border-2 rounded-lg hover:bg-green-400"
                                >
                                    <span>Courses</span>
                                    {openCourses ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                </button>

                                {/* ===== Open Courses ===== */}
                                {openCourses && (
                                    <div>
                                        <button
                                            type="button"
                                            className="flex items-center justify-center w-44 gap-3 py-2 text-black bg-slate-200  hover:bg-green-400"
                                        >
                                            DSA
                                        </button>
                                        <button
                                            type="button"
                                            className="flex items-center justify-center w-44 gap-3 py-2 text-black bg-slate-200  hover:bg-green-400"
                                        >
                                            Machine Learning
                                        </button>

                                        <button
                                            type="button"
                                            className="flex items-center justify-center w-44 gap-3 py-2 text-black bg-slate-200  hover:bg-green-400"
                                        >
                                            Dev ops
                                        </button>

                                        <button
                                            type="button"
                                            className="flex items-center justify-center w-44 gap-3 py-2 text-black bg-slate-200  hover:bg-green-400"
                                        >
                                            Data Science/ AI
                                        </button>

                                        <button
                                            type="button"
                                            className="flex items-center justify-center w-44 gap-3 py-2 text-black bg-slate-200  hover:bg-green-400"
                                        >
                                            Web Development
                                        </button>
                                    </div>
                                )}
                                {/* ==== Open Tutorials ====== */}
                                <button
                                    type="button"
                                    onClick={() => setOpenTutorial(!openTutorial)}
                                    className="flex item-center justify-center w-44 gap-3 py-2 text-black border-2 hover:bg-green-400 rounded-xl"
                                >
                                    <span>Tutorial</span>
                                    {openTutorial ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                </button>

                                {openTutorial && (
                                    <div>
                                        <button
                                            type="button"
                                            className="flex items-center justify-center w-44 gap-3 py-2 text-black bg-slate-200  hover:bg-green-400"
                                        >
                                            Python
                                        </button>
                                        <button
                                            type="button"
                                            className="flex items-center justify-center w-44 gap-3 py-2 text-black bg-slate-200  hover:bg-green-400"
                                        >
                                            Java
                                        </button>
                                        <button
                                            type="button"
                                            className="flex items-center justify-center w-44 gap-3 py-2 text-black bg-slate-200  hover:bg-green-400"
                                        >
                                            Oracle
                                        </button>
                                        <button
                                            type="button"
                                            className="flex items-center justify-center w-44 gap-3 py-2 text-black bg-slate-200  hover:bg-green-400"
                                        >
                                            Web Developement
                                        </button>
                                    </div>
                                )}

                                {/* ====== Open Interview Prep ===== */}
                                <button
                                    type="button"
                                    onClick={() => setInterviewPrep(!openInterviewPrep)}
                                    className="flex item-center justify-center border-2 bg-white w-44 gap-3 py-2 text-black border-2 hover:bg-green-400 rounded-xl  "
                                >
                                    <span>Interview Prep </span>
                                    {openTutorial ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                </button>

                                {openInterviewPrep && (
                                    <div>
                                        <button
                                            type="button"
                                            className="flex items-center justify-center w-44 gap-3 py-2 text-black bg-slate-200  hover:bg-green-400"
                                        >
                                            Interview Corner
                                        </button>
                                        <button
                                            type="button"
                                            className="flex items-center justify-center w-44 gap-3 py-2 text-black bg-slate-200  hover:bg-green-400"
                                        >
                                            Problem of the Day
                                        </button>
                                        <button
                                            type="button"
                                            className="flex items-center justify-center w-44 gap-3 py-2 text-black bg-slate-200  hover:bg-green-400"
                                        >
                                            Interview Practice
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                    {/* ======= Header ======= */}
                    <logo>
                        <img
                            src="/HopeStep.png"
                            alt="HopeStep"
                            className="h-14 w-14 rounded-xl cursor-pointer"
                            onClick={() => window.location.reload()}
                        />
                    </logo>

                    {/* Search Bar */}
                    <div className="flex items-center bg-white rounded-full border border-gray-300 px-3">
                        {/* Search icon inside the bar */}
                        <button
                            type="button"
                            onClick={() => setOpenSearch(!openSearch)}
                            className="p-1 text-gray-600 hover:text-sky-500"
                            aria-label="Open search"
                        >
                            <Search size={22} />
                        </button>

                        {/* Searchbar opens when clicked */}
                        {openSearch && (
                            <>
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-40 sm:w-64 px-2 py-2 text-black outline-none bg-transparent"
                                    autoFocus
                                />

                                {/* Microphone inside the bar */}
                                <button
                                    type="button"
                                    className="p-2 text-gray-600 hover:text-sky-500"
                                    aria-label="Voice search"
                                >
                                    <Mic size={22} />
                                </button>
                            </>
                        )}
                    </div>

                    {/* Sign In / Logged-in User on the right */}
                    <div className="relative flex items-center gap-3 pb-4">
                        {loggedInUser ? (
                            <button
                                type="button"
                                onClick={() => setOpenLoggedInUser(!openLoggedInUser)}
                                className="w-11 h-11 rounded-full bg-emerald-600
                       text-white font-bold flex items-center justify-center
                       hover:bg-green-500"
                                title={loggedInUser.email}
                            >
                                {(loggedInUser.username || loggedInUser.email || "U")
                                .split(/[._\s-]+/)
                                .filter(Boolean)
                                .slice(0, 1)
                                .map((part) => part.charAt(0).toUpperCase())
                                .join("")}
                            </button>
                        ) : (
                            <Link
                                to="/signin"
                                className="flex items-center justify-center gap-2 px-4 py-2
                       text-white rounded-full bg-slate-700
                       hover:bg-green-400 hover:text-black"
                            >
                                <User size={16} />
                                Sign In
                            </Link>
                        )}
                    </div>

                    {/* MyProfile dropdown goes here */}
                    {openLoggedInUser && (
                        <div
                            className="absolute right-0 top-20 w-56
                        bg-white border border-slate-400
                        rounded-lg shadow-lg z-50 p-2  "
                        >
                            <button
                                type="button"
                                onClick={() => {
                                    setOpenLoggedInUser(false);
                                }}
                                // Add profile navigation here
                                className="flex w-full items-center gap-3 rounded-md
                       px-4 py-3 text-black hover:bg-green-100 "
                            >
                                <User size={16} />
                                MyProfile
                            </button>

                            <button
                                type="button"
                                onClick={() => {
                                    setOpenLoggedInUser(false);
                                }}
                                className="flex w-full items-center gap-3 rounded-md
                       px-4 py-3 text-black hover:bg-green-100"
                            >
                                <NotebookText size={16} />
                                My Cources
                            </button>
                            <button
                                type="button"
                                onClick={() => {
                                    setOpenLoggedInUser(false);
                                }}
                                className="flex w-full items-center gap-3 rounded-md
                       px-4 py-3 text-black hover:bg-green-100"
                            >
                                <Pencil size={16} />
                                Edit Profile
                            </button>
                            <button
                                type="button"
                                onClick={() => {
                                    setOpenLoggedInUser(false);
                                }}
                                className="flex w-full items-center gap-3 rounded-md
                       px-4 py-3 text-black hover:bg-green-100"
                            >
                                <RotateCcwClock size={16} />
                                Transaction History
                            </button>
                            <button
                                type="button"
                                onClick={() => {
                                    setOpenLoggedInUser(false);
                                }}
                                className="flex w-full items-center gap-3 rounded-md
                       px-4 py-3 text-black hover:bg-green-100"
                            >
                                <LogOut size={16} />
                                LogOut
                            </button>
                        </div>
                    )}
                </header>
                {/* ================= SUB NAVIGATION BAR ================= */}
                <nav className="flex item-center justify-between bg-slate-600 text-white text-bold gap-4 p-2">
                    <span className="hover:text-yellow-400 cursor-pointer">DSA</span>
                    <span className="hover:text-yellow-400 cursor-pointer">C</span>
                    <span className="hover:text-yellow-400 cursor-pointer">C++</span>
                    <span className="hover:text-yellow-400 cursor-pointer">Java</span>
                    <span className="hover:text-yellow-400 cursor-pointer">Python</span>
                    <span className="hover:text-yellow-400 cursor-pointer">JavaScript</span>
                    <span className="hover:text-yellow-400 cursor-pointer">Data Science</span>
                    <span className="hover:text-yellow-400 cursor-pointer">Machine Learning</span>
                    <span className="hover:text-yellow-400 cursor-pointer">Practice Problem</span>
                </nav>

                {/* ================= HOME PAGE BODY ================= */}
                <main className="min-h-screen bg-emerald-50 ">
                    {/* =========WelCome Section ========== */}

                    <h1 className=" justify-center text-4xl text-bold text-black item-center mt-12 ml-64">
                        Start Your Learning Today!
                    </h1>

                    <div className="flex justify-center gap-4 mt-4 mb-6 ">
                        <button className="ml-18 mt-2 bg-white text-black px-4 py-2 rounded-full hover:bg-green-400 border-2 border-slate-800 transition">
                            Placement 360
                        </button>
                        <button className="mt-2 bg-white text-black px-4 py-2  rounded-full hover:bg-green-400 border-2 border-slate-800 transition">
                            Data Science 360
                        </button>
                        <button className=" mt-2 bg-white text-black px-4 py-2 rounded-full hover:bg-green-400 border-2 border-slate-800 transition">
                            Full Stack Dev
                        </button>
                    </div>

                    <section className=" justify-center item-center mt-4 px-6 ml-24 ">
                        <h2 className="item-center text-4xl text-bold text-black item-center mt-8 ml-4">Explore</h2>

                        <div className="grid grid-cols-1 grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mt-10">
                            {/* Flashcard 1 */}
                            <div className="bg-indigo-400 border-2 border-slate-800 rounded-xl p-12 text-center shadow-md hover:shadow-xl hover:-translate-y-2 transition">
                                <h1 className="text-white mt-3 text-2xl font-bold text-slate-800">
                                    Learn Data Structures and Algorithms....
                                </h1>
                                <button className="mt-5 px-5 py-2 text-white font-semibold rounded-full border-2 border-white hover:bg-green-200 transition">
                                    View more
                                </button>
                            </div>

                            {/* Flashcard 2 */}
                            <div className="bg-rose-400 border-2 border-slate-800 rounded-xl p-12 text-center shadow-md hover:shadow-xl hover:-translate-y-2 transition">
                                <h1 className="text-white mt-3 text-2xl font-bold text-slate-800">Web Developement</h1>
                                <button className="mt-5 px-5 py-2 text-white font-semibold rounded-full border-2 border-white hover:bg-green-200 transition">
                                    View more
                                </button>
                            </div>
                            {/* Flashcard 3 */}
                            <div className="bg-cyan-500 border-2 border-slate-800 rounded-xl p-12 text-center shadow-md hover:shadow-xl hover:-translate-y-2 transition">
                                <h1 className="text-white mt-3 text-2xl font-bold text-slate-800">Python</h1>
                                <button className="mt-5 px-5 py-2 text-white font-semibold rounded-full border-2 border-white hover:bg-green-200 transition">
                                    View more
                                </button>
                            </div>

                            {/* Flashcard 4 */}
                            <div className="bg-green-500 border-2 border-slate-800 rounded-xl p-12 text-center shadow-md hover:shadow-xl hover:-translate-y-2 transition">
                                <h1 className="text-white mt-3 text-2xl font-bold text-slate-800">Java</h1>
                                <button className="mt-5 px-5 py-2 text-white font-semibold rounded-full border-2 border-white hover:bg-green-200 transition">
                                    View more
                                </button>
                            </div>

                            {/* Flashcard 5 */}
                            <div className="bg-teal-700 border-2 border-slate-800 rounded-xl p-12 text-center shadow-md hover:shadow-xl hover:-translate-y-2 transition">
                                <h1 className="text-white mt-3 text-2xl font-bold text-slate-800">DevOps</h1>
                                <button className="mt-5 px-5 py-2 text-white font-semibold rounded-full border-2 border-white hover:bg-green-200 transition">
                                    View more
                                </button>
                            </div>

                            {/* Flashcard 6 */}
                            <div className="bg-red-500 border-2 border-slate-800 rounded-xl p-12 text-center shadow-md hover:shadow-xl hover:-translate-y-2 transition">
                                <h1 className="text-white mt-3 text-2xl font-bold text-slate-800">Machine Learning</h1>
                                <button className="mt-5 px-5 py-2 text-white font-semibold rounded-full border-2 border-white hover:bg-green-200 transition">
                                    View more
                                </button>
                            </div>

                            {/* Flashcard 7 */}
                            <div className="bg-amber-300 border-2 border-slate-800 rounded-xl p-12 text-center shadow-md hover:shadow-xl hover:-translate-y-2 transition">
                                <h1 className="text-white mt-3 text-2xl font-bold text-slate-800">
                                    AI ML & Data Science
                                </h1>
                                <button className="mt-5 px-5 py-2 text-white font-semibold rounded-full border-2 border-white hover:bg-green-200 transition">
                                    View more
                                </button>
                            </div>

                            {/* Flashcard 8 */}
                            <div className="bg-slate-500 border-2 border-slate-800 rounded-xl p-12 text-center shadow-md hover:shadow-xl hover:-translate-y-2 transition">
                                <h1 className="text-white mt-3 text-2xl font-bold text-slate-800">Web Developement</h1>
                                <button className="mt-5 px-5 py-2 text-white font-semibold rounded-full border-2 border-white hover:bg-green-200 transition">
                                    View more
                                </button>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}

export default HopeSteps;
