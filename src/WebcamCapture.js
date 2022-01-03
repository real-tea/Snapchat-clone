import React , { useCallback , useRef , useState } from 'react';
import Webcam from "react-webcam";
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

const videoConstraints = {
    width : 250,
    height : 400,
    facingmode : "user"
};


function WebcamCapture() {

    const webcamRef = useRef(null);
    

    const capture = useCallback(()=>{
            const imgsrc = webcamRef.current.getScreenshot();
           

    },[webcamRef])

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

            <RadioButtonUncheckedIcon
            className = "webcapture__button"
            onClick = { capture }
            />

            
        </div>
    )
}

export default WebcamCapture
