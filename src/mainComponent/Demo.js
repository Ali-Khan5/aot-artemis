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
// import redCircle from "./Images/redcircledemo.svg";
import { motion, useCycle } from "framer-motion";

const userDrivenVarient = {
  // visible: {
  //   y: [+60, +60, +60, +60],
  //   x: [+70, +70, +70, +70],
  //   scale: [1, 1.5, 2, 2.5],
  //   transition: { duration: 10, type: "tween", times: [0, 0.3, 0.6, 0.9] }
  // },
  visible: {
    scale: 2,
    x: "+5vw",
    y: "+5vh",
    transition: {
      duration: 2.5
    }
  },
  maincoreVarientStageOne: {
    scale: 2.5,
    x: "+5vw",
    y: "+5vh",
    transition: {
      duration: 2.5
    }
  },
  maincoreVarientStageTwo: {
    scale: 2.7,
    x: "+5vw",
    y: "+5vh",
    transition: {
      duration: 2.5
    }
  },
  maincoreVarientStageThree: {
    scale: 2.7,
    x: "+30vw",
    y: "+5vh",
    transition: {
      duration: 2.5
    }
  }
  // },
  // leftVarientStagetwo:{
  //   scale: 2,
  //   x: "-120%",
  //   transition: {
  //     duration: 2.5
  //   }
  // }
};
const IssonlyVarient = {
  // moving: {
  //   scale: [1, 1.5, 2, 2],
  //   x: ["0vh", "-5vh", "-10vh", "-10vh"],
  //   rotate: -25,
  //   y: ["0vh", "15vh", "15vh", "5vh"],
  //   transition: {
  //     duration: 10,
  //     type: "tween",
  //     times: [0, 0.3, 0.6, 0.9]
  //   }
  // }
  visible: {
    scale: 1.5,
    x: "-5vw",
    y: "15vh",
    transition: {
      duration: 2.5
    }
  },
  maincoreVarientStageOne: {
    scale: 2,
    x: "-10vw",
    y: "+15vh",
    transition: {
      duration: 2.5
    }
  },
  maincoreVarientStageTwo: {
    scale: 2,
    x: "-10vw",
    y: "0vh",
    transition: {
      duration: 2.5
    }
  },
  maincoreVarientStageThree: {
    scale: 2,
    x: "+15vw",
    y: "0vh",
    transition: {
      duration: 2.5
    }
  }
};
const moonVarient = {
  // visible: {
  //   x: ["10vh", "15vh", "20vh", "30vh"],
  //   scale: [1, 1.5, 2, 2.2],
  //   transition: { duration: 10, type: "tween", times: [0, 0.3, 0.6, 0.9] }
  // }
  visible: {
    scale: 1.5,
    x: "+10vw",

    transition: {
      duration: 2.5
    }
  },
  maincoreVarientStageOne: {
    scale: 2.2,
    x: "+20vw",

    transition: {
      duration: 2.5
    }
  },
  maincoreVarientStageTwo: {
    scale: 2.8,
    x: "+25vw",
    transition: {
      duration: 2.5
    }
  },
  maincoreVarientStageThree: {
    scale: 2.8,
    x: "35vw",
    transition: {
      duration: 2.5
    }
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
    x: "-85%",
    transition: {
      duration: 2.5
    }
  },
  leftVarientStageOne: {
    scale: 2,
    x: "-115%",
    transition: {
      duration: 2.5
    }
  }
  // },
  // leftVarientStagetwo:{
  //   scale: 2,
  //   x: "-120%",
  //   transition: {
  //     duration: 2.5
  //   }
  // }
};
const RightVarient = {
  // visible: {
  //   opacity: 0,
  //   scale: 1.5,
  //   x: "+100%",
  //   transition: {
  //     duration: 3.2
  //   }
  // }

  visible: {
    scale: 1.3,
    x: "+20vw",
    transition: {
      duration: 2.5
    }
  },
  rightVarientStageOne: {
    scale: 1.5,
    x: "+50vw",
    transition: {
      duration: 2.5
    }
  }
};
const marsVarient = {
  // visible: {
  //   x: 40,
  //   transition: { duration: 10, type: "tween" }
  // },
  // motion: {
  //   scale: [1, 2, 2.5, 2.8],
  //   x: ["05vh", "+30vh", "+55vh", "+95vh"],
  //   transition: { duration: 15, type: "tween", times: [0, 0.2, 0.4, 0.7] }
  // },
  visible: {
    scale: 1.6,
    x: "+15vw",
    transition: { duration: 2.5 }
  },
  rightVarientStageOne: {
    scale: 2,
    x: "+30vw",
    transition: {
      duration: 2.5
    }
  },
  rightVarientStagetwo: {
    scale: 2,
    x: "+65vw",
    transition: {
      duration: 2.5
    }
  }
};

