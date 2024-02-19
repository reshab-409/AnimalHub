import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { usePopup } from './CentralProvide';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import useCartData from './CartData';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function Popup2({ img, name, save, delievery, price }) {
    const [open, setOpen] = React.useState(false);
    const { isOpen2, openPopup2, closePopup2 } = usePopup();
    const { addToCart, cartData } = useCartData();

    const AddToCart = () => {
        const product = { img, name, save, delievery, price };
        addToCart(product);
        closePopup2();
    }

    return (
        <React.Fragment>
            <BootstrapDialog
             fullWidth={true}
             maxWidth="sm"
                onClose={closePopup2}
                aria-labelledby="customized-dialog-title"
                open={isOpen2}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                   {name}
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={closePopup2}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                <div style={{display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
                        <img style={{ height: "200px", width: "200px" }} src={img} alt='nothing' />
                        <div>
                            <Typography>Price: {price}</Typography>
                            <Typography>Save: {save}</Typography>
                            <Typography>Delievery: {delievery}</Typography>
                        </div>
                    </div>
                </DialogContent>
                <DialogActions>
                <Button variant='outlined' onClick={AddToCart}>
                        <AddShoppingCartIcon /> Add to cart
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </React.Fragment>
    );
}