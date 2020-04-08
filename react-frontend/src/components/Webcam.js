import React from "react";
import Webcam from "react-webcam";
import { faceVerification } from "./Repository";

class Component extends React.Component {
  render() {
    return <Webcam />;
  }
}

class WebcamCapture extends React.Component {
    setRef = webcam => {
      this.webcam = webcam;
    };
  
    capture = () => {
      const imageSrc = this.webcam.getScreenshot();
      console.log(imageSrc);
      faceVerification(imageSrc)
      .catch(err => alert(err));
    };
  
    render() {
      const videoConstraints = {
        width: 1920,
        height: 1280,
        facingMode: "user"
      };
  
      return (
        <div className="Camera">
          <Webcam
            audio={false}
            height={350}
            ref={this.setRef}
            screenshotFormat="image/jpeg"
            width={350}
            videoConstraints={videoConstraints}
          />
          <button onClick={this.capture}>Capture photo</button>
        </div>
      );
    }
  }

  export default WebcamCapture;