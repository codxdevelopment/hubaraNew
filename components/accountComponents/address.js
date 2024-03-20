import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import utilStyles from "../../styles/Home.module.css";
import EditNoteIcon from '@mui/icons-material/EditNote';
import loginStyles from "../../styles/loginStyles/login.module.css";

const AddressData = () => {
    return(
        <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        className="py-2"
        >
            <Grid xs={12} >
                <h1 className={`py-3 ${utilStyles.regularFontSmallHeadingGray}`}>The following addresses will be used on the checkout page by default.</h1>
            </Grid>
            <Grid md={6} xs={12}>
                <h1 className={`py-3 text-left ${utilStyles.regularFontHeading}`}>ADDRESS</h1>
                <p className={`py-1 ${utilStyles.paragraphTextGray}`}>User Name</p>
                <p className={`py-1 ${utilStyles.paragraphTextGray}`}>User Email</p>
                <p className={`py-1 ${utilStyles.paragraphTextGray}`}>User Address</p>
                <p className={`py-1 ${utilStyles.paragraphTextGray}`}>User City</p>
                <p className={`py-1 ${utilStyles.paragraphTextGray}`}>User Phone</p>
                <p className={`py-1 ${utilStyles.paragraphTextGray}`}>User Postal Code</p>
            </Grid>
            <Grid md={6} xs={12}>
                <h1 className={`py-3 text-left ${utilStyles.regularFontHeading}`}>EDIT ADDRESS <EditNoteIcon /></h1>
                <form>
                    <div required className={`w-full h-75 p-1 ${loginStyles.defaultLabelInput}`} >
                        <label className="block">Phone:*</label>
                        <input
                            required
                            type="text"
                            placeholder="Phone Number"
                            className={`w-full px-4 py-3 rounded-sm focus:outline-none ${loginStyles.allDetails}`}
                        />
                    </div>
                    <div required className={`w-full h-75 p-1 ${loginStyles.defaultLabelInput}`} >
                        <label className="block">Address:*</label>
                        <input
                            required
                            type="text"
                            placeholder="Address"
                            className={`w-full px-4 py-3 rounded-sm focus:outline-none ${loginStyles.allDetails}`}
                        />
                    </div>
                    <div required className={`w-full h-75 p-1 ${loginStyles.defaultLabelInput}`} >
                        <label className="block">Country/Region:*</label>
                        <select className={`w-full px-4 py-3 rounded-sm focus:outline-none ${loginStyles.allDetails}`}>
                            <option value="UAE">United Arab Emirates</option>
                        </select>
                    </div>
                    <div required className={`w-full h-75 p-1 ${loginStyles.defaultLabelInput}`} >
                        <label className="block">State:*</label>
                        <select className={`w-full px-4 py-3 rounded-sm focus:outline-none ${loginStyles.allDetails}`}>
                            <option value="UAE">United Arab Emirates</option>
                        </select>
                    </div>
                    <div required className={`w-full h-75 p-1 ${loginStyles.defaultLabelInput}`} >
                        <label className="block">Subrub:*</label>
                        <input
                            required
                            type="text"
                            placeholder="Subrub"
                            className={`w-full px-4 py-3 rounded-sm focus:outline-none ${loginStyles.allDetails}`}
                        />
                    </div>
                    <div required className={`w-full h-75 p-1 ${loginStyles.defaultLabelInput}`} >
                        <label className="block">Postal Code:*</label>
                        <input
                            required
                            type="text"
                            placeholder="Postal Code"
                            className={`w-full px-4 py-3 rounded-sm focus:outline-none ${loginStyles.allDetails}`}
                        />
                    </div>
                    <input
                    type="submit"
                    value={"Update"}
                    className={loginStyles.updateBtn}
                    />
                </form>
            </Grid>
        </Grid>
    )
}

export default AddressData;