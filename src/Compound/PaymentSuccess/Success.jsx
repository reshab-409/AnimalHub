import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

const SuccessPage = () => {
    const navigate = useNavigate();
    return (
        <div className="Success-container">
            <div className="Success-item-sec">
                <h1 className="success-hadding">Payment Successful!</h1>
                <p className="Success-para">Your order will arrive in 2 business days.</p>
            </div>
            <img src="https://cdn3.iconfinder.com/data/icons/round-default/64/add-512.png" alt="success" className="Success-image" />
            <a onClick={() => { navigate("/") }} id="Success-BTN">Back to Homepage</a>
        </div>
    );
}

export default SuccessPage;
