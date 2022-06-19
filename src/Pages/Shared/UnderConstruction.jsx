import { Image } from "@mantine/core";
import underConstruction from "../../Assets/svg/Under construction-bro.svg";
const UnderConstruction = () => {
   return (
      <div
         style={{
            display: "flex",
            justifyItems: "center",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "2rem",
         }}
      >
         <Image
            style={{
               width: "400px",
               maxWidth: "1300px",
            }}
            src={underConstruction}
         ></Image>
      </div>
   );
};

export default UnderConstruction;
