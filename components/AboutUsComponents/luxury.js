import React from "react";
import luxuryStyles from "../../styles/aboutStyles/luxury.module.css";
import { Spacer } from "@nextui-org/react";

const Luxury = () => {
  return (
    <>
      <div className={luxuryStyles.parent}>
        <div className={`text-3xl md:text-4xl ${luxuryStyles.titleText}`}>
          {"WHERE LUXURY STYLE"}
        </div>
        <div className={`text-2xl md:text-4xl ${luxuryStyles.titleText}`}>
          {"MEETS NATURE"}
        </div>
        <Spacer y={4} />
        <div className={luxuryStyles.understatedText}>
          {"A WORLD OF UNDERSTATED ELEGANCE WITH HUBARA DESIGN"}
        </div>
        {/* <Spacer y={2} /> */}
      </div>
    </>
  );
};

export default Luxury;
