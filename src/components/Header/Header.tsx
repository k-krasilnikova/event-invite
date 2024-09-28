import { FC } from "react";

import {
  StyledLayout,
  StyledLine,
  StyledTitle,
  StyledDescription,
} from "./styled";

export const Header: FC = () => (
  <StyledLayout>
    <StyledLine />
    <StyledTitle>Twenty Six</StyledTitle>
    <StyledDescription>13.10</StyledDescription>
    <StyledDescription>birthday party</StyledDescription>
  </StyledLayout>
);

export default Header;
