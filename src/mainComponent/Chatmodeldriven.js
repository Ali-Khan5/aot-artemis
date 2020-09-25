import React from "react";
import "./style.css";
import SpaceBG from "./Images/background-dark.svg";

import EarthBG from "./Images/Earth.svg";
import ISSBG from "./Images/ISS.svg";
import { motion } from "framer-motion";
import redCircle from "./Images/Group 32476.svg";
const IconVarient = {
  initial: {
    opacity: 0,
    scale: 2.5,
    transition: {
      duration: 1.5
    }
  },
  motion: {
    opacity: 1,
    scale: 2.5,
    transition: {
      duration: 2
    }
  }
  // visible: {
  //   transition: {
  //     duration: 2.9,
  //     yoyo: Infinity
  //   }
  // },
  // hover: {
  //   scale: 2.6
  // }
};
const ISSVarient = {
  initial: {
    scale: 2,
    opacity: 0,
    rotate: 65
  },
  motion: {
    scale: 2,
    opacity: 1,
    transition: {
      duration: 2
    }
  }
  // visible: {
  //   y: "-3vh",
  //   transition: {
  //     duration: 2.9,
  //     yoyo: Infinity
  //   }
  // },

  // hover: {
  //   scale: 2.6
  // }
};

 
const redCircleVarient = {
  // initial: {
  //   rotate: 0
  // },
  // visible: {
  //   y: "-2vh",
  //   transition: {
  //     duration: 2.9,
  //     yoyo: Infinity
  //   }
  // },
  // hover: {
  //   scale: 2.6
  // }
  initial: {
    opacity: 0,
  },
  motion: {
    opacity: 1,
    transition: {
      duration: 2
    }
  }
};
class Chat extends React.Component {
  constructor(props) {
    super(props);
    // Don't do this!
    this.state = { color: "red" };
  }
  componentDidMount() {
    const element = document.querySelector("#Mychatbox");
    console.log(element);
    window.watsonAssistantChatOptions = {
      integrationID: "89b9ecdd-eb7f-4e88-8cb6-3137517ba034", // The ID of this integration.
      region: "us-south", // The region your integration is hosted in.
      serviceInstanceID: "b36c943c-68cd-4910-bb69-e4b73bc7ad1c", // The ID of your service instance

      // Provide the custom element.
      element: element,
      // Hide the close button since we want it always open.
      hideCloseButton: true,
      // Hide the default launcher.
      showLauncher: false,
      // Config option to change Carbon themes.
      carbonTheme: "g90",
      // Make the window open by default.
      openChatByDefault: true,
      onLoad: function(instance) {
        // Instance method to adjust specific CSS variables
        instance.updateCSSVariables({
          "BASE-font-family":
            'spaceMono, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen","Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",sans-serif',
          // $focus: "#f6d64b",
          // "$hover-primary": "#f6d64b",// send button hover color yellow
          // "$interactive-01": "#ffffff",
          // "$interactive-02": "#ffffff",
          // "$interactive-03": "#ffffff",
          // "$ui-background":"#141414",//changes the background color of chatbot !!!
          // // #ff00fb
          // "$ui-01": "#141414", //changes bottom msg box  color black color
          // "$ui-02": "#ffffff",
          // "$ui-03": "#f6d64b", // pill message coloor changes the wa options msg yellow color
          // "$ui-04": "#141414", //changes the wa send options msg yellow color
          // "$text-01":"#f6d64b", // changes primary chatbot text yellow color
          // "$ui-05": "#ffffff",
          // "$text-02": "#ffffff",

          // "$field-02": "#00ff00",
          // "$text-04":"#ffffff"
          "$ui-background": "#141414", //changes the background color of chatbot !!!
          "$text-03": "#f7f7f5", // placeholder text
          "$text-01": "#f6d64b", // changes primary chatbot text yellow color
          "$ui-04": "#141414", //changes the wa send options msg yellow color
          "$ui-01": "#141414", //changes bottom msg box  color black color
          $focus: "#f6d64b",
          "$hover-primary": "#f6d64b" // send button hover color yellow
        });
        instance.render();
      }
    };
    // this.setState({color:'yellow'});
    setTimeout(function() {
      const t = document.createElement("script");
      t.src =
        "https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
      document.head.appendChild(t);
    });
  }

  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${SpaceBG})`,
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
          height: "95vh",
          overflowX: "hidden",
          overflowY: "hidden"
        }}
      >
        <div className="container">
          <br />
          <div className="row" style={{ padding: "2vh" }}>
            <div className="col-6">
              <div
                id="Mychatbox"
                style={{
                  height: "80vh",
                  width: "100%"
                }}
              ></div>
            </div>
            <div className="col-6 ">
              <div className="text-center">
                <motion.img
                  src={ISSBG}
                  className="IssVarient"
                  variants={ISSVarient}
                  animate="motion"
                  initial="initial"
                />

                <motion.img
                  className="RedCircleVarient"
                  src={redCircle}
                  variants={redCircleVarient}
                  animate="motion"
                  initial="initial"
                />

                <motion.img
                  src={EarthBG}
                  className="EarthVarient"
                  variants={IconVarient}
                  animate="motion"
                  initial="initial"
                 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
