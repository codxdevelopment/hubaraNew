import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import utilStyles from "../styles/Home.module.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 988,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '10px'
};

export const tableSx = {
    '& .MuiTableCell-root':{
        fontFamily: "regular" ,
        borderBottom: 'unset',
    },
      // hide border
      '& .MuiTableCell-body': {
        borderBottom: 'unset',
      },
  };

  export const tableHeaderSx = {
    '& .MuiTableCell-root':{
        fontFamily: "regular" ,
        fontWeight: "bold",
        borderBottom: 'unset',
    },
    // hide border
    '& .MuiTableCell-body': {
      borderBottom: 'unset',
    },
  };

export default function ReceiptPopup(props) {

  return (
    <div>
      <Modal
        open={props.show}
        onClose={props.close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <IconButton sx={{ position: 'absolute', right: 4, top: 4 }} onClick={props.closePopup}>
                <CloseIcon />
            </IconButton>
            <Stack
            direction="row"
            justifyContent="center"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={3}
            className={utilStyles.popupStack}
            >
                <div className='text-center'>
                    <p>ORDER NUMBER:</p>
                    <span>HB-0459-AE</span>
                </div>
                <div className='text-center'>
                    <p>PAYMENT STATUS:</p>
                    <span>Pending</span>
                </div>
                <div className='text-center'>
                    <p>Date:</p>
                    <span>25-11-2023</span>
                </div>
                <div className='text-center'>
                    <p>Email:</p>
                    <span>user@gmail.com</span>
                </div>
                <div className='text-center'>
                    <p>Total:</p>
                    <span>AED 400.00</span>
                </div>
                <div className='text-center'>
                    <p>Payment Method:</p>
                    <span>Stripe</span>
                </div>
            </Stack> 
            <h1 className={`py-5 ${utilStyles.regularFontHeading}`}>ORDER DETAILS</h1>
            <TableContainer>
                <Table sx={{ minWidth: 650, border: '1px solid #e1e1e1', borderRadius: '3px'}} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={tableHeaderSx}>
                            <TableCell>Product</TableCell>
                            <TableCell align="center">Tracking</TableCell>
                            <TableCell align="center">Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow sx={tableSx}>
                            <TableCell component="th" scope="row">
                            Womens Signature Lounge Pant Sage Green Medium 1
                            </TableCell>
                            <TableCell align="center">Track Order</TableCell>
                            <TableCell align="center">AED 700</TableCell>
                        </TableRow>
                        <TableRow sx={tableSx}>
                            <TableCell component="th" scope="row">
                            Subtotal:
                            </TableCell>
                            <TableCell align="center"></TableCell>
                            <TableCell align="center">AED 700</TableCell>
                        </TableRow>
                        <TableRow sx={tableSx}>
                            <TableCell component="th" scope="row">
                            Payment Method:
                            </TableCell>
                            <TableCell align="center"></TableCell>
                            <TableCell align="center">Stripe</TableCell>
                        </TableRow>
                        <TableRow sx={tableSx}>
                            <TableCell component="th" scope="row">
                            Total:
                            </TableCell>
                            <TableCell align="center"></TableCell>
                            <TableCell align="center">AED 700</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <h1 className={`py-3 ${utilStyles.regularFontHeadingGray}`}>BILLING ADDRESS</h1>
            <p className={`py-1 ${utilStyles.paragraphTextGray}`}>User Name</p>
            <p className={`py-1 ${utilStyles.paragraphTextGray}`}>User Email</p>
            <p className={`py-1 ${utilStyles.paragraphTextGray}`}>User Address</p>
            <p className={`py-1 ${utilStyles.paragraphTextGray}`}>User Phone</p>
        </Box>
      </Modal>
    </div>
  );
}