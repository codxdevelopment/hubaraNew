import * as React from "react";
import IconButton from "@mui/material/IconButton";
import NorthIcon from '@mui/icons-material/North';

export default function ScrollTop() {
    const [isVisible, setIsVisible] = React.useState(false);
    React.useEffect(() => {
        const toggleVisibility = () => {
          // if the user scrolls down, show the button
          window.scrollY > 300 ? setIsVisible(true) : setIsVisible(false)
        }
        // listen for scroll events
        window.addEventListener("scroll", toggleVisibility)
    
        // clear the listener on component unmount
        return () => {
          window.removeEventListener("scroll", toggleVisibility)
        }
      }, [])
    
      const scrollToTop = () => {
        isVisible &&
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
      }
  return (
    <>
      <IconButton sx={{ 
          position: 'fixed',
          bottom: 80,
          right: 60,
          background:'#fff',
          borderRadius: 1,
          padding: '12px',
          boxShadow: '0 0 20px 0 rgba(0,0,0,.1)',
        }} onClick={scrollToTop}  className={`scrollTop ${
          isVisible ? "opacity-1" : "opacity-0"
        }`}>
            <NorthIcon color="#000" fontSize="large"/>
        </IconButton>
    </>
  );
}
