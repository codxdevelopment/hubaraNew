import React from "react";
import faqStyles from "../../styles/faqs.module.css";
import Link from "next/link";
import { Breadcrumbs, BreadcrumbItem, Spacer } from "@nextui-org/react";
import HomeIcon from "@mui/icons-material/Home";
import utilStyles from "../../styles/Home.module.css";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import OrdersData from "../../components/accountComponents/orders";
import UnpaidOrdersData from "../../components/accountComponents/unpaid_orders";
import AddressData from "../../components/accountComponents/address";
import AccountDetails from "../../components/accountComponents/accountDetails";
import NotificationsData from "../../components/accountComponents/notifications";
import RewardsData from "../../components/accountComponents/rewards";
import LogoutIcon from '@mui/icons-material/Logout';


export const tabSx = {
    '& .MuiTab-root': {
        lineHeight: 0,
        minHeight: "unset",
        padding: "25px",
        fontWeight: 600,
        alignItems: 'flex-start',
        fontFamily: "regular",
        borderBottom: '1px solid #eee',
        width: '400px',
        '@media(max-width: 768px)' : {
            width: '120px',
            fontSize: '10px',
            padding: "25px 0",
            background:'#e1e1e1 0 0 no-repeat padding-box',
            borderBottom: 'unset',
            borderRadius: '4px',
            margin: '4px 0',
            alignItems: 'center'
          }
    },
    '& .MuiTabs-flexContainer':{
        '@media(max-width: 768px)' : {
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between'
          }
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
          <Box className="md:pl-5 pl-0">
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
      <Spacer y={10} className="md:block hidden"/>
      <div className="grid grid-cols-12 gap-4">
        <h1 className={`md:col-span-12 col-span-6 md:text-center md:pb-20 pb-0 pl-5 md:pl-0 pt-6 md:pt-0 ${utilStyles.regularFontHeadingLarge}`}>My Account</h1>
        <h1 className={`col-span-6 flex md:hidden pr-6 md:text-center justify-end md:pb-20 pb-0 pl-5 md:pl-0 pt-6 md:pt-0 ${utilStyles.regularFontHeading}`}>Logout <LogoutIcon className="pl-1" /></h1>
      </div>
      <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 'fit-content', padding: '0 20px' }}>
        <Grid
        container
        spacing={2}
        direction="row"
        className="py-2 w-full"
        >
            <Grid md={3} xs={12}>
                <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                sx={tabSx}
                className={utilStyles.tabListing}
                >
                    <Tab label="Orders" />
                    <Tab label="Unpaid Orders" />
                    <Tab label="Address" />
                    <Tab label="Account Details" />
                    <Tab label="Notifications" />
                    <Tab label="Rewards" />
                    <Tab className="hiddenHbSm" label="Logout" />
                </Tabs>
            </Grid>
            <Grid md={9} xs={12}>
                <TabPanel value={value} index={0}>
                    <OrdersData />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <UnpaidOrdersData />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <AddressData />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <AccountDetails />
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <NotificationsData />
                </TabPanel>
                <TabPanel value={value} index={5}>
                    <RewardsData />
                </TabPanel>
            </Grid>
        </Grid>
      </Box>
      <Spacer y={100} />
    </>
  );
};

export default Index;
