import React, { useState } from "react";
import { Breadcrumbs, BreadcrumbItem, Card, Spacer } from "@nextui-org/react";
import HomeIcon from "@mui/icons-material/Home";
import loginStyles from "../../styles/loginStyles/login.module.css";
import Link from "next/link";

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
      <Spacer y={50} />
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
            <input
              type="submit"
              value={"LOGIN"}
              className={loginStyles.loginBtn}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Index;
