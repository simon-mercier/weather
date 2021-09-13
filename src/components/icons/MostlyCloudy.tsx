import * as React from "react";

function SvgMostlyCloudy(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 150 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g filter="url(#mostly-cloudy_svg__filter0_dd)">
                <g filter="url(#mostly-cloudy_svg__filter1_iii)">
                    <circle cx={46} cy={71} r={21} fill="#D7D7D7" />
                </g>
                <g filter="url(#mostly-cloudy_svg__filter2_iii)">
                    <circle cx={109.5} cy={61.5} r={15.5} fill="#D7D7D7" />
                </g>
                <g filter="url(#mostly-cloudy_svg__filter3_iii)">
                    <circle cx={81} cy={62} r={27} fill="#D7D7D7" />
                </g>
                <g filter="url(#mostly-cloudy_svg__filter4_iii)">
                    <circle cx={68.5} cy={81.5} r={16.5} fill="#D7D7D7" />
                </g>
            </g>
            <defs>
                <filter
                    id="mostly-cloudy_svg__filter0_dd"
                    x={15}
                    y={33}
                    width={120}
                    height={83}
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
                    id="mostly-cloudy_svg__filter1_iii"
                    x={15}
                    y={44}
                    width={57}
                    height={52}
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
                    <feColorMatrix values="0 0 0 0 0.741176 0 0 0 0 0.741176 0 0 0 0 0.741176 0 0 0 1 0" />
                    <feBlend
                        in2="effect1_innerShadow"
                        result="effect2_innerShadow"
                    />
                    <feColorMatrix
                        in="SourceAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dx={-10} dy={-6} />
                    <feGaussianBlur stdDeviation={9} />
                    <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2={-1}
                        k3={1}
                    />
                    <feColorMatrix values="0 0 0 0 0.756863 0 0 0 0 0.756863 0 0 0 0 0.756863 0 0 0 1 0" />
                    <feBlend
                        in2="effect2_innerShadow"
                        result="effect3_innerShadow"
                    />
                </filter>
                <filter
                    id="mostly-cloudy_svg__filter2_iii"
                    x={94}
                    y={40}
                    width={36}
                    height={41}
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
                    <feGaussianBlur stdDeviation={5.5} />
                    <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2={-1}
                        k3={1}
                    />
                    <feColorMatrix values="0 0 0 0 0.741176 0 0 0 0 0.741176 0 0 0 0 0.741176 0 0 0 1 0" />
                    <feBlend
                        in2="effect1_innerShadow"
                        result="effect2_innerShadow"
                    />
                    <feColorMatrix
                        in="SourceAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dx={4} dy={-5} />
                    <feGaussianBlur stdDeviation={5} />
                    <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2={-1}
                        k3={1}
                    />
                    <feColorMatrix values="0 0 0 0 0.756863 0 0 0 0 0.756863 0 0 0 0 0.756863 0 0 0 1 0" />
                    <feBlend
                        in2="effect2_innerShadow"
                        result="effect3_innerShadow"
                    />
                </filter>
                <filter
                    id="mostly-cloudy_svg__filter3_iii"
                    x={42}
                    y={27}
                    width={71}
                    height={66}
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
                    <feGaussianBlur stdDeviation={10} />
                    <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2={-1}
                        k3={1}
                    />
                    <feColorMatrix values="0 0 0 0 0.741176 0 0 0 0 0.741176 0 0 0 0 0.741176 0 0 0 1 0" />
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
                    <feGaussianBlur stdDeviation={11} />
                    <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2={-1}
                        k3={1}
                    />
                    <feColorMatrix values="0 0 0 0 0.756863 0 0 0 0 0.756863 0 0 0 0 0.756863 0 0 0 1 0" />
                    <feBlend
                        in2="effect2_innerShadow"
                        result="effect3_innerShadow"
                    />
                </filter>
                <filter
                    id="mostly-cloudy_svg__filter4_iii"
                    x={45}
                    y={55}
                    width={45}
                    height={47}
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
                    <feColorMatrix values="0 0 0 0 0.741176 0 0 0 0 0.741176 0 0 0 0 0.741176 0 0 0 1 0" />
                    <feBlend
                        in2="effect1_innerShadow"
                        result="effect2_innerShadow"
                    />
                    <feColorMatrix
                        in="SourceAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dx={-7} dy={-11} />
                    <feGaussianBlur stdDeviation={5} />
                    <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2={-1}
                        k3={1}
                    />
                    <feColorMatrix values="0 0 0 0 0.756863 0 0 0 0 0.756863 0 0 0 0 0.756863 0 0 0 1 0" />
                    <feBlend
                        in2="effect2_innerShadow"
                        result="effect3_innerShadow"
                    />
                </filter>
            </defs>
        </svg>
    );
}

export default SvgMostlyCloudy;
