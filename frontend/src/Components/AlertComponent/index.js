import React from 'react';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import { resetAlert } from '../../store/actions';

const AlertComponent = () => {
    let msg = useSelector(state => state.alertReducer);
    let dispatch = useDispatch();


    const handleOnClick = () => {
        dispatch(resetAlert());
    }

    setTimeout(() => {
        dispatch(resetAlert());
    }, 5000);
    
    return (
        <div style={msg.show?{display:"block"}:{display: "none"}}>
            <div className={`alertBox d-flex align-items-start alert-${msg.type}`}>
                <div className={`alertBar bg-${msg.type}`}></div>   
                <div className='alertMsg'>
                    {msg.message}
                </div>
                <button className='alertCloseBtn' onClick={handleOnClick}>&times;</button>
            </div>
        </div>
    )
}

export default AlertComponent;