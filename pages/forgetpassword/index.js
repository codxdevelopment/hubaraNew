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
          <BreadcrumbItem>Password Reset</BreadcrumbItem>
        </Breadcrumbs>
      </div>
      <Spacer y={5} />
      <div className={`pb-10 ${loginStyles.card}`}>
        <div className={loginStyles.loginTitle}>Password Reset</div>
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
            <input
              type="submit"
              value={"RESEND LINK"}
              className={loginStyles.loginBtn}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Index;
