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
      width: 1280,
      height: 720,
      facingMode: "user"
    };

    return (
      <div className="Camera">
        <Webcam
          audio={false}
          height={720}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={1280}
          videoConstraints={videoConstraints}
        />
        <div>
          <button onClick={this.capture}>Capture photo</button>
        </div>
      </div>

    );
  }
}

export default WebcamCapture;