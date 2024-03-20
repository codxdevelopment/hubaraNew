import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import utilStyles from "../../styles/Home.module.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import loginStyles from "../../styles/loginStyles/login.module.css";

const rewards = [
    {
        title: 'Available Balance',
        price: 'AED 0.00',
        desc: "If you want to spend your available balance now, please click on the tab below.",
        btnText: 'Shop Now'
    },
    {
        title: 'Available Points',
        price: '0',
        desc: "The total of your reward points is shown above. Click below to redeem your points now.",
        btnText: 'Redeem'
    }
];

export const cardSx = {
    '& .MuiPaper-root.MuiPaper-outlined':{
        minHeight: '260px'
    }
};

const RewardsData = () => {
    return (
        <>
            <Grid
            container
            spacing={2}
            direction="row"
            className="py-2"
            >
                {rewards.map((reward,index)=>(
                <Grid key={index} md={4} xs={12} >
                    <Card variant="outlined" sx={{border:'1px solid #222', borderRadius:'8px'}}>
                        <CardContent sx={{minHeight: '230px', display: 'flex', flexDirection: 'column', justifyContent:'space-between'}}>
                            <h1 className={utilStyles.regularFontHeading}>{reward.title}</h1>
                            <h1 className={utilStyles.regularFontHeading}>{reward.price}</h1>
                            <p className={utilStyles.paragraphTextGray}>{reward.desc}</p>
                            <Button sx={{maxWidth: '140px '}} variant="contained" className={loginStyles.loginBtn}>{reward.btnText}</Button>
                        </CardContent>
                    </Card>
                </Grid>   
                ))}
            </Grid>
        </>
    )
}

export default RewardsData;