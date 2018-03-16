import React, { Component } from 'react'
import './Background.css'

class Background extends Component {
    render() {
        return (
            <svg className="bk" width="800px" height="488px" viewBox="0 0 800 488" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <defs>
                    <linearGradient x1="47.0116454%" y1="107.400356%" x2="47.0116471%" y2="1.42364849%" id="linearGradient-1">
                        <stop stopColor="#FFFFFF" offset="0%"></stop>
                        <stop stopColor="#141414" offset="100%"></stop>
                    </linearGradient>
                </defs>
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Desktop-HD" transform="translate(-419.000000, -268.000000)" fill="url(#linearGradient-1)">
                        <g id="Robot-Scene" transform="translate(419.000000, 268.000000)">
                            <rect id="Rectangle-3" x="0" y="0" width="800" height="488"></rect>
                        </g>
                    </g>
                </g>
            </svg>
        )
    }
}

export default Background
