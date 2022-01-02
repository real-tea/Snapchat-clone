import React , { useRef } from 'react';
import Webcam from "react-webcam";

const videoConstraints = {
    width : 250,
    height : 400,
    facingmode : "user"
};


function WebcamCapture() {

    const webcamRef = useRef(null);

    return (
        <div>
            <Webcam
            audio = {false}
            height = {videoConstraints.height}
            width = {videoConstraints.width}
            ref = {webcamRef}
            screenshotFormat='image/jpeg'
            videoConstraints = {videoConstraints}
            />
        </div>
    )
}

export default WebcamCapture
