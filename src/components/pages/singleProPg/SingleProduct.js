import React from 'react';
import tshirt from "../../../assets/Vector-T-shirt.png";
import './SingleProduct.css'

const SingleProduct = () => {
    return (
        <section>

            <div className="product" style={{ height: '700px' }}>
                <div className="product-area">
                    <img src={tshirt} alt="" />
                    <h1 className="text-gray-700 text-xl font-bold py-4 text-center">$299</h1>
                </div>
                <div className="product-area" style={{marginTop:'250px'}}>
                    <h1 className="text-gray-700 text-xl font-bold py-4">Nasa Kun T-shirt</h1>
                    <p className="text-gray-600 py-3" style={{marginTop:'50px'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum dolorem quisquam, perspiciatis quasi eligendi magni doloremque quo aperiam nam aliquid ullam autem minima voluptatum molestiae. Quisquam molestias eum eveniet beatae? Deserunt explicabo ut blanditiis animi quaerat. Fuga officiis dolores suscipit facere, veritatis architecto dignissimos magnam voluptatibus repudiandae adipisci est velit?</p>
                    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Buy Now
                    </button>
                    <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded" style={{marginLeft:'20px'}}>
                       Add to Wishlist
                    </button>
                </div>

            </div>

        </section>

    );
};

export default SingleProduct;