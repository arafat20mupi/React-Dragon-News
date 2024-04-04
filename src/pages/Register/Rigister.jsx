import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Rigister = () => {
    const handleRigister = e => {
        e.preventDefault();
        console.log(e.curreentTarget);
        const from =  new FormData(e.curreentTarget)
        console.log(from.get('password'));
        }
    return (
        <div>
            <Navbar></Navbar>
            <div className="w-full mx-auto mt-6 max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800 ">
                <h1 className="text-2xl font-bold text-center">Register</h1>
                <form onSubmit={handleRigister} className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block text-xl font-semibold dark:text-gray-600"> your Name</label>
                        <input type="text" name="Name" placeholder="Enter your Name" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"  required/>
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block text-xl font-semibold dark:text-gray-600"> Photo URL</label>
                        <input type="text" name="photo" placeholder="Enter your Email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block text-xl font-semibold dark:text-gray-600"> Email</label>
                        <input type="email" name="email" placeholder="Enter your Email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required/>
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block text-xl font-semibold dark:text-gray-600"> Password</label>
                        <input type="password" name="password" id="password" placeholder="Enter your Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required />
                    </div>
                    <button type="submit" className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">Register</button>
                </form>
                <p className="text-xs text-center sm:px-6 dark:text-gray-600">Already have an account?
                <Link to="/login">
                    <button className="ml-3 font-bold text-blue-600">Login</button>
                </Link>
                </p>
            </div>
        </div>
    );
};

export default Rigister;