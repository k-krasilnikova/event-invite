import { styled } from "@mui/system";

export const StyledLine = styled("div")({
  width: 140,
  height: 2,
  backgroundColor: "black",
  position: "absolute",
  right: "-10px",
  bottom: 30,
});

export const Note = styled("p")({
  color: "red",
  fontSize: 12,
  position: "absolute",
  top: -70,
  right: 0,
});

export const NoteWrapper = styled("div")({
  position: "relative",
});
