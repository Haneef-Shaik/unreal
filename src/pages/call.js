import React from "react";
import bgImg from "../../public/bg-2.png"
import Image from "next/image";

export default function Call() {
  return <div className="w-[100vw] h-[100vh] "  >
   <div className="absolute -z-10 w-[100vw] h-[100vh]">
        <Image
        alt="#"
            src="/bg-2.png"
            layout="fill"
            objectFit="cover"
            quality={100}
        />
    </div>
<div className="" >
                    <div className="absolute top-[10%] right-4 p-2 ">
                      <Image className=""
        alt="#"

                        width={100}
                        height={150}
                        objectFit="cover"
                        quality={100}
                       src="/images/userImage.png" />
                    </div>
                    <div className="absolute bottom-[15%] p-2">
                      <div className="flex flex-col gap-1 items-start justify-end w-[80%]">
                        <div className="flex items-center rounded-3xl bg-[#0000004D] p-1 text-[#FFFFFFAB]">
                          <img src="images/stellaChat.png" alt="" /> &nbsp;
                          Stella : Hey :)
                        </div>
                        <div className="flex items-center rounded-3xl bg-[#0000004D] p-1 text-[#FFFFFFAB]">
                          <img src="images/userChat.png" alt="" /> &nbsp; Floyd
                          Miles : Hey, Whats up
                        </div>
                        <div className="flex items-center rounded-3xl bg-[#0000004D] p-1 text-[#FFFFFFAB]">
                          <img src="images/stellaChat.png" alt="" /> &nbsp;
                          Stella: I am good what about you
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-4 w-full p-2">
                      <div className="rounded-[44px] bg-[#FFFFFFCC] flex justify-evenly items-center w-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="60"
                          height="60"
                          viewBox="0 0 60 60"
                          fill="none"
                        >
                          <path
                            d="M33 39C36.527 37.453 38.999 34.091 38.999 30C38.999 25.909 36.527 22.547 33 21V23C35.387 24.386 36.999 27.047 36.999 30C36.999 32.953 35.387 35.614 33 37V39Z"
                            fill="#9158CE"
                          />
                          <path
                            d="M33 24.9998V34.9998C34.225 33.8998 35 31.7708 35 29.9998C35 28.2288 34.225 26.0998 33 24.9998ZM21 34.9998H23.697L31 39.8678V20.1318L23.697 24.9998H21C19.897 24.9998 19 25.8968 19 26.9998V32.9998C19 34.1028 19.897 34.9998 21 34.9998Z"
                            fill="#9158CE"
                          />
                        </svg>
                        <svg
                          width="60"
                          height="60"
                          viewBox="0 0 60 60"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M30 34C32.206 34 34 32.206 34 30V24C34 21.783 32.215 19.979 30.021 19.979C29.9506 19.9794 29.8805 19.9878 29.812 20.004C28.7853 20.0538 27.8169 20.4964 27.1074 21.2402C26.3978 21.984 26.0014 22.972 26 24V30C26 32.206 27.794 34 30 34Z"
                            fill="#9158CE"
                          />
                          <path
                            d="M29 37.931V40H31V37.931C34.939 37.436 38 34.073 38 30H36C36 33.309 33.309 36 30 36C26.691 36 24 33.309 24 30H22C22 34.072 25.061 37.436 29 37.931Z"
                            fill="#9158CE"
                          />
                        </svg>
                        <svg
                          width="82"
                          height="82"
                          viewBox="0 0 82 67"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g filter="url(#filter0_d_612_4495)">
                            <circle
                              cx="41"
                              cy="33"
                              r="25"
                              fill="url(#paint0_linear_612_4495)"
                            />
                          </g>
                          <rect
                            x="33"
                            y="28.1997"
                            width="3.2"
                            height="9.6"
                            rx="1.6"
                            fill="white"
                            fill-opacity="0.3"
                          />
                          <rect
                            x="39.3994"
                            y="21"
                            width="3.2"
                            height="24"
                            rx="1.6"
                            fill="white"
                          />
                          <rect
                            x="45.7988"
                            y="25"
                            width="3.2"
                            height="16"
                            rx="1.6"
                            fill="white"
                          />
                          <defs>
                            <filter
                              id="filter0_d_612_4495"
                              x="0"
                              y="0"
                              width="82"
                              height="82"
                              filterUnits="userSpaceOnUse"
                              color-interpolation-filters="sRGB"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              />
                              <feOffset dy="8" />
                              <feGaussianBlur stdDeviation="8" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.945098 0 0 0 0 0.486275 0 0 0 0 0.815686 0 0 0 0.1 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_612_4495"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_612_4495"
                                result="shape"
                              />
                            </filter>
                            <linearGradient
                              id="paint0_linear_612_4495"
                              x1="52.1111"
                              y1="-29.5"
                              x2="26.6844"
                              y2="54.0668"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#F17CD0" />
                              <stop offset="1" stop-color="#6749CD" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="60"
                          height="60"
                          viewBox="0 0 60 60"
                          fill="none"
                        >
                          <path
                            d="M35 25C35 23.897 34.103 23 33 23H21C19.897 23 19 23.897 19 25V35C19 36.103 19.897 37 21 37H33C34.103 37 35 36.103 35 35V31.667L39 35V25L35 28.333V25Z"
                            fill="#9158CE"
                          />
                        </svg>
                        <svg
                          width="60"
                          height="60"
                          viewBox="0 0 60 60"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M38 20H22C20.897 20 20 20.894 20 21.992V34.009C20 35.106 20.897 36 22 36H25V40L31.351 36H38C39.103 36 40 35.106 40 34.008V21.992C39.9984 21.4628 39.7869 20.9558 39.412 20.5824C39.037 20.2089 38.5292 19.9995 38 20ZM29 28C29 28.3956 28.8827 28.7822 28.6629 29.1111C28.4432 29.44 28.1308 29.6964 27.7654 29.8478C27.3999 29.9991 26.9978 30.0387 26.6098 29.9616C26.2219 29.8844 25.8655 29.6939 25.5858 29.4142C25.3061 29.1345 25.1156 28.7781 25.0384 28.3902C24.9613 28.0022 25.0009 27.6001 25.1522 27.2346C25.3036 26.8692 25.56 26.5568 25.8889 26.3371C26.2178 26.1173 26.6044 26 27 26C27.086 26 27.167 26.015 27.25 26.025C27.332 26.011 27.414 26 27.5 26C27.8978 26 28.2794 26.158 28.5607 26.4393C28.842 26.7206 29 27.1022 29 27.5C29 27.586 28.988 27.668 28.975 27.75C28.985 27.833 29 27.915 29 28ZM33 30C32.4696 30 31.9609 29.7893 31.5858 29.4142C31.2107 29.0391 31 28.5304 31 28C31 27.914 31.015 27.833 31.025 27.75C31.0101 27.6675 31.0017 27.5839 31 27.5C31 27.1022 31.158 26.7206 31.4393 26.4393C31.7206 26.158 32.1022 26 32.5 26C32.586 26 32.668 26.011 32.75 26.025C32.833 26.015 32.914 26 33 26C33.5304 26 34.0391 26.2107 34.4142 26.5858C34.7893 26.9609 35 27.4696 35 28C35 28.5304 34.7893 29.0391 34.4142 29.4142C34.0391 29.7893 33.5304 30 33 30Z"
                            fill="#9158CE"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

  </div>;
}
