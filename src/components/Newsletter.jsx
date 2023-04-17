import React from 'react'

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white">
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
            <div className="lg:cols-span-2">
                <h1 className="md:text-5xl sm:text-4xl text-2xl font-bold py-2">Want tips & tricks to optimize your flow?</h1>
                <p>Sign up to our newsletter and stay up to date.</p>
            </div>
            <div className="my-4">
                <div>
                    <input type="email" placeholder="Enter email" />
                    <button></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter;