import React, { useState } from "react";
import { Breadcrumbs, BreadcrumbItem, Card, Spacer } from "@nextui-org/react";
import HomeIcon from "@mui/icons-material/Home";
import loginStyles from "../../styles/loginStyles/login.module.css";
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from "next/link";
import Button from '@mui/material/Button';

const Index = () => {
  return (
    <div>
      <div
        className={`${loginStyles.loginParent} ${loginStyles.breadcrumbsDiv}`}
      >
        <Breadcrumbs>
          <BreadcrumbItem>
            <Link href="/">{<HomeIcon />}</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>Sign in to your Account</BreadcrumbItem>
        </Breadcrumbs>
      </div>
      <Spacer y={5} />
      <div className={loginStyles.card}>
        <div className={loginStyles.loginTitle}>Sign in to your Account</div>
        <div>
          <form>
            <div
              required
              className={`w-full h-75 border border-black rounded-sm p-1 ${loginStyles.subscribeInput}`}
            >
              <input
                required
                type="email"
                placeholder="Email Address *"
                className={`w-full px-4 py-2 rounded-sm focus:outline-none ${loginStyles.allDetails}`}
              />
            </div>

            <div
              className={`w-full h-75 border border-black rounded-sm p-1 ${loginStyles.subscribeInput}`}
            >
              <input
                required
                type="password"
                placeholder="Password *"
                className={`w-full px-4 py-2 rounded-sm focus:outline-none ${loginStyles.allDetails}`}
              />
            </div>
            <div className={`flex pb-2 justify-between items-center ${loginStyles.bottomLinks}`}>
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Remember Me" />
              </FormGroup>
              <Link href="/">Lost Your Password?</Link>
            </div>
            <input
              type="submit"
              value={"LOGIN"}
              className={loginStyles.loginBtn}
            />
          </form>
          <div className={`text-center pt-2 pb-4 ${loginStyles.allDetails}`}>
            <p className="py-2">OR</p>
            <Button variant="contained" className={loginStyles.loginBtn}>CHECK OUT AS A GUEST</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
