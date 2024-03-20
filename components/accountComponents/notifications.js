import React from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from "@mui/material/Box";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <div>{children}</div>
          </Box>
        )}
      </div>
    );
  }

  export const tabSx = {
    '& .MuiTabs-flexContainer':{
        borderBottom: '1px solid #eee',
        // margin: '0 22px'
    },
    '& .MuiTab-root': {
        lineHeight: 0,
        minHeight: "unset",
        padding: "25px",
        fontWeight: 600,
        alignItems: 'flex-start',
        fontFamily: "regular",
        // width: '400px'

    },
    '& .MuiTabs-scrollButtons':{
        display : 'none'
    },
    '& .MuiTabs-indicator': {
      display: 'none'
    },
    '& .MuiButtonBase-root.MuiTab-root': {
      color: '#222',
      transition: 'color 0.2s ease-in-out',
      '&:hover': {
        color: '#9a8254)',
      },
      '& .MuiButtonBase-root.MuiTab-root' : {
        fontFamily: "regular"
      },
      '&.Mui-selected': {
        color: '#9a8254',
        fontFamily: "regular",
        textDecoration :'underline'
      },
    },
  };

  export const accordionSx = {
    '& .MuiPaper-root':{
        boxShadow: '0',
        border: '1px solid #e1e1e1',
        borderRadius: '0',
    },
    '& .MuiAccordionSummary-root':{
        background: '#f2f3f5',
        border: 'unset',
        borderRadius: '0',
        fontFamily: "regular",
       
    },
    '& .MuiAccordionSummary-content':{
        transition: 'color 0.2s ease-in-out',
        '&:hover': {
          color: '#9a8254)',
        },
    },
    '& .MuiAccordionDetails-root':{
        background: '#f2f3f5',
        fontFamily: "regular",
        fontSize: '14px'
    }
  };

const NotificationsData = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return(
        <div>
            <Box>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={tabSx} className="mx-0 md:mx-10">
                    <Tab label="Unread(0)"/>
                    <Tab label="All" />
                </Tabs>
            </Box>
            <Box>
                <CustomTabPanel value={value} index={0}>
                    <Notifications />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <Notifications />
                </CustomTabPanel>
            </Box>
        </div>
    )  
}

export default NotificationsData;

const notificationsThread = [
    {
        title: ' New user Registration',
        content: 'Registration: Dear User you have registered successfully'
    }
];

function Notifications(){
    return (
        <>
        {notificationsThread.map((notification, index) => (
            <Accordion key={index} sx={accordionSx} style={{boxShadow: 'unset', border: '1px solid #e1e1e1', borderRadius: '0'}}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                >
                {notification.title}
                </AccordionSummary>
                <AccordionDetails>
                    {notification.content}
                </AccordionDetails>
            </Accordion>
        ))}
        </>
    )
}
