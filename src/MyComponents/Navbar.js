import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
    return (
        <>
            {/* Navbar */}
            <nav className="bg-blue-500 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 py-2">
                    <div className="flex justify-between">
                        <div className="flex items-center">
                            <h1 className="text-white font-bold text-xl">{props.title}</h1>
                        </div>
                        <div className="flex items-center">
                            <a
                                href="#"
                                className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Home
                            </a>
                            <a
                                href="#"
                                className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
                            >
                                About
                            </a>
                            <a
                                href="#"
                                className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>

    )
}
Navbar.prototype = {
    title: PropTypes.string,

}
Navbar.defaultProps = {
    title: 'Todos'
}