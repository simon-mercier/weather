import * as React from "react";

function SvgSun(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 77 77"
            width="1em"
            height="1em"
            {...props}
        >
            <g filter="url(#sun_svg__filter0_dd)">
                <g filter="url(#sun_svg__filter1_iii)">
                    <circle cx={38.5} cy={30.5} r={28.5} fill="#FC3" />
                </g>
            </g>
            <defs>
                <filter
                    id="sun_svg__filter0_dd"
                    x={0}
                    y={0}
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
                    id="sun_svg__filter1_iii"
                    x={-2}
                    y={-6}
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
                    <feColorMatrix values="0 0 0 0 0.960784 0 0 0 0 0.960784 0 0 0 0 0.960784 0 0 0 1 0" />
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
                    <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.894118 0 0 0 0 0.517647 0 0 0 1 0" />
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
                    <feColorMatrix values="0 0 0 0 0.988235 0 0 0 0 0.588235 0 0 0 0 0.00392157 0 0 0 1 0" />
                    <feBlend
                        in2="effect2_innerShadow"
                        result="effect3_innerShadow"
                    />
                </filter>
            </defs>
        </svg>
    );
}

export default SvgSun;
