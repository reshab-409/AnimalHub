import React from 'react';
import './Payment-Method.css';
import './Payment-Method_Responsive.css';
import { Alert, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';
import useCartData from '../Products/CartData';

const Payment = () => {
    const { addPaymentMethod } = useCartData();
    const navigate = useNavigate();
    const [success, setSuccess] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [selectedMethod, setSelectedMethod] = React.useState(null); // New state to store the selected method
    const timer = React.useRef();

    const buttonSx = {
        ...(success && {
            bgcolor: green[500],
            '&:hover': {
                bgcolor: green[700],
            },
        }),
    };

    React.useEffect(() => {
        return () => {
            clearTimeout(timer.current);
        };
    }, []);

    const handleButtonClick = (e) => {
        e.preventDefault();

        if (!loading && selectedMethod) {
            setSuccess(false);
            setLoading(true);
            timer.current = window.setTimeout(() => {
                setSuccess(true);
                setLoading(false);
                addPaymentMethod(selectedMethod); // Pass the selected method to your function
            }, 1000);
            timer.current = window.setTimeout(() => {
                navigate("/Checkout");
            }, 2000);
        }
    };

    return (
        <div className="payment-method-main-container">
            <form onSubmit={handleButtonClick} className="payment-method-main-sec">
                {success && <Alert severity="success">Payment successful!</Alert>}
                <div className="payment-method-headding-sec">
                    <h2 className="payment-method-headding">Payment</h2>
                </div>
                <div className="radio-group">
                    <input
                        required
                        className="radio-input"
                        name="paymentMethod"
                        id="radio1"
                        type="radio"
                        onChange={() => setSelectedMethod('PhonePe / GPay / Paytm')}
                    />
                    <label className="radio-label" htmlFor="radio1">
                        <span className="radio-inner-circle"></span>
                        PhonePe / GPay / Paytm
                    </label>

                    <input
                        required
                        className="radio-input"
                        name="paymentMethod"
                        id="radio2"
                        type="radio"
                        onChange={() => setSelectedMethod('Credit Card / Debit Card')}
                    />
                    <label className="radio-label" htmlFor="radio2">
                        <span className="radio-inner-circle"></span>
                        Credit Card / Debit Card
                    </label>

                    <input
                        required
                        className="radio-input"
                        name="paymentMethod"
                        id="radio3"
                        type="radio"
                        onChange={() => setSelectedMethod('Cash On Delivery (COD)')}
                    />
                    <label className="radio-label" htmlFor="radio3">
                        <span className="radio-inner-circle"></span>
                        Cash On Delivery (COD)
                    </label>
                </div>
                <div className="payment-method-button-sec">
                    <Box sx={{ m: 1, position: 'relative' }}>
                        <Button
                            variant="contained"
                            sx={buttonSx}
                            disabled={loading || !selectedMethod}
                            type="submit"
                        >
                            Conform
                        </Button>
                        {loading && (
                            <CircularProgress
                                size={24}
                                sx={{
                                    color: green[500],
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    marginTop: '-12px',
                                    marginLeft: '-12px',
                                }}
                            />
                        )}
                    </Box>
                </div>
            </form>
        </div>
    );
}

export default Payment;
