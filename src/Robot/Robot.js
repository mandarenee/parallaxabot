import React from "react";
import './Robot.css'

const Robot = props => (
    <svg {...props} className={'robot'} width="182" height="154" viewBox="0 0 182 154" xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink">
        <defs>
            <path d="M58.0595041,43.128933 L58.0595041,34.8944702 C58.0595041,33.6866367 58.6526926,32.6173497 59.5636364,31.9620425 L59.5636364,1.9553719 C59.5636364,0.87544982 60.4390862,1.98378468e-16 61.5190083,0 C62.5989303,-1.98378468e-16 63.4743802,0.87544982 63.4743802,1.9553719 L63.4743802,31.7674926 C64.5533874,32.391668 65.2793388,33.5582916 65.2793388,34.8944702 L65.2793388,38.8348369 C73.0212164,34.9656117 81.7563647,32.7886179 91,32.7886179 C111.173993,32.7886179 128.925965,43.1580583 139.216323,58.8575711 L181.772222,122.505662 L145.045383,110.62398 L145.023456,110.44287 C136.880969,132.373405 115.765459,148 91,148 C66.2633573,148 45.1681755,132.409749 37.0050202,110.519398 L0.282921304,122.399547 L43.3741518,57.950795 L43.3706553,57.9796746 C47.3240097,52.1824558 52.3082219,47.1442828 58.0595041,43.128933 Z"
                id="path-2" />
            <ellipse id="path-4" cx="35.798" cy="12.333" rx="35.798" ry="12.333" />
            <filter x="-12.6%" y="-36.5%" width="125.1%" height="173%" filterunits="objectBoundingBox"
                id="filter-5">
                <femorphology radius=".5" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1">
                    <feoffset in="shadowSpreadOuter1" result="shadowOffsetOuter1">
                        <fegaussianblur stddeviation="2.5" in="shadowOffsetOuter1" result="shadowBlurOuter1">
                            <fecolormatrix values="0 0 0 0 0.0117647059 0 0 0 0 0.701960784 0 0 0 0 1 0 0 0 1 0"
                                in="shadowBlurOuter1" />
                        </fegaussianblur>
                    </feoffset>
                </femorphology>
            </filter>
            <filter x="-14.7%" y="-42.6%" width="129.3%" height="185.1%" filterunits="objectBoundingBox"
                id="filter-6">
                <femorphology radius="2" in="SourceAlpha" result="shadowSpreadInner1">
                    <fegaussianblur stddeviation="3" in="shadowSpreadInner1" result="shadowBlurInner1">
                        <feoffset dy="1" in="shadowBlurInner1" result="shadowOffsetInner1">
                            <fecomposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic"
                                k2="-1" k3="1" result="shadowInnerInner1">
                                <fecolormatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" in="shadowInnerInner1"
                                />
                            </fecomposite>
                        </feoffset>
                    </fegaussianblur>
                </femorphology>
            </filter>
            <ellipse id="path-7" cx="61.519" cy="1.955" rx="1.955" ry="1.955" />
            <filter x="-230.1%" y="-230.1%" width="560.3%" height="560.3%" filterunits="objectBoundingBox"
                id="filter-8">
                <femorphology radius=".5" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1">
                    <feoffset in="shadowSpreadOuter1" result="shadowOffsetOuter1">
                        <fegaussianblur stddeviation="2.5" in="shadowOffsetOuter1" result="shadowBlurOuter1">
                            <fecolormatrix values="0 0 0 0 0.431372549 0 0 0 0 0.823529412 0 0 0 0 0.239215686 0 0 0 0.8 0"
                                in="shadowBlurOuter1" />
                        </fegaussianblur>
                    </feoffset>
                </femorphology>
            </filter>
        </defs>
<<<<<<< HEAD
        <g fill="none" fillRule="evenodd">
            <g transform="translate(0 6)">
                <mask id="c" fill="#fff">
                    <use xlinkHref="#a" />
                </mask>
                <use fill="url(#b)" xlinkHref="#a" />
                <g
                    mask="url(#c)"
                    stroke="#37435B"
                    strokeOpacity={0.5}
                    strokeWidth={1.5}
                >
                    <path d="M145.9 111.3c0 4.486-24.51 8.123-54.745 8.123-30.236 0-55.056-3.637-55.056-8.122M133.82 48.612c0 1.96-19.004 3.548-42.447 3.548s-42.687-1.588-42.687-3.548M113.412 131.791c0-4.006 3.44-7.254 7.685-7.254 4.245 0 4.432 2.01 4.432 6.016s-2.36 6.016-6.606 6.016c-4.244 0-5.511-.771-5.511-4.778zM69.275 131.791c0 4.007-1.267 4.778-5.512 4.778-4.245 0-6.606-2.01-6.606-6.016 0-4.007.187-6.016 4.432-6.016 4.244 0 7.686 3.248 7.686 7.254z" />
                </g>
                <g mask="url(#c)">
                    <g transform="translate(55.653 61.667)">
                        <use fill="#000" filter="url(#d)" xlinkHref="#e" />
                        <use fill="#03B3F0" xlinkHref="#e" />
                        <use fill="#000" filter="url(#f)" xlinkHref="#e" />
                        <ellipse className="eyes"
                            fill="#37435B"
                            cx={25.871}
                            cy={12.634}
                            rx={3.61}
                            ry={6.919}
                        />
                        <ellipse className="eyes"
                            fill="#37435B"
                            cx={45.726}
                            cy={12.634}
                            rx={3.61}
                            ry={6.919}
                        />
                        <ellipse
                            fillOpacity={0.25}
                            fill="#FFF"
                            cx={35.798}
                            cy={5.866}
                            rx={21.359}
                            ry={4.061}
                        />
=======
        <g id="Page-1" fill="none" fillRule="evenodd">
            <g id="Robot-Copy" transform="translate(0 6)">
                <g id="robotMain">
                    <mask id="mask-3" fill="#fff">
                        <use xlinkHref="#path-2" />
                    </mask>
                    <use id="RobotShape" fill={`rgba(${props.color.r}, ${props.color.g}, ${props.color.b}, ${props.color.a })`} xlinkHref="#path-2"
                    />
                    <g id="lines" mask="url(#mask-3)" stroke="#37435B" strokeOpacity=".5"
                        strokeWidth="1.5">
                        <g transform="translate(36.1 48.43)">
                            <path d="M109.801653,70.9918699 C109.801653,66.5062401 85.2909549,62.8699187 55.0554767,62.8699187 C24.8199984,62.8699187 0,66.5062401 0,70.9918699"
                                id="Oval-4-Copy-2" transform="matrix(1 0 0 -1 0 133.862)" />
                            <path d="M97.7206372,3.7292819 C97.7206372,1.76977854 78.7164522,0.181287202 55.2736019,0.181287202 C31.8307517,0.181287202 12.5867529,1.76977854 12.5867529,3.7292819"
                                id="Oval-4-Copy-3" transform="matrix(1 0 0 -1 0 3.91)" />
                            <path d="M77.3123967,83.3601203 C77.3123967,79.3536096 80.7534611,76.1056911 84.9982292,76.1056911 C89.2429973,76.1056911 89.4299169,78.1154406 89.4299169,82.1219512 C89.4299169,86.1284618 87.0689331,88.1382114 82.824165,88.1382114 C78.579397,88.1382114 77.3123967,87.3666309 77.3123967,83.3601203 Z"
                                id="Oval-2-Copy" />
                            <path d="M33.1753714,83.3601203 C33.1753714,87.3666309 31.9083711,88.1382114 27.6636031,88.1382114 C23.418835,88.1382114 21.0578512,86.1284618 21.0578512,82.1219512 C21.0578512,78.1154406 21.2447708,76.1056911 25.4895389,76.1056911 C29.734307,76.1056911 33.1753714,79.3536096 33.1753714,83.3601203 Z"
                                id="Oval-2-Copy-2" />
                        </g>
                    </g>
                    <g id="eyes" mask="url(#mask-3)">
                        <g transform="translate(55.653 61.667)">
                            <g id="glowyFaceBG">
                                <use fill="#000" filter="url(#filter-5)" xlinkHref="#path-4" />
                                <use fill="#03B3F0" xlinkHref="#path-4" />
                                <use fill="#000" filter="url(#filter-6)" xlinkHref="#path-4" />
                            </g>
                            <ellipse id="rightEye" fill="#37435B" cx="25.871" cy="12.634" rx="3.61"
                                ry="6.919" />
                            <ellipse id="leftEye" fill="#37435B" cx="45.726" cy="12.634" rx="3.61"
                                ry="6.919" />
                            <ellipse id="highlight" fillOpacity=".25" fill="#FFF" cx="35.798" cy="5.866"
                                rx="21.359" ry="4.061" />
                        </g>
>>>>>>> ac845e46b557aea1a6ac19041569543fa580c118
                    </g>
                </g>
                <g id="antennaLight">
                    <use fill="#000" filter="url(#filter-8)" xlinkHref="#path-7" />
                    <use fill="#6ED23D" xlinkHref="#path-7" />
                </g>
            </g>
        </g>
    </svg>
);

export default Robot;