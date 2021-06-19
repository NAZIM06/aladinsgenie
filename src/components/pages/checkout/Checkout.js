import React from 'react'

export default function Checkout() {
    return (
        <div className="h-screen overflow-hidden flex items-center justify-center" style={{ background: '#edf2f7' }}>
            <div className="leading-loose">
                <form className="max-w-xl m-4 p-10 bg-white rounded shadow-xl">
                    <p className="text-gray-800 font-medium">Customer information</p>
                    <div className="">
                        <label className="block text-sm text-gray-00" for="cus_name">Name</label>
                        <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" name="cus_name" type="text" required="" placeholder="Your Name" aria-label="Name" />
                    </div>
                    <div className="mt-2">
                        <label className="block text-sm text-gray-600" for="cus_email">Email</label>
                        <input className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" name="cus_email" type="text" required="" placeholder="Your Email" aria-label="Email" />
                    </div>
                    <div className="mt-2">
                        <label className=" block text-sm text-gray-600" for="cus_email">Address</label>
                        <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" name="cus_email" type="text" required="" placeholder="Street" aria-label="Email" />
                    </div>
                    <div className="mt-2">
                        <label className="hidden text-sm block text-gray-600" for="cus_email">City</label>
                        <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" name="cus_email" type="text" required="" placeholder="City" aria-label="Email" />
                    </div>
                    <div className="inline-block mt-2 w-1/2 pr-1">
                        <label className="hidden block text-sm text-gray-600" for="cus_email">Country</label>
                        <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" name="cus_email" type="text" required="" placeholder="Country" aria-label="Email" />
                    </div>
                    <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
                        <label className="hidden block text-sm text-gray-600" for="cus_email">Zip</label>
                        <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" name="cus_email" type="text" required="" placeholder="Zip" aria-label="Email" />
                    </div>
                    <p className="mt-4 text-gray-800 font-medium">Phone Number</p>
                    <div className="">
                        <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required="" placeholder="016....." aria-label="Name" />
                    </div>
                    <div className="mt-4">
                        <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit">Checkout</button>
                    </div>

                </form>
            </div>
        </div>
    )
}
