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
    const orders = [
        {
            id : 'HB-01061-AE',
            date: '03/03/2024',
            status: 'Pending',
            total: '340',
            actions: 'View'
        },
        {
            id : 'HB-01062-AE',
            date: '03/04/2024',
            status: 'Pending',
            total: '180',
            actions: 'View'
        }
    ];
    return(
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 'fit-content'}} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={tableHeaderSx}>
                            <TableCell>Orders</TableCell>
                            <TableCell align="center">Date</TableCell>
                            <TableCell align="center">Payment Status</TableCell>
                            <TableCell align="center">Total</TableCell>
                            <TableCell align="center" className="md:table-cell hiddenHbSm">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {orders.map((order, index) => (
                       <TableRow
                       sx={tableSx}  key={index}
                       >
                            <TableCell component="th" scope="row">
                            {order.id}
                            </TableCell>
                            <TableCell align="center">{order.date}</TableCell>
                            <TableCell align="center">
                                <Chip label={order.status} component="a" href="#" clickable sx={{borderRadius: '4px'}} onClick={() => setopenReceiptModal(!openReceiptModal)} />
                            </TableCell>
                            <TableCell align="center">AED {order.total}</TableCell>
                            <TableCell align="center" className="md:table-cell hiddenHbSm" sx={{color: '#9a8254', fontSize: '16px', cursor: 'pointer'}} onClick={() => setopenReceiptModal(!openReceiptModal)}>{order.actions}
                                <ReceiptPopup show={openReceiptModal} close={() => setopenReceiptModal(false)} closePopup={closePopup}/>
                            </TableCell>
                       </TableRow> 
                    ) 
                    )}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default UnpaidOrdersData;