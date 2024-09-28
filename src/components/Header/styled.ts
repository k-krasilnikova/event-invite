import { styled } from "@mui/system";

export const StyledLayout = styled("div")({
  width: "100%",
  padding: "100px 0 50px",
});

export const StyledTitle = styled("h2")({
  fontFamily: "Dancing Script",
  fontWeight: 200,
  fontSize: 60,
  margin: 0,
});

export const StyledDescription = styled("h5")({
  fontSize: 12,
  fontWeight: 200,
  margin: 0,
});

export const StyledLine = styled("div")({
  width: 2,
  height: 140,
  backgroundColor: "black",
  position: "absolute",
  top: 0,
  left: "14%"
})