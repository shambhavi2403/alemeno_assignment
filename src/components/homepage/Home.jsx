const Home = () => {
    return (
        <div className="m-5">
            <div className="p-10 border text-center text-lg font-semibold">
                🚀 Features of the Application 🚀
            </div>
            <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-5 mt-5">
                <div className="p-10 border text-center flex flex-col gap-5 items-center">
                    <h1 className="text-lg font-semibold">Course List</h1>
                    <p className="text-sm">
                        🔍 Dive into your learning adventure with ease! Explore courses tailored for you.
                        <br />
                        🌟 Spot the perfect match? Click "View Course Details" for an in-depth look.
                        <br />
                        📚 Unlock the door to knowledge on a new page. Let the learning commence! 🚀✨
                    </p>
                </div>
                <div className="p-10 border text-center flex flex-col gap-5 items-center">
                    <h1 className="text-lg font-semibold">Course Details</h1>
                    <p className="text-sm">
                        🔍 Uncover course secrets at a glance:
                        <br />
                        ⏳ Duration, 📍 Location, 📜 Syllabus, and more!
                        <br />
                        Ready to dive in? Let's roll! 🚀📚
                    </p>
                </div>
                <div className="p-10 border text-center flex flex-col gap-5 items-center">
                    <h1 className="text-lg font-semibold">Dashboard</h1>
                    <p className="text-sm">
                        Explore your enrolled courses 🌟.
                        <br />
                        Here is the list of all the courses that the user has enrolled.
                        <br />
                        Each course box shows the progress & due date.
                    </p>
                </div>
            </div>
            <div className="text-center mt-5">
                Designed & Developed by Shambhavi
            </div>
        </div>
    );
};

export default Home;
