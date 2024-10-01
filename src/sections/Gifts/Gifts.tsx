import { FC } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import { IGift } from "../../constants/gifts";
import { GiftsLayout, StyledImg, StyledButton } from "./styled";

export const Gifts: FC<{
  giftsList: IGift[];
  onReserveClick: (gift: IGift) => void;
  onCacnelRsrvtn: () => void;
}> = ({ giftsList, onReserveClick, onCacnelRsrvtn }) => (
  <div>
    <h4>Gifts</h4>
    <GiftsLayout>
      <ImageList
        sx={{ width: "90%", height: "100%" }}
        variant="woven"
        cols={3}
        gap={8}
      >
        {giftsList.map((gift) => (
          <ImageListItem key={gift.img}>
            <StyledImg
              srcSet={`${gift.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
              src={`${gift.img}?w=161&fit=crop&auto=format`}
              alt={gift.title}
              loading="lazy"
              className="MuiImageListItem-img"
              isReserved={gift.isReserved}
              onClick={() => onReserveClick(gift)}
            />
          </ImageListItem>
        ))}
      </ImageList>
      <StyledButton variant="outlined" onClick={onCacnelRsrvtn}>
        Cancel Rsrvtn
      </StyledButton>
    </GiftsLayout>
  </div>
);

export default Gifts;
