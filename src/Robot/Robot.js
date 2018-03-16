import React from "react";
import './Robot.css'

const Robot = props => (
    <svg
        className={"robot"} 
        width={182}
        height={154}
        viewBox="0 0 182 154"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        {...props}
    >
        <title>Robot Copy</title>
        <defs>
            <radialGradient
                cx="70.381%"
                cy="-3.482%"
                fx="70.381%"
                fy="-3.482%"
                r="206.691%"
                gradientTransform="matrix(-.75781 -.36934 .3012 -.9293 1.248 .193)"
                id="b"
            >
                <stop stopColor="#9E9EA5" offset="0%" />
                <stop stopColor="#656083" offset="32.779%" />
                <stop stopColor="#506286" offset="100%" />
            </radialGradient>
            <path
                d="M58.06 43.129v-8.235c0-1.207.593-2.277 1.504-2.932V1.955a1.955 1.955 0 1 1 3.91 0v29.812a3.608 3.608 0 0 1 1.805 3.127v3.94C73.021 34.967 81.756 32.79 91 32.79c20.174 0 37.926 10.37 48.216 26.069l42.556 63.648-36.727-11.882-.022-.181C136.881 132.373 115.765 148 91 148c-24.737 0-45.832-15.59-53.995-37.48L.283 122.4l43.091-64.45-.003.03A57.929 57.929 0 0 1 58.06 43.129z"
                id="a"
            />
            <ellipse id="e" cx={35.798} cy={12.333} rx={35.798} ry={12.333} />
            <filter
                x="-12.6%"
                y="-36.5%"
                width="125.1%"
                height="173%"
                filterUnits="objectBoundingBox"
                id="d"
            >
                <feMorphology
                    radius={0.5}
                    operator="dilate"
                    in="SourceAlpha"
                    result="shadowSpreadOuter1"
                />
                <feOffset in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
                <feGaussianBlur
                    stdDeviation={2.5}
                    in="shadowOffsetOuter1"
                    result="shadowBlurOuter1"
                />
                <feColorMatrix
                    values="0 0 0 0 0.0117647059 0 0 0 0 0.701960784 0 0 0 0 1 0 0 0 1 0"
                    in="shadowBlurOuter1"
                />
            </filter>
            <filter
                x="-14.7%"
                y="-42.6%"
                width="129.3%"
                height="185.1%"
                filterUnits="objectBoundingBox"
                id="f"
            >
                <feMorphology radius={2} in="SourceAlpha" result="shadowSpreadInner1" />
                <feGaussianBlur
                    stdDeviation={3}
                    in="shadowSpreadInner1"
                    result="shadowBlurInner1"
                />
                <feOffset dy={1} in="shadowBlurInner1" result="shadowOffsetInner1" />
                <feComposite
                    in="shadowOffsetInner1"
                    in2="SourceAlpha"
                    operator="arithmetic"
                    k2={-1}
                    k3={1}
                    result="shadowInnerInner1"
                />
                <feColorMatrix
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
                    in="shadowInnerInner1"
                />
            </filter>
            <ellipse id="h" cx={61.519} cy={1.955} rx={1.955} ry={1.955} />
            <filter
                x="-230.1%"
                y="-230.1%"
                width="560.3%"
                height="560.3%"
                filterUnits="objectBoundingBox"
                id="g"
            >
                <feMorphology
                    radius={0.5}
                    operator="dilate"
                    in="SourceAlpha"
                    result="shadowSpreadOuter1"
                />
                <feOffset in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
                <feGaussianBlur
                    stdDeviation={2.5}
                    in="shadowOffsetOuter1"
                    result="shadowBlurOuter1"
                />
                <feColorMatrix
                    values="0 0 0 0 0.431372549 0 0 0 0 0.823529412 0 0 0 0 0.239215686 0 0 0 0.8 0"
                    in="shadowBlurOuter1"
                />
            </filter>
        </defs>
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
                        <ellipse
                            fill="#37435B"
                            cx={25.871}
                            cy={12.634}
                            rx={3.61}
                            ry={6.919}
                        />
                        <ellipse
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
                    </g>
                </g>
            </g>
            <g transform="translate(0 6)">
                <use fill="#000" filter="url(#g)" xlinkHref="#h" />
                <use fill="#6ED23D" xlinkHref="#h" />
            </g>
        </g>
    </svg>
);

export default Robot;