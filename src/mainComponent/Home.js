import React, { useState } from "react";
import SpaceBG from "./Images/background-dark.svg";
import SunBG from "./Images/Sun.svg";
import VenusBG from "./Images/Venus.svg";
import MurBG from "./Images/Mercury.svg";
import EarthBG from "./Images/Earth.svg";
import ISSBG from "./Images/ISS.svg";
import MoonBg from "./Images/Moon.svg";
import MarsBG from "./Images/Mars.svg";
import Jupiter from "./Images/Jupiter.svg";
import Saturno from "./Images/Saturno.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const LeftVarient = {
  stationary: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2.3
    }
  },
  moving: {
    opacity: 0,
    x: "-100%",
    transition: {
      duration: 1.2
    }
  }
};
const RightVarient = {
  stationary: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2.3
    }
  },
  moving: {
    opacity: 0,
    x: "+100%",
    transition: {
      duration: 1.2
    }
  }
};
const EarthVarient = {
  stationary: {
    scale: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 2.3
    }
  },
  moving: {
    scale: 2.7,
    y: "10vh",
    x: "-50vh",
    transition: {
      duration: 2.2
    }
  }
};
const DescriptionVarient = {
  stationary: {
    opacity: 0,
    duration: 0
  },
  moving: {
    opacity: 1,
    y: "-20vh",
    x: "+25vh",
    transition: {
      duration: 1.9
    }
  },
  starting: {
    opacity: 0
  }
};

const MoonVarient = {
  stationary: {
    scale: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 2.3
    }
  },
  moving: {
    scale: 3.2,
    y: "10vh",
    x: "-95vh",
    transition: {
      duration: 2.3
    }
  }
};
const IssEarthVarient = {
  stationary: {
    scale: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 2.3
    }
  },
  moving: {
    scale: 1.6,
    x: "-15vh",
    y: "-10vh",
    rotate: 300,
    transition: {
      duration: 2.3
    }
  }
};
const IssonlyVarient = {
  stationary: {
    scale: 1,
    x: 0,
    y: 0
  },
  moving: {
    scale: 3.5,
    x: "-8vh",
    rotate: -25,
    y: "10vh",
    transition: {
      duration: 2.3
    }
  }
};

// for description

// const userDrivenVarient = {
//   stationary:{
//     scale:0
//   },
//   moving:{
//     scale:[1,1.5,2,2.5],
//     transition:[1.4,2,2.8,3.5]
//   }

