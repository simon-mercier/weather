import * as React from "react";

function SvgMoon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 105 79"
            width="1em"
            height="1em"
            {...props}
        >
            <g filter="url(#moon_svg__filter0_dd)">
                <mask
                    id="moon_svg__a"
                    maskUnits="userSpaceOnUse"
                    x={6}
                    y={0}
                    width={99}
                    height={64}
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M54.5 0H6v64h99V0H54.5zm0 0C70.24 0 83 14.327 83 32c0 17.673-12.76 32-28.5 32S26 49.673 26 32C26 14.327 38.76 0 54.5 0z"
                        fill="#C4C4C4"
                    />
                </mask>
                <g
                    filter="url(#moon_svg__filter1_iii)"
                    mask="url(#moon_svg__a)"
                >
                    <circle cx={38.5} cy={32.5} r={28.5} fill="#94908D" />
                </g>
            </g>
            <defs>
                <filter
                    id="moon_svg__filter0_dd"
                    x={0}
                    y={2}
                    width={77}
                    height={77}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy={8} />
                    <feGaussianBlur stdDeviation={5} />
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow"
                    />
                    <feColorMatrix
                        in="SourceAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy={2} />
                    <feGaussianBlur stdDeviation={1.5} />
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend
                        in2="effect1_dropShadow"
                        result="effect2_dropShadow"
                    />
                    <feBlend
                        in="SourceGraphic"
                        in2="effect2_dropShadow"
                        result="shape"
                    />
                </filter>
                <filter
                    id="moon_svg__filter1_iii"
                    x={-2}
                    y={-4}
                    width={74}
                    height={69}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feBlend
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    />
                    <feColorMatrix
                        in="SourceAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dx={5} dy={4} />
                    <feGaussianBlur stdDeviation={10} />
                    <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2={-1}
                        k3={1}
                    />
                    <feColorMatrix values="0 0 0 0 0.941176 0 0 0 0 0.941176 0 0 0 0 0.941176 0 0 0 1 0" />
                    <feBlend in2="shape" result="effect1_innerShadow" />
                    <feColorMatrix
                        in="SourceAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy={-6} />
                    <feGaussianBlur stdDeviation={4.5} />
                    <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2={-1}
                        k3={1}
                    />
                    <feColorMatrix values="0 0 0 0 0.854902 0 0 0 0 0.85098 0 0 0 0 0.843137 0 0 0 1 0" />
                    <feBlend
                        in2="effect1_innerShadow"
                        result="effect2_innerShadow"
                    />
                    <feColorMatrix
                        in="SourceAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dx={-12} dy={-8} />
                    <feGaussianBlur stdDeviation={10.5} />
                    <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2={-1}
                        k3={1}
                    />
                    <feColorMatrix values="0 0 0 0 0.192157 0 0 0 0 0.188235 0 0 0 0 0.180392 0 0 0 1 0" />
                    <feBlend
                        in2="effect2_innerShadow"
                        result="effect3_innerShadow"
                    />
                </filter>
            </defs>
        </svg>
    );
}

export default SvgMoon;
