import React from 'react';

const Banner = () => {
    return (
        <div className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
            <div className="py-24 flex flex-col md:flex-row-reverse justify-between items-center gap-8">
                {/* Image */}
                <div className="md:w-1/2">
                    <img src="/images/home/banner.png" alt="" />

                    <div className="flex flex-col md:flex-row items-center justify-around -mt-24 gap-4">
                        <div>
                            <div className="flex bg-white py-2 px-3 rounded-2xl items-center justify-around gap-3 shadow-md w-72">
                                <img
                                    src="/images/home/b-food1.png"
                                    alt=""
                                    className="rounded-2xl"
                                />
                                <div className="space-y-1">
                                    <h5 className="font-medium mb-1">
                                        Vegetarian Salad
                                    </h5>
                                    <div className="rating rating-sm">
                                        <input
                                            type="radio"
                                            name="rating-6"
                                            className="mask mask-star-2 bg-yellow-500"
                                            readOnly
                                        />
                                        <input
                                            type="radio"
                                            name="rating-6"
                                            className="mask mask-star-2 bg-yellow-500"
                                            readOnly
                                        />
                                        <input
                                            type="radio"
                                            name="rating-6"
                                            className="mask mask-star-2 bg-yellow-500"
                                            checked
                                            readOnly
                                        />
                                        <input
                                            type="radio"
                                            name="rating-6"
                                            className="mask mask-star-2 bg-yellow-500"
                                        />
                                        <input
                                            type="radio"
                                            name="rating-6"
                                            className="mask mask-star-2 bg-yellow-500"
                                            readOnly
                                        />
                                    </div>
                                    <p className="text-red">$10.00</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="sm:flex hidden bg-white py-2 px-3 rounded-2xl items-center justify-around gap-3 shadow-md w-72">
                                <img
                                    src="/images/home/b-food2.png"
                                    alt=""
                                    className="rounded-2xl w-28 h-24"
                                />
                                <div className="space-y-1">
                                    <h5 className="font-medium mb-1">
                                        Chocolate Cake
                                    </h5>
                                    <div className="rating rating-sm">
                                        <input
                                            type="radio"
                                            name="rating-6"
                                            className="mask mask-star-2 bg-yellow-500"
                                            readOnly
                                        />
                                        <input
                                            type="radio"
                                            name="rating-6"
                                            className="mask mask-star-2 bg-yellow-500"
                                            readOnly
                                        />
                                        <input
                                            type="radio"
                                            name="rating-6"
                                            className="mask mask-star-2 bg-yellow-500"
                                            checked
                                            readOnly
                                        />
                                        <input
                                            type="radio"
                                            name="rating-6"
                                            className="mask mask-star-2 bg-yellow-500"
                                        />
                                        <input
                                            type="radio"
                                            name="rating-6"
                                            className="mask mask-star-2 bg-yellow-500"
                                            readOnly
                                        />
                                    </div>
                                    <p className="text-red">$18.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Texts */}
                <div className="md:w-1/2 space-y-7 px-4">
                    <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
                        Dive into Delights Of Delectable{' '}
                        <span className="text-morange">Food</span>
                    </h2>
                    <p className="text-xl text-[#4A4A4A]">
                        Where Each Plate Weaves a Story of Culinary Mastery and
                        Passionate Craftsmanship
                    </p>
                    <button className="btn bg-morange px-8 py-3 font-semibold text-white rounded-full">
                        Order Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
