import { Button } from "@mui/material";
import { red } from "@mui/material/colors";

const CustomButton = () => {
  return (
    <>
      <Button variant="Contained" sx={{color:'white',background:"red"}}>
        Sign In
      </Button>
    </>
  );
};

export default CustomButton;
