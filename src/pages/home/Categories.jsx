import React from 'react';

const categoryItems = [
    {
        id: 1,
        title: 'Main Dish',
        des: '(12 dishes)',
        image: '/images/home/category/img1.png',
    },
    {
        id: 2,
        title: 'Breakfast',
        des: '(8 dishes)',
        image: '/images/home/category/img2.png',
    },
    {
        id: 3,
        title: 'Desserts',
        des: '(6 dishes)',
        image: '/images/home/category/img3.png',
    },
    {
        id: 4,
        title: 'Browse All',
        des: '(4 dishes)',
        image: '/images/home/category/img4.png',
    },
];

const Categories = () => {
    return (
        <div className="section-container py-16">
            <div className="text-center">
                <p className="subtitle">Customer Favorites</p>
                <h3 className="title">Popular Categories</h3>
            </div>

            {/* Categories */}
            <div className="flex flex-column md:flex-row  flex-wrap gap-8 justify-around items-center mt-12">
                {categoryItems.map((item, i) => (
                    <div
                        key={i}
                        className="shadow-lg rounded-3xl bg-white py-6 px-5 w-64 mx-auto text-center cursor-pointer hover:-translate-y-4 duration-300 transition-all"
                    >
                        <div className="flex w-full mx-auto items-center justify-center">
                            <img
                                src={item.image}
                                alt=""
                                className="bg-orange-300 p-5 rounded-full w-28 h-28"
                            />
                        </div>
                        <div className="mt-5 space-y-1">
                            <h5 className="font-bold">{item.title}</h5>
                            <p>{item.des}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;
