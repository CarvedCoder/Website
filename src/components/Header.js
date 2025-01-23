import React from 'react'
import Image from "next/image"
import {
    MenuIcon,
    ShoppingCartIcon,
    SearchIcon,
} from "@heroicons/react/outline";

function Header() {
    return (
        <header>
            {/* Upper nav*/}
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <   Image
                        width={150}
                        height={40}
                        objectFit="contain"
                        className="cursor-pointer"
                    />
                </div>
                {/*Search*/}
                <div className="hidden sm:flex items-center h-8 rounded-md flex-grow cursor-pointer bg-yellow-500 hover:bg-yellow-600">
                    <input type="text"
                        className="h-full flex-grow flex-shrink w-6 rounded-l-md focus:outline-none px-4" />
                    <SearchIcon className="h-12 p-4" />
                </div>
                {/*right*/}
                <div className="text-white flex text-sm space-x-5 mx-5 whitespace-nowrap">
                    {/*user*/}
                    <div className=" link ">
                        <p>Hello! Shreyans Behera</p>
                        <p className="bold">Account & Lists</p>
                    </div>
                    {/*Basket*/}
                    <div className="relative link flex items-center">
                        <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-300 text-center rounded-full text-black bold text-xs">0</span>
                        <ShoppingCartIcon className="h-8" />
                        <p className="hidden md:inline bold mt-2">Basket</p>
                    </div>
                    {/*Orders*/}
                    <div className="link ">
                        <p>Returns</p>
                        <p className="bold">& Orders</p>
                    </div>
                </div>
            </div>

            {/* Lower nav*/}
            <div className = "flex items-center bg-amazon_blue-light text-white space-x-2">

                <p className ="flex items-center link">
                    <MenuIcon className="h-6 mr-1" />
                    All
                </p>    
                    <p className="pl-2 text-sm link">
                        Categories
                    </p>
                    <p className="pl-2 text-sm link">
                        Prime
                    </p>
                    <p className="hidden pl-2 text-sm link lg:inline-flex">
                        Customer Service
                    </p>
                    <p className="hidden pl-2 text-sm link lg:inline-flex">
                        Help
                    </p>
                    <p className="hidden pl-2 text-sm link lg:inline-flex">
                        Gift Cards
                    </p>
                    <p className="hidden pl-2 text-sm link lg:inline-flex">
                        Shopping Bag
                    </p>
                    <p className="hidden pl-2 text-sm link lg:inline-flex">
                        My Account
                    </p>
                    <p className="hidden pl-2 text-sm link lg:inline-flex">
                        Sign In
                    </p>
                    <p className="hidden pl-2 text-sm link lg:inline-flex">
                        Shop Now
                    </p>
            </div>
        </header>
    )
}

export default Header


