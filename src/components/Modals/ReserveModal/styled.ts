import { styled } from "@mui/system";

export const Key = styled("p")({
  fontSize: 42,
});

export const Title = styled("p")({
  fontSize: 20,
});

export const Description = styled("p")({
  fontSize: 16,
});

export const Link = styled("a")({
  color: "black",
  "&:hover": {
    color: "grey",
  },
});
