import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="container mx-auto">
			<div className="flex justify-center px-6 my-12">
				
				<div className="w-full xl:w-3/4 lg:w-11/12 flex">
					<div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
						<h3 className="pt-4 text-2xl text-center font-bold">Create an Account!</h3>
						<form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
							<div className="mb-4 md:flex md:justify-between">
								<div className="mb-4 md:mr-2 md:mb-0">
									<label className="block mb-2 text-sm font-bold text-gray-700" for="firstName">
										First Name
									</label>
									<input
										className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										type="text"
										placeholder="First Name"
									/>
								</div>
								<div className="md:ml-2">
									<label className="block mb-2 text-sm font-bold text-gray-700" for="lastName">
										Last Name
									</label>
									<input
										className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										type="text"
										placeholder="Last Name"
									/>
								</div>
							</div>
							<div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700" for="email">
									Email
								</label>
								<input
									className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="email"
									type="email"
									placeholder="Email"
								/>
							</div>
                            <div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700" for="number">
									Phone Number
								</label>
								<input
									className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									type="number"
									placeholder="016...."
								/>
							</div>
							<div className="mb-4 md:flex md:justify-between">
								<div className="mb-4 md:mr-2 md:mb-0">
									<label className="block mb-2 text-sm font-bold text-gray-700" for="password">
										Password
									</label>
									<input
										className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="password"
										type="password"
									
									/>
								</div>
								<div className="md:ml-2">
									<label className="block mb-2 text-sm font-bold text-gray-700" for="c_password">
										Confirm Password
									</label>
									<input
										className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										
										type="password"
										
									/>
								</div>
							</div>
							<div className="mb-6 text-center">
								<button
									className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
									type="button"
								>
									Register Account
								</button>
							</div>
							<hr className="mb-6 border-t" />
							<div className="text-center">
							
                                <Link to="/" className="ml-5 font-bold text-red-600">Forgot Password?</Link>
                                
							</div>
							<div className="text-center">	
                            <Link to="/login" className="ml-5 font-bold text-purple-600">Already have an account? Login!</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
    );
};

export default Register;