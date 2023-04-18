import React from 'react';
import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';



const Cards = () => {
    return (
        <div className="w-full py-[10rem] px-4 bg-white">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
                    <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale(105) duration-300">
                        <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Single} alt="" />
                        <h2 className="text-2xl font-bold text-center py-8">
                            Sinlge User
                        </h2>
                        <p>
                            $145
                        </p>
                        <div>
                            <p>500 GB Storage</p>
                            <p>1 Granted User</p>
                            <p>Send up to 2 GB</p>
                        </div>
                        <button>Start Trial</button>
                    </div>                    
            </div>
        </div>
    )
}
export default Cards;