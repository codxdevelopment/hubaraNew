import React from "react";
import luxuryStyles from "../../styles/aboutStyles/luxury.module.css";
import { Spacer } from "@nextui-org/react";

const Luxury = () => {
  return (
    <>
      <div className={luxuryStyles.parent}>
        <div className={luxuryStyles.titleText}>{"WHERE LUXURY STYLE"}</div>
        <div className={luxuryStyles.titleText}>{"MEETS NATURE"}</div>
        <Spacer y={10} />
        <div className={luxuryStyles.understatedText}>
          {"A WORLD OF UNDERSTATED ELEGANCE WITH HUBARA DESIGN"}
        </div>
      </div>
    </>
  );
};

export default Luxury;
