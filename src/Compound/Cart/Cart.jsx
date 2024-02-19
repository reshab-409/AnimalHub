import React from 'react';
import useCartData from '../Products/CartData';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';

const Cart = () => {
  // Loading
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
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

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
        navigate("/Payment")
      }, 2000);
    }
  };



  const navigate = useNavigate();
  const { cartData, removeFromCart } = useCartData();

  const remove = (item) => {
    removeFromCart(item.name);
    console.log(item);
  };

  const buy = (item) => {
    console.log(item);
  };

  const calculateTotal = () => {
    return cartData.reduce((total, item) => total + (item.price * item.quantity), 0);
  };


  const calculateTotalSavings = () => {
    return cartData.reduce((totalSavings, item) => totalSavings + (item.save || 0) * (item.quantity || 1), 0);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '90vh', width: '100%', marginTop: '12rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%', alignItems: "center" }}>
        {cartData.length === 0 ? (
          <h1>Your cart is empty</h1>
        ) : (
          <>
            <div style={{ height: "500px", overflowX: "scroll", display: 'flex', flexDirection: 'column', gap: '2rem', width: "92%", border: "1px solid black", borderRadius: "15px", padding: "10px" }}>
              {cartData.map((item) => (
                <div key={item.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: "center", background: "#e9e9e9", borderRadius: "15px", flexWrap: "wrap", padding: '10px 25px' }}>
                  <img style={{ height: '80px', width: '100px' }} src={item.img} alt='item' />
                  <p style={{ color: 'black' }}>{item.name}</p>
                  <p style={{ color: 'black' }}>{item.price}</p>
                  <p style={{ color: 'black' }}>Save: {item.save || 0}</p>
                  <p style={{ color: 'black' }}>Quantity: {item.quantity || 0}</p>
                  <Button variant='contained' color='error' sx={{ height: "fit-content", gap: ".5rem" }} onClick={() => remove(item)}> <DeleteIcon /></Button>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end", alignContent: "center", width: "100%", marginRight: "7rem" }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', flexDirection: "column", background: "#5d9ac9", padding: '10px ', width: "15rem", height: "fit-content", borderRadius: "20px" }}>
                <span variant='contained' style={{ fontSize: "1.2rem", margin: "6px 5px" }}>Total: ${calculateTotal().toFixed(2)}</span>
                <span variant='contained' style={{ fontSize: "1.3rem", margin: "6px 5px" }}>Savings: ${calculateTotalSavings().toFixed(2)}</span>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", alignContent: "center", width: "100%", paddingRight: "40px", marginBottom: "3rem", marginRight: "6rem" }}>
              <Box sx={{ m: 1, position: 'relative' }}>
                <Button
                  variant="contained"
                  sx={buttonSx}
                  disabled={loading}
                  onClick={handleButtonClick}
                >
                  Payment
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
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
