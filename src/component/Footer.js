import React from "react";

const Footer = (props) => {
    return (
        <footer className="bg-white w-full px-4 py-2.5 border-t">
            <div className="w-full max-w-screen-xl mx-auto py-4">
                <div className="sm:flex sm:items-center sm:justify-between m-auto content-center text-center">
                    <span className="block text-sm text-gray-500 sm:text-center">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 content-center text-center">
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;