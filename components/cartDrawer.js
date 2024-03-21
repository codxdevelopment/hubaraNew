import React, { useState } from "react";
import Image from "next/image";
import navStyles from "../styles/nav.module.css";
import Grid from "@mui/material/Unstable_Grid2";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import indexStyles from "../styles/cartStyles/cartIndesStyles.module.css";
import EastIcon from '@mui/icons-material/East';
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import Button from '@mui/material/Button';
import loginStyles from "../styles/loginStyles/login.module.css";


const CartDrawer = (props)=>{
    const [cartEmpty, setCartEmpty] = useState(false);
    const [cartItems, setCarItemsArray] = useState([
        {
          itemName: "Signature Hubara Vest",
          itemImage:
            "https://s3.ap-south-1.amazonaws.com/media.hubara.com/upload/inventory/inventory_88263.webp",
          color: "Olive Green",
          size: "Large",
          price: "3,900.00",
          quantity: 1,
        },
        {
          itemName: "Signature Hubara Vest",
          itemImage:
            "https://s3.ap-south-1.amazonaws.com/media.hubara.com/upload/inventory/inventory_88263.webp",
          color: "Olive Green",
          size: "Large",
          price: "3,900.00",
          quantity: 1,
        },
        {
          itemName: "Signature Hubara Vest",
          itemImage:
            "https://s3.ap-south-1.amazonaws.com/media.hubara.com/upload/inventory/inventory_88263.webp",
          color: "Olive Green",
          size: "Large",
          price: "3,900.00",
          quantity: 1,
        },
        {
          itemName: "Signature Hubara Vest",
          itemImage:
            "https://s3.ap-south-1.amazonaws.com/media.hubara.com/upload/inventory/inventory_88263.webp",
          color: "Olive Green",
          size: "Large",
          price: "3,900.00",
          quantity: 1,
        },
        {
          itemName: "Signature Hubara Vest",
          itemImage:
            "https://s3.ap-south-1.amazonaws.com/media.hubara.com/upload/inventory/inventory_88263.webp",
          color: "Olive Green",
          size: "Large",
          price: "3,900.00",
          quantity: 1,
        },
      ]);
    
      useState(() => {
      }, [cartItems]);
      const deleteItem = (index) => {
        const updatedCartItems = cartItems.filter((item, i) => i !== index);
        setCarItemsArray(updatedCartItems);
        if(updatedCartItems.length < 1){
            setCartEmpty(!cartEmpty);
        }
      };

      const setCartItems = () => {
        const cartDivs = [];
        cartItems.forEach((item, index) => {
          const carDiv = (
            <div key={index}>
              <div
                className={`overflow-hidden ${indexStyles.itemParentDivSideCart}`}
              >
                <div className="flex relative">
                    <div
                    className={`absolute top-5 right-0`}
                    >
                        <CloseIcon sx={{fontSize: '22px', border: '1px solid #ccc', borderRadius:'50%', padding:'2px', cursor:"pointer"}}  onClick={() => deleteItem(index)}/>
                    </div>
                  <div className="pl-2 mx-auto">
                    <div className={indexStyles.imageContainerSideCart}>
                      <Image
                        src={item.itemImage}
                        alt={item.title}
                        width={80}
                        height={100}
                        objectFit="cover"
                      />
                    </div>
                  </div>
                  <div className="w-full flex flex-col justify-between p-2 ">
                    <div className={indexStyles.itemNameSideCart}> {item.itemName}</div>                   
                    <div className={`flex ${indexStyles.qunatityCounterParent}`}>
                      <div>{item.quantity} X AED {item.price}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
          cartDivs.push(carDiv);
        });
        return cartDivs;
      };

    return(
        <Drawer style={{ maxWidth: '340px' }} open={props.open} onClose={props.close} anchor="right"
        >
            <Grid
            container
            sx={{ width: 340 }}
            role="presentation"
            onClick={props.close}
            className="p-5"
            >
                <Grid xs={8}>
                    <h4 className={navStyles.normalFont}>
                    Shopping Cart
                    </h4>
                </Grid>
                <Grid  xs={4} sx={{cursor:'pointer'}}>
                    <p className={navStyles.normalFont}>
                    Close&nbsp;
                    <EastIcon/>  
                    </p>
                </Grid>
            </Grid>
            <Divider variant="middle" />
            <div className={`flex-col h-screen ${ cartEmpty ? "hidden" : "flex" }`}>
                <div className={`grid grid-cols-12 gap-1 pb-2 ${indexStyles.SideCartItemsContainer}`}>
                    <div className="col-span-12">
                        <div>{setCartItems()}</div>
                    </div>
                </div>
                <Divider variant="middle" className="py-3" style={{marginTop:'auto'}} />
                <div className="flex p-4 justify-between" style={{fontFamily: 'regular'}}>
                    <p>Subtotal</p>
                    <p>AED 78,00.00</p>
                </div>
                <Divider variant="middle"className="" />
                <div className="flex p-4 justify-between flex-col items-center" style={{fontFamily: 'regular'}}>
                    <Link href="/cart" style={{borderBottom:"2px solid #9a8254", width:'78px'}}>View Cart</Link>
                    <Button sx={{ marginTop:'10px', borderRadius:'2px'}} variant="contained" className={loginStyles.loginBtn}>Checkout</Button>
                </div>
            </div>
            <div className={`justify-center pt-3 ${ cartEmpty ? "flex" : "hidden" }`}>
                <h1 style={{fontFamily:'regular'}}>No products in the cart.</h1>
            </div>
        </Drawer>
    )
}

export default CartDrawer;