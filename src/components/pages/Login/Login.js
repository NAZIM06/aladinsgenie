import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className="h-screen overflow-hidden flex items-center justify-center" style={{ background: '#edf2f7' }}>
            <div className="leading-loose">
                <form className="max-w-xl m-4 p-10 bg-white rounded shadow-xl ">
                    <p className="text-gray-800 text-2xl font-bold mb-5">Login</p>
                    <div className="">
                        
                        <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded mb-2" name="cus_name" type="text" required="" placeholder="Username" aria-label="Name" />
                    </div>
                    <div className="mt-2">
                        <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" name="cus_email" type="password" required="" placeholder="Password" aria-label="password" />
                    </div>
                    <div className="mt-4">
                        <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit">Login</button>
                        <Link to="/register" className="ml-5 font-bold text-purple-600">Register</Link>
                    </div>

                </form>
            </div>
        </div>
    )
}
