import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import utilStyles from "../../styles/Home.module.css";
import EditNoteIcon from '@mui/icons-material/EditNote';
import loginStyles from "../../styles/loginStyles/login.module.css";

const AccountDetails = () => {
    return(
        <Box>
            <form>
                <Grid
                container
                spacing={2}
                direction="row"
                className="py-2"
                >
                    <Grid xs={6}>
                        <div required className={`w-full h-75 p-1 ${loginStyles.defaultLabelInput}`} >
                            <label className="block">First Name:*</label>
                            <input
                                required
                                type="text"
                                placeholder="First Name"
                                className={`w-full px-4 py-3 rounded-sm focus:outline-none ${loginStyles.allDetails}`}
                            />
                        </div>
                    </Grid>
                    <Grid xs={6}>
                        <div required className={`w-full h-75 p-1 ${loginStyles.defaultLabelInput}`} >
                            <label className="block">Last Name:*</label>
                            <input
                                required
                                type="text"
                                placeholder="Last Name"
                                className={`w-full px-4 py-3 rounded-sm focus:outline-none ${loginStyles.allDetails}`}
                            />
                        </div>
                    </Grid>
                    <Grid xs={12}>
                        <div required className={`w-full h-75 p-1 ${loginStyles.defaultLabelInput}`} >
                            <label className="block">Email Address:*</label>
                            <input
                                required
                                type="email"
                                placeholder="Email Address"
                                className={`w-full px-4 py-3 rounded-sm focus:outline-none ${loginStyles.allDetails}`}
                            />
                        </div>
                    </Grid>
                </Grid>
                <Grid
                container
                spacing={2}
                direction="row"
                className="py-5"
                >
                    <fieldset className="w-full px-2 pt-4 mx-3 border border-gray rounded-sm">
                        <legend style={{fontFamily: "regular", fontSize:"14px"}}>Password Change</legend>
                        <Grid xs={12}>
                            <div required className={`w-full h-75 p-1 ${loginStyles.defaultLabelInput}`} >
                                <label className="block">Current Password (leave blank to unchanged)</label>
                                <input
                                    type="password"
                                    placeholder="Current Password"
                                    className={`w-full px-4 py-3 rounded-sm focus:outline-none ${loginStyles.allDetails}`}
                                />
                            </div>
                        </Grid>
                        <Grid xs={12}>
                            <div required className={`w-full h-75 p-1 ${loginStyles.defaultLabelInput}`} >
                                <label className="block">New Password </label>
                                <input
                                    type="password"
                                    placeholder="New Password"
                                    className={`w-full px-4 py-3 rounded-sm focus:outline-none ${loginStyles.allDetails}`}
                                />
                            </div>
                        </Grid>
                        <Grid xs={12}>
                            <div required className={`w-full h-75 p-1 ${loginStyles.defaultLabelInput}`} >
                                <label className="block">Confirm New Password </label>
                                <input
                                    type="password"
                                    placeholder="Confirm New Password"
                                    className={`w-full px-4 py-3 rounded-sm focus:outline-none ${loginStyles.allDetails}`}
                                />
                            </div>
                        </Grid>
                    </fieldset>
                </Grid>
                <input
                type="submit"
                value={"Update"}
                className={loginStyles.updateBtn}
                />
            </form>
        </Box>
    )
}

export default AccountDetails;