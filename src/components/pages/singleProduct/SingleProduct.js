import React from 'react';
import tshirt from "../../../assets/Vector-T-shirt.png";
import './SingleProduct.css'
import IconBtn from "../../iconBtn/IconBtn";
import PdCardMd from "../../productCardMd/PdCardMd";

const SingleProduct = () => {
    return (
        <section>

            <div className="product" style={{ height: '700px' }}>
                <div className="product-area">
                    <img src={tshirt} alt="" />
                    <h1 className="text-gray-700 text-xl font-bold py-4 text-center">$299</h1>
                </div>
                <div className="product-area" style={{ marginTop: '250px' }}>
                    <h1 className="text-gray-700 text-xl font-bold py-4">Nasa Kun T-shirt</h1>
                    <p className="text-gray-600 py-3" style={{ marginTop: '50px' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum dolorem quisquam, perspiciatis quasi eligendi magni doloremque quo aperiam nam aliquid ullam autem minima voluptatum molestiae. Quisquam molestias eum eveniet beatae? Deserunt explicabo ut blanditiis animi quaerat. Fuga officiis dolores suscipit facere, veritatis architecto dignissimos magnam voluptatibus repudiandae adipisci est velit?</p>

                    {/* <label class="block">
                        <span class="text-gray-700">Select</span>
                        <select class="form-select block w-full mt-1">
                            <option>Option 1</option>
                            <option>Option 2</option>
                        </select>
                    </label> */}

                    <label class="block  py-4 ">
                        <span class="text-gray-700 text-xl font-bold">Size</span>
                        <select class="form-select block w-full mt-1 font-semibold">
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                            <option>XXL</option>
                        </select>
                    </label>
                    <label class="block py-4">
                        <span class="text-gray-700 text-xl font-bold">Color</span>
                        <select class="form-select block w-full mt-1 font-semibold">
                            <option>Black</option>
                            <option>White</option>
                            <option>Red</option>
                            <option>Orange</option>
                        </select>
                    </label>
                    <IconBtn></IconBtn>
                </div>
            </div>
        </section>


    );
};

export default SingleProduct;