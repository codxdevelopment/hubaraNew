import * as React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/Home.module.css';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const name = 'Hubara';
export const siteTitle = 'Hubara | Luxury Clothing Brand Dubai | UAE';
 
export default function Navbar({ home }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <Container maxWidth="lg">
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
                  className={utilStyles.borderCircle}
                  height={144}
                  width={144}
                  alt={name}
                />
              </Grid>
            </Box>
          ) : (
            <Box sx={{ flexGrow: 1}}>
              <Grid container spacing={2} sx={{ display: { xs: 'none', md: 'flex' } }}
              direction="row"
              justifyContent="center"
              alignItems="center"
              className="py-5"
              >
                <Grid xs={3} >
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
                <Grid xs={6}   >
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
                <Grid xs={3} gap={4} className="flex justify-center">
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
              <Grid container spacing={2} sx={{ display: { xs: 'flex', md: 'none' }, borderBottomWidth: 1 }}
              direction="row"
              justifyContent="center"
              alignItems="center"
              className="py-2"
              >
                <Grid xs={3} >
                  <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                  <Drawer open={open} onClose={toggleDrawer(false)}>
                  <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
                    <List>
                      <ListItem>
                        <Link href="/">
                          <ListItemText primary={'About Hubara'} />
                        </Link>
                      </ListItem>
                      <ListItem >  
                        <Link href="/">
                          <ListItemText primary={"What's New"} />
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link href="/">
                          <ListItemText primary={'Men'} />
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link href="/">
                          <ListItemText primary={'Women'} />
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link href="/">
                          <ListItemText primary={'Shop By'} />
                        </Link>
                      </ListItem>
                    </List>
                    <Divider />
                  </Box>
                  </Drawer>
                </Box>
                </Grid>
                <Grid xs={6} >
                  <Link href="/" className='flex flex-col items-center justify-items-center'>
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
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, borderTopWidth: 2, borderBottomWidth: 2, borderColor: '#9a8254 '  }} >
        <AppBar position="static" style={{ background: 'transparent' }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'center'} }}>
                <List sx={{ color:"#000", display: 'flex'}} className={utilStyles.menuListing} >
                  <ListItem>
                    <Link href="/">
                      <ListItemText primary={'About Hubara'} />
                    </Link>
                  </ListItem>
                  <ListItem>  
                    <Link href="/">
                      <ListItemText primary={"What's New"} />
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="/">
                      <ListItemText primary={'Men'} />
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="/">
                      <ListItemText primary={'Women'} />
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="/">
                      <ListItemText primary={'Shop By'} />
                    </Link>
                  </ListItem>
                </List>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </>
  )
}