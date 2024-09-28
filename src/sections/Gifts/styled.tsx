import { styled } from "@mui/system";
import Button from "@mui/material/Button";

export const GiftsLayout = styled("div")({
  display: "flex",
  justifyContent: "center",
});

export const StyledImg = styled("img", {
  shouldForwardProp: (prop) => prop !== "isReserved",
})<{
  isReserved?: boolean;
}>(({ isReserved }) => ({
  cursor: "pointer",
  "&:hover": {
    opacity: "0.6",
  },
  ...(isReserved && {
    cursor: "auto",
    opacity: "0.3",
    "&:hover": {
      opacity: "0.3",
    },
  }),
}));

export const StyledButton = styled(Button)({
  position: "fixed",
  bottom: 0,
  left: 0,
  textTransform: "none",
  fontSize: 14,
  // width: 80,
  // height: 80,
  // borderRadius: "50%",
});