const mercuryVarient = {
  visible: {
    scale: 1.8,
    x: "-10vw",
    transition: { duration: 2.5 }
  },
  leftVarientStageOne: {
    scale: 2.5,
    x: "-30vw",
    transition: {
      duration: 2.5
    }
  }
};
const venusVarient = {
  // motion: {
  //   scale: [1, 1.6, 2, 2],
  //   x: ["0vh", "-15vh", "-25vh", "-65vh"],
  //   transition: { duration: 15, type: "tween", times: [0, 0.2, 0.4, 0.7] }
  // },
  visible: {
    scale: 1.6,
    x: "-5vw",
    transition: { duration: 2.5 }
  },
  leftVarientStageOne: {
    scale: 2,
    x: "-25vw",
    transition: {
      duration: 2.5
    }
  },
  leftVarientStagetwo: {
    scale: 2,
    x: "-65vw",
    transition: {
      duration: 2.5
    }
  }
};
// const redcircleVarient = {
//   visible: {
//     opacity: 0
//   },
//   motion: {
//     opacity: 1,

//     transition: { duration: 2, delay: 1.5 }
//   }
// };

function Demo() {
  // const [spaceSentence, setspaceSentence] = useState(
  //   "Models are calculating any issues on ISS in real time…"
  // );
  const [textCounter, setTextCounter] = useState(0);
  const [leftanimation, CycleLeftAnimation] = useCycle(
    "visible",
    "leftVarientStageOne",
    "leftVarientStagetwo",
    "leftVarientStagetwo"
  );
  const [rightanimation, CycleRightAnimation] = useCycle(
    "visible",
    "rightVarientStageOne",
    "rightVarientStagetwo",
    "rightVarientStagetwo"
  );
  const [mainanimation, CycleMainAnimation] = useCycle(
    "visible",
    "maincoreVarientStageOne",
    "maincoreVarientStageTwo",
    "maincoreVarientStageThree"
  );
  let arr = [
    "Models are calculating any issues on ISS in real time…",
    "Detected malfunction on Solar panel 4-A",
    "Evaluating damages, intensity and root cause… Shortlisting SOPs to resolve issue"
  ];
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
        <div
          className="row"
          style={{ paddingTop: "10vh" }}
          onClick={() => {
            CycleLeftAnimation();
            CycleRightAnimation();
            CycleMainAnimation();
            console.log("sun CLicked");
            if (textCounter < 2) {
              setTextCounter(textCounter + 1);
              console.log(textCounter, "val");
            }
          }}
        >
          {/* sun Div */}
          <motion.div className="col-2">
            <motion.img
              src={SunBG}
              height="350vh"
              variants={LeftVarient}
              animate={leftanimation}
            />
          </motion.div>
          {/* sun Div ends */}

          {/* Mercury div */}
          <motion.div className="col-1">
            <motion.img
              src={MurBG}
              style={{ marginTop: "25vh" }}
              variants={mercuryVarient}
              animate={leftanimation}
            />
          </motion.div>
          {/* Murcury Div Ends */}

          {/* Venus Div */}
          <motion.div className="col-1" style={{ margin: "0px 0vh" }}>
            <motion.img
              src={VenusBG}
              style={{ marginTop: "20vh" }}
              variants={venusVarient}
              animate={leftanimation}
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
              animate={mainanimation}
            />
            {/* <motion.div
            >
              <motion.img
                // className="RedCircleVarient"
                src={redCircle}
                variants={redcircleVarient}
                animate="motion"
                initial="visible"
                style={{
                  position: "absolute",
                  height: "24vh",
                  left: "-3vw",
                  top: "5vh"
                }}
              />
            </motion.div> */}

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
              animate={mainanimation}
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
                animate={mainanimation}
              />
            </motion.div>
          </div>
          {/* Earth Div ends */}

          <motion.div className="col-1">
            <motion.img
              src={MarsBG}
              style={{ marginTop: "25vh" }}
              variants={marsVarient}
              animate={rightanimation}
            />
          </motion.div>
          <motion.div className="col-2" style={{ marginLeft: "0" }}>
            <motion.img
              src={Jupiter}
              style={{ marginTop: "25vh", height: "38vh" }}
              variants={RightVarient}
              animate={rightanimation}
            />
          </motion.div>
          <motion.div className="col-2">
            <motion.img
              src={Saturno}
              style={{ marginTop: "15vh", height: "33vh" }}
              variants={RightVarient}
              animate={rightanimation}
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
              style={{ padding: "0px 10vw" }}
            >
              {arr[textCounter]}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Demo;
