import React from "react";
import faqStyles from "../../styles/faqs.module.css";
import Link from "next/link";
import { Breadcrumbs, BreadcrumbItem, Spacer } from "@nextui-org/react";
import HomeIcon from "@mui/icons-material/Home";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import OrdersData from "../../components/accountComponents/orders";
import UnpaidOrdersData from "../../components/accountComponents/unpaid_orders";


export const tabSx = {
    '& .MuiTab-root': {
        lineHeight: 0,
        minHeight: "unset",
        padding: "25px",
        fontWeight: 600,
        alignItems: 'flex-start',
        fontFamily: "regular",
        borderBottom: '1px solid #eee',
        width: '400px'

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

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        style={{minWidth: '78%'}}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ paddingLeft: '20px' }}>
            <div>{children}</div>
          </Box>
        )}
      </div>
    );
  }
const Index = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className={`${faqStyles.parent} ${faqStyles.titleText}`}>
        <Breadcrumbs>
          <BreadcrumbItem>
            <Link href="/">{<HomeIcon />}</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>Account</BreadcrumbItem>
        </Breadcrumbs>
      </div>
      <Spacer y={50} />
      <h1 className={`text-center ${faqStyles.hubaraShop}`}>My Account</h1>
      <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 'fit-content', padding: '0 20px' }}>
        <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        sx={tabSx}
        >
            <Tab label="Orders" />
            <Tab label="Unpaid Orders" />
            <Tab label="Address" />
            <Tab label="Account Details" />
            <Tab label="Notifications" />
            <Tab label="Rewards" />
            <Tab label="Logout" />
        </Tabs>
        <TabPanel value={value} index={0}>
            <OrdersData />
        </TabPanel>
        <TabPanel value={value} index={1}>
            <UnpaidOrdersData />
        </TabPanel>
      </Box>
      <Spacer y={100} />
    </>
  );
};

export default Index;
