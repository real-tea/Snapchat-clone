import { useEffect } from 'react';
import './Preview.css';
import { useDispatch , useSelector } from "react-redux";
import { selectCameraImage } from './features/cameraSlice';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import resetCameraImage from './features/cameraSlice';


const Preview = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const cameraImage = useSelector(selectCameraImage);
    useEffect(()=>{
        if (!cameraImage){
            navigate('/');
        }
    },[ cameraImage , navigate ])

    const closePreview = () => {
        dispatch(resetCameraImage());
        // navigate('/');
    }

    return (
        <div className = "previewImage">
            <h1>Siuuu</h1>
            <CloseIcon className = "preview__close" onClick = { closePreview }/>
            <img src = { cameraImage }/>
        </div>
        
)}
 
export default Preview
