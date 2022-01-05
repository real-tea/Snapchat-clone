import React , { useCallback , useRef , useState } from 'react';
import Webcam from "react-webcam";
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { useDispatch } from 'react-redux';
import { setCameraImage } from './features/cameraSlice';
import { useNavigate } from 'react-router-dom'; //useHistory has depreciated in router-dom v6
import './WebcamCapture.css';


const videoConstraints = {
    width : 250,
    height : 400,
    facingmode : "user"
};



function WebcamCapture() {

    const webcamRef = useRef(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const capture = useCallback(()=>{
            const imgsrc = webcamRef.current.getScreenshot();
            dispatch(setCameraImage(imgsrc));
            navigate('/preview');//will push the screenshot in '/preview'

    },[webcamRef])

    return (
        <div className = "webcamCapture">
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
