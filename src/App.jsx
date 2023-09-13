import { useEffect, useState } from "react";
import "./App.css";
import { Button, Checkbox, TextField } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

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

function App() {
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
        {/*<video
          src="https://player.vimeo.com/external/579557350.hd.mp4?s=ed14dd0c04cfe3e554f0a04db98c85d337d8cdcc&profile_id=174&oauth2_token_id=57447761"
          muted
          loop
          autoPlay
        />*/}
        <iframe
          src="http://35.183.155.167/"
          style={{ width: "100vw", height: "100vh", zIndex: -1 }}
          title="W3Schools Free Online Web Tutorials"
        ></iframe>
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
                  onClick={() => setStep((prev) => prev + 1)}
                />
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="w-full h-[150px] justify-self-center self-center grid items-center justify-center px-4">
            <div
              className="p-4 rounded-xl grid gap-4 min-w-[90vw] shadow-xl"
              style={{
                background: "rgba(255,255,255,0.2)",
                backdropFilter: "blur(30px)",
              }}
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
                              color: o?.checked ? "White" : "",
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

export default App;
