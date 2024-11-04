
import React from 'react';
import * as Images from "../../assest/images";
import * as Icon from "../../assest/icon";

const BestRankData = [
    {
        id: 1,
        img: Images.Image_8,
        name: "Five Night at Freeddy's",
        year: 2023,
    },
    {
        id: 2,
        img: Images.Image_7,
        name: "Taylor Swiftt:The Eras Tour",
        year: 2023,
    },
    {
        id: 3,
        img: Images.Image_6,
        name: "Fifty Shades of Gray",
        year: 2023,
    },
    {
        id: 4,
        img: Images.Image_6,
        name: "Fifty Shades of Gray",
        year: 2023,
    },
    {
        id: 5,
        img: Images.Image_6,
        name: "Fifty Shades of Gray",
        year: 2023,
    },
];

const BestUser = () => {
    return (
        <div>
            <h1 className='flex text-xl font-bold text-white mt-10 mb-10 '>Best Ranked<Icon.DoubleRight className="w-4 mt-1" /></h1>
            <div className="grid grid-cols-3 gap-2">
                {BestRankData.map((item, index) => (
                    <div key={index} className="">
                        <div className="relative group">
                            <img src={item.img} alt="" className="w-24 h-40 rounded-lg border border-teritory overflow-hidden transition transform hover:scale-95" />
                            <p className="absolute top-2 left-[70px] text-primary border bg-black rounded-lg p-1 text-[10px] font-bold opacity-100 group-hover:opacity-0">HD</p>
                        </div>
                        <div className="font-bold text-white hover:text-primary mt-4">{item.name}</div>
                        <div className="font-bold text-white hover:text-teritory mt-4 mb-4">{item.year}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BestUser;
