import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import ReceiptPopup from '../receiptPopup';

export const tableSx = {
    '& .MuiTableCell-root':{
        fontFamily: "regular" 
    },
    '&:nth-of-type(even)': {
        backgroundColor: '#f4f4f4',
      },
      // hide last border
      '&:last-child td, &:last-child th': {
        border: 0,
      },
  };
  export const tableHeaderSx = {
    '& .MuiTableCell-root':{
        fontFamily: "regular" ,
        fontWeight: "bold"
    },
    '&:nth-of-type(odd)': {
        backgroundColor: '#f4f4f4',
      },
  };
  
const UnpaidOrdersData = () => {

    const [openReceiptModal, setopenReceiptModal] = React.useState(false);

    const closePopup = ()=>{
        setopenReceiptModal(!openReceiptModal);
    }

    return(
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={tableHeaderSx}>
                            <TableCell>Orders</TableCell>
                            <TableCell align="center">Date</TableCell>
                            <TableCell align="center">Payment Status</TableCell>
                            <TableCell align="center">Total</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow
                        sx={tableSx}
                        >
                        <TableCell component="th" scope="row">
                        HB-01183-AE
                        </TableCell>
                        <TableCell align="center">09/02/2024</TableCell>
                        <TableCell align="center">
                            <Chip label="Pending" component="a" href="#basic-chip" clickable sx={{borderRadius: '4px'}}/>
                        </TableCell>
                        <TableCell align="center">AED 800</TableCell>
                        <TableCell align="center" sx={{color: '#9a8254', fontSize: '16px', cursor: 'pointer'}} onClick={() => setopenReceiptModal(!openReceiptModal)}>View
                            <ReceiptPopup show={openReceiptModal} close={() => setopenReceiptModal(false)} closePopup={closePopup}/>
                        </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default UnpaidOrdersData;