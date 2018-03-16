import React, { Component } from 'react'
import './Robot.css'

class Robot extends Component {
    render() {
        return (
            <svg class="robot" width="182px" height="154px" viewBox="0 0 182 154" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <defs>
                    <radialGradient cx="70.3806021%" cy="-3.48219813%" fx="70.3806021%" fy="-3.48219813%" r="206.691112%" gradientTransform="translate(0.703806,-0.034822),scale(0.815475,1.000000),rotate(-158.324786),translate(-0.703806,0.034822)" id="radialGradient-1">
                        <stop stopColor="#9E9EA5" offset="0%"></stop>
                        <stop stopColor="#656083" offset="32.7786308%"></stop>
                        <stop stopColor="#506286" offset="100%"></stop>
                    </radialGradient>
                    <path d="M58.0595041,43.128933 L58.0595041,34.8944702 C58.0595041,33.6866367 58.6526926,32.6173497 59.5636364,31.9620425 L59.5636364,1.9553719 C59.5636364,0.87544982 60.4390862,1.98378468e-16 61.5190083,0 C62.5989303,-1.98378468e-16 63.4743802,0.87544982 63.4743802,1.9553719 L63.4743802,31.7674926 C64.5533874,32.391668 65.2793388,33.5582916 65.2793388,34.8944702 L65.2793388,38.8348369 C73.0212164,34.9656117 81.7563647,32.7886179 91,32.7886179 C111.173993,32.7886179 128.925965,43.1580583 139.216323,58.8575711 L181.772222,122.505662 L145.045383,110.62398 L145.023456,110.44287 C136.880969,132.373405 115.765459,148 91,148 C66.2633573,148 45.1681755,132.409749 37.0050202,110.519398 L0.282921304,122.399547 L43.3741518,57.950795 L43.3706553,57.9796746 C47.3240097,52.1824558 52.3082219,47.1442828 58.0595041,43.128933 Z" id="path-2"></path>
                    <ellipse id="path-4" cx="35.7983471" cy="12.3333333" rx="35.7983471" ry="12.3333333"></ellipse>
                    <filter x="-12.6%" y="-36.5%" width="125.1%" height="173.0%" filterUnits="objectBoundingBox" id="filter-5">
                        <feMorphology radius="0.5" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>
                        <feOffset dx="0" dy="0" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>
                        <feGaussianBlur stdDeviation="2.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                        <feColorMatrix values="0 0 0 0 0.0117647059   0 0 0 0 0.701960784   0 0 0 0 1  0 0 0 1 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
                    </filter>
                    <filter x="-14.7%" y="-42.6%" width="129.3%" height="185.1%" filterUnits="objectBoundingBox" id="filter-6">
                        <feMorphology radius="2" operator="erode" in="SourceAlpha" result="shadowSpreadInner1"></feMorphology>
                        <feGaussianBlur stdDeviation="3" in="shadowSpreadInner1" result="shadowBlurInner1"></feGaussianBlur>
                        <feOffset dx="0" dy="1" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
                        <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
                        <feColorMatrix values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.5 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>
                    </filter>
                    <ellipse id="path-7" cx="61.5190083" cy="1.95528455" rx="1.9553719" ry="1.95528455"></ellipse>
                    <filter x="-230.1%" y="-230.1%" width="560.3%" height="560.3%" filterUnits="objectBoundingBox" id="filter-8">
                        <feMorphology radius="0.5" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>
                        <feOffset dx="0" dy="0" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>
                        <feGaussianBlur stdDeviation="2.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                        <feColorMatrix values="0 0 0 0 0.431372549   0 0 0 0 0.823529412   0 0 0 0 0.239215686  0 0 0 0.8 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
                    </filter>
                </defs>
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Robot-Copy" transform="translate(0.000000, 6.000000)">
                        <g id="robotMain">
                            <mask id="mask-3" fill="white">
                                <use xlinkHref="#path-2"></use>
                            </mask>
                            <use id="RobotShape" fill="url(#radialGradient-1)" xlinkHref="#path-2"></use>
                            <g id="lines" mask="url(#mask-3)" stroke="#37435B" strokeOpacity="0.5" strokeWidth="1.5">
                                <g transform="translate(36.099174, 48.430894)">
                                    <path d="M109.801653,70.9918699 C109.801653,66.5062401 85.2909549,62.8699187 55.0554767,62.8699187 C24.8199984,62.8699187 0,66.5062401 0,70.9918699" id="Oval-4-Copy-2" transform="translate(54.900826, 66.930894) scale(1, -1) translate(-54.900826, -66.930894) "></path>
                                    <path d="M97.7206372,3.7292819 C97.7206372,1.76977854 78.7164522,0.181287202 55.2736019,0.181287202 C31.8307517,0.181287202 12.5867529,1.76977854 12.5867529,3.7292819" id="Oval-4-Copy-3" transform="translate(55.153695, 1.955285) scale(1, -1) translate(-55.153695, -1.955285) "></path>
                                    <path d="M77.3123967,83.3601203 C77.3123967,79.3536096 80.7534611,76.1056911 84.9982292,76.1056911 C89.2429973,76.1056911 89.4299169,78.1154406 89.4299169,82.1219512 C89.4299169,86.1284618 87.0689331,88.1382114 82.824165,88.1382114 C78.579397,88.1382114 77.3123967,87.3666309 77.3123967,83.3601203 Z" id="Oval-2-Copy"></path>
                                    <path d="M33.1753714,83.3601203 C33.1753714,87.3666309 31.9083711,88.1382114 27.6636031,88.1382114 C23.418835,88.1382114 21.0578512,86.1284618 21.0578512,82.1219512 C21.0578512,78.1154406 21.2447708,76.1056911 25.4895389,76.1056911 C29.734307,76.1056911 33.1753714,79.3536096 33.1753714,83.3601203 Z" id="Oval-2-Copy-2"></path>
                                </g>
                            </g>
                            <g id="eyes" mask="url(#mask-3)">
                                <g transform="translate(55.652893, 61.666667)">
                                    <g id="glowyFaceBG" fill="none">
                                        <use fill="black" fillOpacity="1" filter="url(#filter-5)" xlinkHref="#path-4"></use>
                                        <use fill="#03B3F0" fillRule="evenodd" xlinkHref="#path-4"></use>
                                        <use fill="black" fillOpacity="1" filter="url(#filter-6)" xlinkHref="#path-4"></use>
                                    </g>
                                    <ellipse id="rightEye" fill="#37435B" fillRule="evenodd" cx="25.8710744" cy="12.6341463" rx="3.60991736" ry="6.91869919"></ellipse>
                                    <ellipse id="leftEye" fill="#37435B" fillRule="evenodd" cx="45.7256198" cy="12.6341463" rx="3.60991736" ry="6.91869919"></ellipse>
                                    <ellipse id="highlight" fillOpacity="0.25" fill="#FFFFFF" fillRule="evenodd" cx="35.7983471" cy="5.86585366" rx="21.3586777" ry="4.06097561"></ellipse>
                                </g>
                            </g>
                        </g>
                        <g id="antennaLight">
                            <use fill="black" fillOpacity="1" filter="url(#filter-8)" xlinkHref="#path-7"></use>
                            <use fill="#6ED23D" fillRule="evenodd" xlinkHref="#path-7"></use>
                        </g>
                    </g>
                </g>
            </svg>
        )
    }
}

export default Robot
