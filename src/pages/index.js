import { useEffect, useState } from "react";
import { Button, Checkbox, TextField } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import Image from "next/image";
import backgroundImg from "../../public/bg.png"
import backgroundImg2 from "../../public/bg-2.png"
import Link from "next/link";

// #region unreal render imports

const checkedIcon = (
  <svg
    width="36"
    height="37"
    viewBox="0 0 36 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 15.2656L18 18.2656L28 8.26562"
      stroke="#7A43C8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g filter="url(#filter0_d_612_4178)">
      <path
        d="M27 16.2656V23.2656C27 23.7961 26.7893 24.3048 26.4142 24.6798C26.0391 25.0549 25.5304 25.2656 25 25.2656H11C10.4696 25.2656 9.96086 25.0549 9.58579 24.6798C9.21071 24.3048 9 23.7961 9 23.2656V9.26562C9 8.73519 9.21071 8.22648 9.58579 7.85141C9.96086 7.47634 10.4696 7.26562 11 7.26562H22"
        stroke="#8654CE"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        shapeRendering="crispEdges"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_612_4178"
        x="0"
        y="0.265625"
        width="36"
        height="36"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="2" />
        <feGaussianBlur stdDeviation="4" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.533333 0 0 0 0 0.333333 0 0 0 0 0.807843 0 0 0 0.6 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_612_4178"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_612_4178"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

function Home() {
  const [terms_accepted, set_terms_accepted] = useState(false);

  const [step, setStep] = useState(1);

  const [enabelStep4, setEnableStep4] = useState(false);
  const [enabelStep5, setEnableStep5] = useState(false);

  const [languages, setLanguages] = useState([
    { label: "English", value: "ën", checked: false },
    { label: "Hindi", value: "hind", checked: false },
    { label: "Telugu", value: "hind", checked: false },
    { label: "Tamil", value: "hind", checked: false },
    { label: "English", value: "ën", checked: false },
    { label: "Hindi", value: "hind", checked: false },
    { label: "Telugu", value: "hind", checked: false },
    { label: "Tamil", value: "hind", checked: false },
    { label: "English", value: "ën", checked: false },
    { label: "Hindi", value: "hind", checked: false },
    { label: "Telugu", value: "hind", checked: false },
    { label: "Tamil", value: "hind", checked: false },
  ]);

  const onLangselect = (index) => {
    console.log(index);
    const temp = [...languages]?.map((o, ind) => {
      if (ind === index) {
        o.checked = !o?.checked;
      }
      return o;
    });
    setEnableStep4(
      temp?.filter((o) => o?.checked == true)?.length ? true : false
    );
    setLanguages(() => [...temp]);
    console.log(temp);
  };

  const [btnOpts, setBtnOpts] = useState([
    { label: "Almost never", value: "ën", checked: false },
    { label: "Few-days", value: "hind", checked: false },
    { label: "Sometimes ", value: "hind", checked: false },
    { label: "Almost everyday", value: "hind", checked: false },
    { label: "Multiple times everydays ", value: "hind", checked: false },
  ]);

  const onBtnselect = (index) => {
    console.log(index);
    const temp = [...btnOpts]?.map((o, ind) => {
      if (ind === index) {
        o.checked = !o?.checked;
      }
      return o;
    });
    setEnableStep5(
      temp?.filter((o) => o?.checked == true)?.length ? true : false
    );
    setBtnOpts(() => [...temp]);
    console.log(temp);
  };

  return (
    <div className="w-full ">
      <div className="fixed z-0  w-[100vw] h-[100vh]">
        <Image
          src={step < 5 ? backgroundImg : backgroundImg2}
          alt="Img"
          className="w-[100vw] h-[100vh]"
        />
        {/* <iframe
          src="http://35.183.155.167/"
          style={{ width: "100vw", height: "100vh", zIndex: -1 }}
          title="W3Schools Free Online Web Tutorials"
        ></iframe> */}
      </div>
      <div className="absolute w-full h-full z-10">
        <div className="relative h-full w-full flex flex-col justify-center  ">
          <div className="absolute top-0 font-bold text-white flex justify-between w-full p-4">
            <div className="  rounded-full">
              {step > 1 ? (
                <ChevronLeftIcon
                  fontSize="large"
                  style={{ background: "#534F4F", borderRadius: "50%" }}
                  onClick={() => {
                    if (step > 1) {
                      setStep((prev) => prev - 1);
                    }
                  }}
                />
              ) : (
                <></>
              )}
            </div>
            <div className="  rounded-full">
              {(step === 3 && enabelStep4) || (step === 4 && enabelStep5) ? (
                <ChevronRightIcon
                  fontSize="large"
                  style={{
                    background:
                      "linear-gradient(197deg, #F17CD0 -51.02%, #6749CD 88.98%)",
                    borderRadius: "50%",
                  }}
                  onClick={() => {
                    setStep((prev) => prev + 1)
                  }}
                />
              ) : (
                // <Link href="/chat">
                //   <ChevronRightIcon
                //     fontSize="large"
                //     style={{
                //       background:
                //         "linear-gradient(197deg, #F17CD0 -51.02%, #6749CD 88.98%)",
                //       borderRadius: "50%",
                //     }}
                //     onClick={() => {
                //       setStep((prev) => prev + 1)
                //     }}
                //   />
                // </Link>
                <></>
              )}
            </div>
          </div>
          <div className={step < 5 ? "w-full h-[150px] justify-self-center self-center grid items-center justify-center px-4" : "justify-self-start px-2"}>
            <div
              className={step < 5 ? "p-4 rounded-xl grid gap-4 min-w-[90vw] shadow-xl" : ""}
              style={step < 5 ? {
                background: "rgba(255,255,255,0.2)",
                backdropFilter: "blur(30px)",

              } :
                { background: '' }}
            >
              {step === 1 ? (
                <>
                  <div className="text-[14px] flex items-center gap-1   ">
                    <div>
                      <Checkbox
                        size="small"
                        style={{ padding: 0 }}
                        color="secondary"
                        value={terms_accepted}
                        onChange={(e, value) => {
                          set_terms_accepted(value);
                        }}
                      />
                    </div>

                    <div className="text-[14px] text-black font-medium">
                      I have read the terms and conditions
                    </div>
                  </div>
                  <div>
                    <Button
                      variant="contained"
                      style={{
                        borderRadius: "20px",
                        minWidth: "150px",
                        fontFamily: "Poppins",
                        fontWeight: "400",
                        background: terms_accepted
                          ? "linear-gradient(197deg, #F17CD0 -51.02%, #6749CD 88.98%)"
                          : "",
                        filter:
                          "drop-shadow(0px 8px 16px rgba(241, 124, 208, 0.10))",
                        textTransform: "none !important",
                      }}
                      disabled={!terms_accepted}
                      onClick={() => {
                        setStep(2);
                      }}
                    >
                      Log In
                    </Button>
                  </div>
                </>
              ) : step === 2 ? (
                <>
                  <div className=" flex items-center gap-2 flex justify-center ">
                    <div className="text-[22px] text-black w-ful ">Name</div>
                  </div>
                  <div>
                    <TextField
                      variant="standard"
                      type="text"
                      fullWidth
                      sx={{
                        textAlign: "left",
                      }}
                      InputProps={{
                        style: {
                          fontSize: "24px",
                          borderRadius: "35px",
                          padding: "0 0 0 10px",
                          border: "2px solid rgba(0,0,0,0.2)",
                          borderRight: "none",
                          // height:"70px
                        },
                        disableUnderline: true,
                        endAdornment: (
                          <div
                            id="login_verify_otp"
                            style={{
                              height: "50px",
                              width: "62px",
                              background:
                                "linear-gradient(197deg, #F17CD0 -51.02%, #6749CD 88.98%)",
                              borderRadius: "25px",
                            }}
                            className="flex items-center justify-center text-white"
                            onClick={() => {
                              setStep(3);
                            }}
                          >
                            <ArrowForwardOutlinedIcon size="small" />
                          </div>
                        ),
                      }}
                    />
                  </div>
                </>
              ) : step === 3 ? (
                <>
                  <div className="">
                    <div className="text-[18px] text-black w-full">
                      Lorem ipsum dolor sit amet, consectetur Vestibulum quis
                      nulla sit amet purus commodo
                    </div>
                    <div className=" text-[22px] text-black font-medium w-full ">
                      Select Language
                    </div>
                  </div>
                  <div>
                    <div className="grid gap-4 max-h-[35vh] overflow-y-scroll px-2">
                      {languages &&
                        languages?.map((item, index) => {
                          return (
                            <div
                              key={index}
                              className="flex justify-between items-center pb-2 border-b border-[#00000050] "
                              onClick={() => {
                                onLangselect(index);
                              }}
                            >
                              <div
                                style={{
                                  color: "#000",
                                  fontFeatureSettings: "clig off, 'liga' off",
                                  fontFamily: "Poppins",
                                  fontSize: "16px",
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  lineHeight: "normal",
                                  letterSpacing: "0.025px",
                                }}
                              >
                                {item?.label}
                              </div>
                              <div>{item?.checked ? checkedIcon : ""}</div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </>
              ) : step === 4 ? (
                <>
                  <div className=" flex items-center gap-2 flex justify-center ">
                    <div className="text-[18px] text-black w-full ">
                      Lorem ipsum dolor sit amet, consectetur Vestibulum quis
                      nulla sit amet purus commodo
                    </div>
                  </div>
                  <div>
                    <div className="grid gap-2">
                      {btnOpts?.map((o, index) => {
                        return (
                          <div
                            key={index}
                            style={{
                              borderRadius: "20px",
                              minWidth: "150px",
                              fontFamily: "Poppins",
                              fontWeight: o?.checked ? "500" : "400",
                              color: o?.checked ? "White" : "#2D2D2D",
                              background: o?.checked
                                ? "linear-gradient(197deg, #F17CD0 -51.02%, #6749CD 88.98%)"
                                : "",
                              filter:
                                "drop-shadow(0px 8px 16px rgba(241, 124, 208, 0.10))",
                              outline: "2px solid #00000016",
                              textTransform: "none !important",
                            }}
                            className="p-2 shadow"
                            onClick={() => {
                              onBtnselect(index);
                            }}
                          >
                            {o?.label}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </>
              ) : step === 5 ? (
                <>
                  <div>
                    <div className="absolute top-[10%] right-4">
                      <img className="" src="images/userImage.png" />
                    </div>
                    <div className="absolute bottom-[15%]">
                      <div className="flex flex-col gap-1 items-start justify-end w-[80%]">
                        <div className="flex items-center rounded-3xl bg-[#0000004D] p-1 text-[#FFFFFFAB]">
                          <img src="images/stellaChat.png" alt="" /> &nbsp; Stella : Hey :)
                        </div>
                        <div className="flex items-center rounded-3xl bg-[#0000004D] p-1 text-[#FFFFFFAB]">
                          <img src="images/userChat.png" alt="" /> &nbsp; Floyd Miles : Hey, Whats up
                        </div>
                        <div className="flex items-center rounded-3xl bg-[#0000004D] p-1 text-[#FFFFFFAB]">
                          <img src="images/stellaChat.png" alt="" /> &nbsp; Stella: I am good what about you
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-4">
                      <div className="rounded-[44px] bg-[#FFFFFFCC] flex justify-evenly items-center w-[360px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                          <path d="M33 39C36.527 37.453 38.999 34.091 38.999 30C38.999 25.909 36.527 22.547 33 21V23C35.387 24.386 36.999 27.047 36.999 30C36.999 32.953 35.387 35.614 33 37V39Z" fill="#9158CE" />
                          <path d="M33 24.9998V34.9998C34.225 33.8998 35 31.7708 35 29.9998C35 28.2288 34.225 26.0998 33 24.9998ZM21 34.9998H23.697L31 39.8678V20.1318L23.697 24.9998H21C19.897 24.9998 19 25.8968 19 26.9998V32.9998C19 34.1028 19.897 34.9998 21 34.9998Z" fill="#9158CE" />
                        </svg>
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M30 34C32.206 34 34 32.206 34 30V24C34 21.783 32.215 19.979 30.021 19.979C29.9506 19.9794 29.8805 19.9878 29.812 20.004C28.7853 20.0538 27.8169 20.4964 27.1074 21.2402C26.3978 21.984 26.0014 22.972 26 24V30C26 32.206 27.794 34 30 34Z" fill="#9158CE" />
                          <path d="M29 37.931V40H31V37.931C34.939 37.436 38 34.073 38 30H36C36 33.309 33.309 36 30 36C26.691 36 24 33.309 24 30H22C22 34.072 25.061 37.436 29 37.931Z" fill="#9158CE" />
                        </svg>
                        <svg width="82" height="82" viewBox="0 0 82 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g filter="url(#filter0_d_612_4495)">
                            <circle cx="41" cy="33" r="25" fill="url(#paint0_linear_612_4495)" />
                          </g>
                          <rect x="33" y="28.1997" width="3.2" height="9.6" rx="1.6" fill="white" fill-opacity="0.3" />
                          <rect x="39.3994" y="21" width="3.2" height="24" rx="1.6" fill="white" />
                          <rect x="45.7988" y="25" width="3.2" height="16" rx="1.6" fill="white" />
                          <defs>
                            <filter id="filter0_d_612_4495" x="0" y="0" width="82" height="82" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                              <feFlood flood-opacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                              <feOffset dy="8" />
                              <feGaussianBlur stdDeviation="8" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix type="matrix" values="0 0 0 0 0.945098 0 0 0 0 0.486275 0 0 0 0 0.815686 0 0 0 0.1 0" />
                              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_612_4495" />
                              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_612_4495" result="shape" />
                            </filter>
                            <linearGradient id="paint0_linear_612_4495" x1="52.1111" y1="-29.5" x2="26.6844" y2="54.0668" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#F17CD0" />
                              <stop offset="1" stop-color="#6749CD" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                          <path d="M35 25C35 23.897 34.103 23 33 23H21C19.897 23 19 23.897 19 25V35C19 36.103 19.897 37 21 37H33C34.103 37 35 36.103 35 35V31.667L39 35V25L35 28.333V25Z" fill="#9158CE" />
                        </svg>
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M38 20H22C20.897 20 20 20.894 20 21.992V34.009C20 35.106 20.897 36 22 36H25V40L31.351 36H38C39.103 36 40 35.106 40 34.008V21.992C39.9984 21.4628 39.7869 20.9558 39.412 20.5824C39.037 20.2089 38.5292 19.9995 38 20ZM29 28C29 28.3956 28.8827 28.7822 28.6629 29.1111C28.4432 29.44 28.1308 29.6964 27.7654 29.8478C27.3999 29.9991 26.9978 30.0387 26.6098 29.9616C26.2219 29.8844 25.8655 29.6939 25.5858 29.4142C25.3061 29.1345 25.1156 28.7781 25.0384 28.3902C24.9613 28.0022 25.0009 27.6001 25.1522 27.2346C25.3036 26.8692 25.56 26.5568 25.8889 26.3371C26.2178 26.1173 26.6044 26 27 26C27.086 26 27.167 26.015 27.25 26.025C27.332 26.011 27.414 26 27.5 26C27.8978 26 28.2794 26.158 28.5607 26.4393C28.842 26.7206 29 27.1022 29 27.5C29 27.586 28.988 27.668 28.975 27.75C28.985 27.833 29 27.915 29 28ZM33 30C32.4696 30 31.9609 29.7893 31.5858 29.4142C31.2107 29.0391 31 28.5304 31 28C31 27.914 31.015 27.833 31.025 27.75C31.0101 27.6675 31.0017 27.5839 31 27.5C31 27.1022 31.158 26.7206 31.4393 26.4393C31.7206 26.158 32.1022 26 32.5 26C32.586 26 32.668 26.011 32.75 26.025C32.833 26.015 32.914 26 33 26C33.5304 26 34.0391 26.2107 34.4142 26.5858C34.7893 26.9609 35 27.4696 35 28C35 28.5304 34.7893 29.0391 34.4142 29.4142C34.0391 29.7893 33.5304 30 33 30Z" fill="#9158CE" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && isOpen) {
        // Scrolling down and offcanvas is open, close the offcanvas
        setIsOpen(false);
      }
    };


    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  const toggleOffcanvas = () => {
    setIsOpen(!isOpen);
  };


  const items = [
    {
      src: 'images/ques.png',
      name: 'Help'
    },
    {
      src: 'images/flower.png',
      name: 'Well-being'
    },
    {
      src: 'images/coaching.png',
      name: 'Coaching'
    },
    {
      src: 'images/ques.png',
      name: 'Help'
    }, {
      src: 'images/flower.png',
      name: 'Well-being'
    }

  ]


  const newData = [{
    src: 'images/bkt.png',
    srcName: 'Avatar Setting'
  },
  {
    src: 'images/earth.png',
    srcName: 'Languages'
  },
  {
    src: 'images/theme.png',
    srcName: 'Theme Setting'
  },
  {
    src: 'images/ques.png',
    srcName: 'Help'
  }
  ]


  return (
    <div>
      <button className='border rounded-3xl w-[30%] py-1 bg-gray-300' onClick={toggleOffcanvas}></button>
      <div
        className={`dropDownImage fixed bottom-0 left-0 right-0 bg-white transform ${isOpen ? 'translate-y-0' : 'translate-y-full'
          } transition-transform duration-300 ease-in-out`}
      >
        <button className='border rounded-3xl w-[20%] py-1 bg-white' onClick={toggleOffcanvas}></button>
        <div className='flex mt-5  gap-4 w-[100%] overflow-x-scroll' >
          {items.map((data) =>
            <div className='bgcolor border h-[99px] border-none rounded-2xl min-w-[130px]' >
              <img className='m-3 ml-10' src={data.src} />
              <p className='boxText'>{data.name}</p>
            </div>
          )}
        </div>
        <div className='mt-6'>
          <hr></hr>
          <div className='py-2 flex  w-[100%] h-[100%]  '>
            <div className='w-[50%] flex justify-evenly gap-2'>
              <img src='images/stella.png' />
              <div className='ml-5'>
                <p className=' font-bold text-white text-lg font-sans -ml-5'>Stella Smith</p>
                <p className='text-[#F8F8F8] text-sm font-medium font-sans -ml-16'>Female</p>
              </div>
            </div>
            <img className='w-[5%] h-[30%] ml-36 mt-5' src='images/pencil.png' />
          </div>
          <hr></hr>
        </div>
        <div className='flex flex-wrap justify-evenly '>
          {newData.map((newItems) =>
            <div className='bgcolor border rounded-xl border-none w-[40%] mt-5 h-12 flex justify-evenly items-center ' >
              <img src={newItems.src} />
              <a href='#'> <p className='boxText'>{newItems.srcName}</p></a>
            </div>
          )}
        </div>

      </div>

    </div>
  )
}