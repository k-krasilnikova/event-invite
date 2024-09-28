import { styled } from "@mui/system";

export const RoadmapLayout = styled("div")(({ theme }) => ({
  display: "flex",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));
