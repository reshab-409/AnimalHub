import React from 'react';
import './Checkout.css'; // Import your CSS files
import './CheckOut-Responsive.css';
import useCartData from '../Products/CartData';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const navigate = useNavigate();
    const { cartData, paymentMethod } = useCartData();
    const userDetails = JSON.parse(window.localStorage.getItem("currentUser"))
    const address = JSON.parse(window.localStorage.getItem("ProfileData"))

    const calculateTotal = () => {
        return cartData.reduce((total, item) => total + (item.price * item.quantity), 0);
    };
    const calculateTotalSavings = () => {
        return cartData.reduce((totalSavings, item) => totalSavings + (item.save || 0) * (item.quantity || 1), 0);
    };
    return (
        <div className="check-out-body-container">
            <div className="check-out-container">
                <div className="check-out-details-card check-out-cart">
                    <div className="check-out-label-sec">
                        <label className="check-out-label-title">CHECKOUT</label>
                    </div>
                    <div className="check-out-steps-sec">
                        <div className="check-out-step">
                            <div className="check-out-steps-details">
                                <span className="check-out-step-span">SHIPPING</span>
                                <p className="check-out-step-para">{userDetails.name}</p>
                                <p className="check-out-step-para">{address.address}</p>
                            </div>
                            <div className="check-out-steps-details">
                                <span className="check-out-step-span">PAYMENT METHOD</span>
                                <p className="check-out-step-para">{paymentMethod}</p>
                            </div>
                            <div className="check-out-promo-sec">
                                <div className="check-out-promo-span-sec">
                                    <span className="check-out-span">HAVE A PROMO CODE?</span>
                                </div>
                                <form className="check-out-form">
                                    <div className="check-out-input-field-sec">
                                        <input type="text" placeholder="Enter a Promo Code" className="check-out-form-input_field" />
                                    </div>
                                    <button type="submit" id="check-out-button">Apply</button>
                                </form>
                            </div>
                            <div className="check-out-payments">
                                <div className="check-out-promo-span-sec">
                                    <span className="check-out-span">PAYMENT</span>
                                </div>
                                <div className="check-out-payment-details">
                                    <span className="check-out-payment-span">Total:</span>
                                    <span className="check-out-payment-span">${calculateTotal().toFixed(2)}</span>
                                    <span className="check-out-payment-span">Saving:</span>
                                    <span className="check-out-payment-span">${calculateTotalSavings().toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="check-out-details-card check-out">
                        <div className="check-out-footer">
                            <div className="check-out-footer-label-sec">
                                <label className="check-out-price">${calculateTotal().toFixed(2)}</label>
                            </div>
                            <div className="check-out-footer-button-sec">
                                <button onClick={() => { navigate("/PaymentSuccessful") }} id="check-out-BTN">Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
