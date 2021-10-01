import * as React from "react";

function SvgMist(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 150 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g filter="url(#mist_svg__filter0_dd)">
                <g filter="url(#mist_svg__filter1_iii)">
                    <path
                        d="M97.974 83.314c5.897 3.169 23.954 4.136 27.605 3.502 3.686-.667 7.438-3.068 8.041-3.902 1.541-2.168 2.311-4.803 2.378-6.837.101-4.837-4.69-10.94-11.089-9.94-2.278.367-4.02 2.002-7.47 3.47-.804.333-1.575.566-2.379.333-1.675-.5-7.27-4.87-9.28-4.47-4.054.8-9.012 1.368-10.754 1.001-3.752-.767-6.365-1.367-10.084-2.001-1.507-.267-9.28-2.068-14.07 3.769-4.289 5.203-.603 12.974 4.958 16.076 5.963 3.368 16.248-4.136 22.144-1z"
                        fill="#C4C4C4"
                        fillOpacity={0.42}
                    />
                </g>
            </g>
            <g filter="url(#mist_svg__filter2_dd)">
                <g filter="url(#mist_svg__filter3_iiiiii)">
                    <path
                        d="M40.105 87.174c-7.21-.982-10.53.614-12.231 2.291-1.013 1.023-1.944 2.577-4.09 3.19-2.188.656-3.24-.408-4.982.45-1.863.942-3.16 3.315-2.714 5.033.284 1.022.972 1.063 2.714 2.741 2.713 2.577 2.308 3.641 3.604 4.131 2.633.982 4.698-3.068 7.695-2.29 1.742.45 1.499 1.922 4.09 4.131 2.269 1.923 6.278 4.05 8.627 2.741 1.337-.736.85-1.922 2.714-3.641 1.741-1.636 3.726-2.127 4.536-2.291 1.741-.409 3.037-.163 7.695.9 6.844 1.596 6.804 1.76 8.14 1.841 3.686.164 4.131-1.022 8.14-1.391 5.752-.531 6.319 1.8 11.34 1.391 4.496-.368 10.085-2.741 11.34-6.872.568-1.923.284-4.418-.89-5.032-1.458-.777-3.24 2.045-5.427 1.39-1.66-.49-1.296-2.29-3.605-4.131-.243-.205-2.51-1.923-5.427-1.841-2.065.082-2.632.94-5.427 1.84 0 0-2.39.737-5.872.9-7.493.328-11.3-8.835-19.035-9.613-2.35-.204-6.035.205-10.935 4.132z"
                        fill="#C4C4C4"
                        fillOpacity={0.43}
                    />
                </g>
            </g>
            <g filter="url(#mist_svg__filter4_dd)">
                <g filter="url(#mist_svg__filter5_iii)">
                    <path
                        d="M109.55 42.562c-16.308-1.154-18.306-4.342-23.544-1.704-4.86 2.419-7.128 7.201-8.964 6.267-1.026-.495-1.188-2.419-1.134-4.013C70.94 39.704 67.322 38 59.708 38c-2.916 0-6.804 0-10.638 2.254-4.482 2.693-4.59 5.936-7.83 7.42-2.646 1.21-7.128 1.21-15.12-4.562-1.836-1.374-6.156-4.288-11.772-3.958a14.733 14.733 0 00-3.348.55c1.026 1.21 3.24 11.104 5.616 13.137 6.048 5.167 8.586.605 16.254 4.563 10.098 5.222 14.58 5.112 20.736 6.266 10.746 1.98 8.1-5.167 22.41-5.112 11.232.055 12.42 4.837 23.544 3.408 3.132-.385 11.934-1.649 16.794-8.575.432-.66 3.942-5.552 2.214-8.575-1.188-1.979-4.05-1.924-9.018-2.254z"
                        fill="#C4C4C4"
                        fillOpacity={0.54}
                    />
                </g>
            </g>
            <defs>
                <filter
                    id="mist_svg__filter0_dd"
                    x={59}
                    y={62}
                    width={87}
                    height={43}
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
                    id="mist_svg__filter1_iii"
                    x={62}
                    y={54}
                    width={79}
                    height={37}
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
                <filter
                    id="mist_svg__filter2_dd"
                    x={6}
                    y={81}
                    width={101.006}
                    height={46.996}
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
                    id="mist_svg__filter3_iiiiii"
                    x={9}
                    y={73}
                    width={93.006}
                    height={40.996}
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
                    <feBlend
                        in2="effect3_innerShadow"
                        result="effect4_innerShadow"
                    />
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
                        in2="effect4_innerShadow"
                        result="effect5_innerShadow"
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
                        in2="effect5_innerShadow"
                        result="effect6_innerShadow"
                    />
                </filter>
                <filter
                    id="mist_svg__filter4_dd"
                    x={1}
                    y={36}
                    width={128.043}
                    height={46.017}
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
                    id="mist_svg__filter5_iii"
                    x={4}
                    y={28}
                    width={120.043}
                    height={40.017}
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

export default SvgMist;
