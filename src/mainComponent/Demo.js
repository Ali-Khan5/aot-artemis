import React from "react";
import SpaceBG from "./Images/space.svg";
import SunBG from "./Images/Sun.svg";
import VenusBG from "./Images/Venus.svg";
import MurBG from "./Images/Mercury.svg";
import EarthBG from "./Images/Earth.svg";
import ISSBG from "./Images/ISS.svg";
import MoonBg from "./Images/Moon.svg";
import MarsBG from "./Images/Mars.svg";
import Jupiter from "./Images/Jupiter.svg";
import Saturno from "./Images/Saturno.svg";
import { motion } from "framer-motion";

const userDrivenVarient = {
  visible: {
    y: [+60, +60, +60, +60],
    x: [+70, +70, +70, +70],
    scale: [1, 1.5, 2, 2.5],
    transition: { duration: 10, type: "tween", times: [0, 0.3, 0.6, 0.9] }
  }
};
const IssonlyVarient = {
  moving: {
    scale: [1, 1.5, 2, 2],
    x: ["0vh", "-5vh", "-10vh", "-10vh"],
    rotate: -25,
    y: ["0vh", "15vh", "15vh", "5vh"],
    transition: {
      duration: 10,
      type: "tween",
      times: [0, 0.3, 0.6, 0.9]
    }
  }
};
const moonVarient = {
  visible: {
    x: ["10vh", "15vh", "20vh", "30vh"],
    scale: [1, 1.5, 2, 2.2],
    transition: { duration: 10, type: "tween", times: [0, 0.3, 0.6, 0.9] }
  }
};
const TextVarient = {
  initial: {
    y: -120
  }
};

const LeftVarient = {
  visible: {
    scale: 2,
    opacity: 0,
    x: "-100%",
    transition: {
      duration: 4.2
    }
  }
};
const RightVarient = {
  visible: {
    opacity: 0,
    scale: 1.5,
    x: "+100%",
    transition: {
      duration: 3.2
    }
  }
};
const marsVarient = {
  visible: {
    x: 40,
    transition: { duration: 10, type: "tween" }
  },
  motion: {
    scale: [1, 2, 2.5, 2.8],
    x: ["05vh", "+30vh", "+55vh", "+95vh"],
    transition: { duration: 15, type: "tween", times: [0, 0.2, 0.4, 0.7] }
  }
};

const mercuryVarient = {
  visible: {
    x: 0,
    transition: { duration: 10, type: "tween" }
  },
  motion: {
    scale: [1, 1.5, 2, 2],
    x: ["0vh", "-25vh", "-38vh", "-65vh"],
    transition: { duration: 15, type: "tween", times: [0, 0.2, 0.4, 0.7] }
  }
};
const venusVarient = {
  visible: {
    x: 0,
    transition: { duration: 10, type: "tween" }
  },
  motion: {
    scale: [1, 1.6, 2, 2],
    x: ["0vh", "-15vh", "-25vh", "-65vh"],
    transition: { duration: 15, type: "tween", times: [0, 0.2, 0.4, 0.7] }
  }
};
const redcircleVarient = {
  visible: {
    opacity: 0
  },
  motion: {
    opacity: 1,

    transition: { duration: 2, delay: 10.5 }
  }
};

function Demo() {
 
  // const [spaceSentence, setspaceSentence] = useState(
  //   "Models are calculating any issues on ISS in real time…"
  // );

  
  // let arr = [
  //   "Detected malfunction on Solar panel 4-A",
  //   "Evaluating damages, intensity and root cause… Shortlisting SOPs to resolve issue"
  // ];
  return (
    <div
      style={{
        backgroundImage: `url(${SpaceBG})`,
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        height: "100vh",
        overflowX: "hidden"
      }}
    >
      <div className="container-fluid">
        <div className="row" style={{ paddingTop: "10vh" }}>
          {/* sun Div */}
          <motion.div className="col-2">
            <motion.img
              src={SunBG}
              height="350vh"
              variants={LeftVarient}
              animate="visible"
            />
          </motion.div>
          {/* sun Div ends */}

          {/* Mercury div */}
          <motion.div className="col-1">
            <motion.img
              src={MurBG}
              style={{ marginTop: "25vh" }}
              variants={mercuryVarient}
              animate="motion"
            />
          </motion.div>
          {/* Murcury Div Ends */}

          {/* Venus Div */}
          <motion.div className="col-1" style={{ margin: "0px 0vh" }}>
            <motion.img
              src={VenusBG}
              style={{ marginTop: "20vh" }}
              variants={venusVarient}
              animate="motion"
            />
          </motion.div>
          {/* Venus Div Ends */}
          {/* Earth div start */}
          <div className="col-2" style={{ margin: "0px 0vh" }}>
            <motion.img
              src={ISSBG}
              style={{
                left: "10vh",
                top: "10vh",
                // top: `${isOpen ?"10vh" : "0vh" }`,
                // left: `${isOpen ?"10vh" : "-5vh" }`,
                padding: "0",
                position: "absolute",
                transform: "rotate(40deg)"
              }}
              variants={IssonlyVarient}
              animate="moving"
            />
            <motion.div
              style={{
                position: "absolute",
                width: "180px",
                height: "180px",
                borderRadius: "100px",
                border: "3px red dotted",
                left: "-70px",
                top: "90px"
              }}
              variants={redcircleVarient}
              initial="visible"
              animate="motion"
            ></motion.div>

            <motion.img
              src={MoonBg}
              style={{
                marginLeft: "25vh",
                marginTop: "15vh",
                // top: "10vh",
                // left: "30vh",
                padding: "0",
                position: "absolute"
              }}
              variants={moonVarient}
              animate="visible"
            />
            <motion.div
              style={{
                // cursor: "pointer",
                // border: "2px solid red",
                marginLeft: "10vh",
                marginTop: "15vh",
                padding: "0px 0px"
              }}

              //
            >
              <motion.img
                src={EarthBG}
                style={{
                  cursor: "pointer"
                  // border: "2px solid green"
                }}
                variants={userDrivenVarient}
                animate="visible"
              />
            </motion.div>
          </div>
          {/* Earth Div ends */}

          <motion.div className="col-1">
            <motion.img
              src={MarsBG}
              style={{ marginTop: "25vh" }}
              variants={marsVarient}
              animate="motion"
            />
          </motion.div>
          <motion.div className="col-2" style={{ marginLeft: "0" }}>
            <motion.img
              src={Jupiter}
              style={{ marginTop: "25vh", height: "38vh" }}
              variants={RightVarient}
              animate="visible"
            />
          </motion.div>
          <motion.div className="col-2">
            <motion.img
              src={Saturno}
              style={{ marginTop: "15vh", height: "33vh" }}
              variants={RightVarient}
              animate="visible"
            />{" "}
            />
          </motion.div>
        </div>
        <div className="row">
          <div className="col text-center">
            <h2
              className="text-white"
              variants={TextVarient}
              initial="initial"
              animate="motion"
              style={{ padding: "0px 55vh" }}
            >
              "Models are calculating any issues on ISS in real time…"
            </h2>
            {/* {helpingtext()} */}
            {/* <motion.h2
              className="text-white"
              variants={TextVarient}
              initial="initial"
              style={{ padding: "0px 55vh" }}
            >
             Detected malfunction on Solar panel 4-A
            </motion.h2> */}

            {/* <motion.h2
              className="text-white"
              variants={TextVarient}
              initial="initial"
              style={{ padding: "0px 55vh" }}
            >
           Evaluating damages, intensity and root cause… Shortlisting SOPs to resolve issue
            </motion.h2> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Demo;
