import * as React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/Home.module.css";
import Link from "next/link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import Drawer from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import navStyles from "../styles/nav.module.css";
import Badge from '@mui/material/Badge';
import EastIcon from '@mui/icons-material/East';
const name = "Hubara";
export const siteTitle = "Hubara | Luxury Clothing Brand Dubai | UAE";
export default function Navbar({ home }) {
  const [open, setOpen] = React.useState(false);
  const [cartOpen, setcartOpen] = React.useState(false);
  // Drawer to open menu on small screens
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
 // Drawer to open cart menu
  const toggleCartDrawer = (newOpen) => () => {
    setcartOpen(newOpen);
  };
// Site Primary Menus
  const menuTitles = [
    {
      title: 'About Hubara',
      link: '/about-us'
    },
    {
      title: "What's New",
      link: '/whats-new'
    },
    {
      title: 'Men',
      link: '/men'
    },
    {
      title: 'Women',
      link: '/women'
    },
    {
      title: 'Shop By',
      link: '/shop'
    },
  ];
// Setting up menus in a global array
  const menuItems = menuTitles.map((item, index) => (
    <ListItem key={index}>
      <Link className={navStyles.regularFont} href={item.link} >
        {item.title}
      </Link>
    </ListItem>
  ));
  return (
    <>
      <Container maxWidth="lg" className={utilStyles.headerContainer}>
        <Box sx={{ flexGrow: 1 }}>
          {home ? (
            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                spacing={2}
                justifyContent="center"
                alignItems="center"
              >
                <Image
                  priority
                  src="/images/text-logo.png"
                  height={144}
                  width={144}
                  alt={name}
                />
              </Grid>
            </Box>
          ) : (
            <Box sx={{ flexGrow: 1, maxHeight: 94}}>
              {/* Header for screens greater than 900px */}
              <Grid
                container
                sx={{ display: { xs: "none", md: "flex" } }}
                direction="row"
                justifyContent="center"
                alignItems="center"
                className="py-2"
              >
                <Grid xs={3}>
                  <Link href="/">
                    <Image
                      priority
                      src="/images/bird-logo.png"
                      height={77}
                      width={70}
                      alt={name}
                    />
                  </Link>
                </Grid>
                <Grid xs={6}>
                  <Link href="/" className="flex justify-center">
                    <Image
                      priority
                      src="/images/text-logo.png"
                      height={68}
                      width={390}
                      alt={name}
                    />
                  </Link>
                </Grid>
                <Grid xs={3} gap={3} className="flex justify-end">
                  <Image
                    priority
                    src="/images/icons/search3.svg"
                    height={32}
                    width={32}
                    alt={name}
                  />
                  <Image
                    priority
                    src="/images/icons/star3.svg"
                    height={32}
                    width={36}
                    alt={name}
                  />
                  <Badge badgeContent={1} 
                    sx={{
                      "& .MuiBadge-badge": {
                        color: "white",
                        backgroundColor: "#9a8254"
                      }
                    }}
                    onClick={toggleCartDrawer(true)}
                  >
                    <Image
                      priority
                      src="/images/icons/cart4.svg"
                      height={32}
                      width={42}
                      alt={name}
                    />
                  </Badge>
                  {/* Cart Menu Drawer */}
                  <Drawer open={cartOpen} onClose={toggleCartDrawer(false)} anchor="right"
                  >
                      <Grid
                        container
                        sx={{ width: 340 }}
                        role="presentation"
                        onClick={toggleCartDrawer(false)}
                        className="p-5"
                      >
                        <Grid xs={8}>
                          <h4 className={navStyles.normalFont}>
                            Shopping Cart
                          </h4>
                        </Grid>
                        <Grid  xs={4}>
                          <p className={navStyles.normalFont}>
                            Close&nbsp;
                            <EastIcon />  
                          </p>
                        </Grid>
                      </Grid>
                      <Divider variant="middle"/>
                    </Drawer>
                  <Image
                    priority
                    src="/images/icons/user2.svg"
                    height={32}
                    width={32}
                    alt={name}
                  />
                </Grid>
              </Grid>
              {/* Header for screens belowe 900px */}
              <Grid
                container
                spacing={2}
                sx={{
                  display: { xs: "flex", md: "none" },
                  borderBottomWidth: 1,
                }}
                direction="row"
                justifyContent="center"
                alignItems="center"
                className="py-2"
              >
                <Grid xs={3}>
                  <Box
                    sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
                  >
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={toggleDrawer(true)}
                      color="inherit"
                    >
                      <MenuIcon />
                    </IconButton>
                    {/* Menu Drawer for small screens  */}
                    <Drawer open={open} onClose={toggleDrawer(false)}>
                      <Box
                        sx={{ width: 250 }}
                        role="presentation"
                        onClick={toggleDrawer(false)}
                      >
                        <List>{menuItems}</List>
                        <Divider />
                      </Box>
                    </Drawer>
                  </Box>
                </Grid>
                <Grid xs={6}>
                  <Link
                    href="/"
                    className="flex flex-col items-center justify-items-center"
                  >
                    <Image
                      priority
                      src="/images/bird-logo.png"
                      height={77}
                      width={70}
                      alt={name}
                    />
                    <Image
                      priority
                      src="/images/text-logo.png"
                      height={68}
                      width={390}
                      alt={name}
                    />
                  </Link>
                </Grid>
                <Grid xs={3} gap={1} className="flex justify-center">
                  <Image
                    priority
                    src="/images/icons/cart4.svg"
                    height={32}
                    width={42}
                    alt={name}
                  />
                  <Image
                    priority
                    src="/images/icons/user2.svg"
                    height={32}
                    width={32}
                    alt={name}
                  />
                </Grid>
              </Grid>
            </Box>
          )}
        </Box>
      </Container>
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "none", md: "flex" },
          borderTopWidth: 2,
          borderBottomWidth: 2,
          borderColor: "#9a8254 ",
        }}
      >
        {/* Menu Bar for large screens */}
        <AppBar position="static" style={{ background: "transparent" }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters className={utilStyles.menuToolbar}>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex", justifyContent: "center" },
                }}
              >
                <List
                  sx={{ color: "#000", display: "flex" }}
                  className={utilStyles.menuListing}
                >
                  {menuItems}
                </List>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </>
  );
}