// };
function Home() {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpenISS, setIsOpenISS] = useState(true);
  // const [isDemoOpen,setDemoOpen]=useState(true);
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
          <motion.div
            className="col-2"
            animate={isOpen ? "stationary" : "moving"}
            variants={LeftVarient}
          >
            <img src={SunBG} height="350vh" alt={'Sun'}  />
          </motion.div>
          {/* sun Div ends */}

          {/* Mercury div */}
          <motion.div
            className="col-1"
            animate={isOpen ? "stationary" : "moving"}
            variants={LeftVarient}
          >
            <img src={MurBG} style={{ marginTop: "25vh" }} alt={'murcury'} />
          </motion.div>
          {/* Murcury Div Ends */}

          {/* Venus Div */}
          <motion.div
            className="col-1"
            style={{ margin: "0px 4vh" }}
            animate={isOpen ? "stationary" : "moving"}
            variants={LeftVarient}
          >
            <img src={VenusBG} style={{ marginTop: "20vh" }}   alt={' Venus'} />
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
                // border: "2px solid red",
                padding: "0",
                position: "absolute",
                transform: "rotate(40deg)"
              }}
              alt={' ISS'} 
              animate={isOpen ? "stationary" : "moving"}
              variants={
                !(isOpenISS || isOpen) ? IssonlyVarient : IssEarthVarient
              }
              onClick={() => {
                setIsOpen(!isOpen);
                setIsOpenISS(!isOpenISS);
              }}
            />

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
              alt={' Moon'} 
              animate={isOpen ? "stationary" : "moving"}
              variants={MoonVarient}
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
                animate={isOpen ? "stationary" : "moving"}
                variants={EarthVarient}
                src={EarthBG}
                style={{
                  cursor: "pointer"
                  // border: "2px solid green"
                }}
                alt={' Earth'} 
                onClick={() => {
                  if (!isOpenISS && !isOpen) {
                    setIsOpen(true);
                    setIsOpenISS(true);
                  } else {
                    setIsOpen(!isOpen);
                  }
                  // alert("yeet", isOpen);
                }}
              />
            </motion.div>
            {!isOpen && isOpenISS === true && (
              <motion.div
                animate={isOpen ? "stationary" : "moving"}
                variants={DescriptionVarient}
                initial="starting"
                style={{ width: "40vh" }}
              >
                <h3
                  style={{
                    color: "#F7D64B",
                    paddingBottom: "25px",
                    borderBottom: "5px solid"
                  }}
                >
                  Earth{" "}
                </h3>

                <p className="text-white" style={{ marginTop: "20px" }}>
                  Earth is the third planet from the Sun and the only
                  astronomical object known to harbor life. According to
                  radiometric dating estimation and other evidence, Earth formed
                  over 4.5 billion years ago.
                </p>
                <p className="text-white">
                  <b>Diameter </b>: 12,753 km(7,926 miles){" "}
                </p>
                <p className="text-white">
                  <b>Mass</b>: 5.98x10^24 kilograms (6.5e21 tons)
                </p>
                <p className="text-white">
                  {" "}
                  <b>Density</b>: 5,515 kg/m^3 Minimum Distance from Sun: 146
                  million km (91 million miles)
                </p>
              </motion.div>
            )}
            {!isOpenISS && !isOpen && (
              <motion.div
                animate={isOpen ? "stationary" : "moving"}
                variants={DescriptionVarient}
                initial="starting"
                style={{ width: "40vh" }}
              >
                <h3
                  style={{
                    color: "#F7D64B",
                    paddingBottom: "25px",
                    borderBottom: "5px solid"
                  }}
                >
                  The International Space Station{" "}
                </h3>

                <p className="text-white" style={{ marginTop: "20px" }}>
                  The International Space Station is a modular space station in
                  low Earth orbit (LEO). Length: 73.0 m (239.4 ft) Width: 109.0
                  m (357.5 ft)
                </p>
                <p className="text-white">Orbit height: 408 km </p>
                <p className="text-white">Speed on orbit: 7.66 km/s</p>
                <p className="text-white"> Mass: 419,700 kg</p>
              </motion.div>
            )}
          </div>
          {/* Earth Div ends */}

          <motion.div
            className="col-1"
            animate={isOpen ? "stationary" : "moving"}
            variants={RightVarient}
          >
            <img src={MarsBG} style={{ marginTop: "25vh" }} alt={'Mars'}/>
          </motion.div>
          <motion.div
            className="col-2"
            style={{ marginLeft: "0" }}
            animate={isOpen ? "stationary" : "moving"}
            variants={RightVarient}
          >
            <img src={Jupiter} style={{ marginTop: "25vh", height: "38vh" }} alt={'Jupiter'}/>
          </motion.div>
          <motion.div
            className="col-2"
            animate={isOpen ? "stationary" : "moving"}
            variants={RightVarient}
          >
            <img src={Saturno} style={{ marginTop: "15vh", height: "33vh" }} alt={'Saturn'} />
          </motion.div>
        </div>
        <div className="row">
          <div className="col-2">
            <Link to="/chat">
              {" "}
              <button
                className="btn btn-warning"
                style={{
                  borderRadius: "40px",
                  color: "red",
                  // paddingRight: "15px",
                  // paddingLeft: "15px"
                }}
              >
                Start Demo (user driven)
              </button>
            </Link>
          </div>
          <div className="col-2" style={{marginLeft:'70px'}}>
            <Link to="/demo">  <button
              className="btn btn-warning"
              style={{
                borderRadius: "40px",
                // paddingRight: "15px",
                // paddingLeft: "15px"
              }}
             
            >
              Start Demo (model driven)
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
