import { useState } from "react";

import { GIFTS, IGift } from "../../constants/gifts";
import Gifts from "./Gifts";

const GiftsContainer = () => {
  const [giftsList, setGiftList] = useState<IGift[]>(GIFTS);

  const onReserve = (gift: IGift) => {
    const randomKey = new Date().getMilliseconds();
    const updatedList = giftsList.map((giftObj) =>
      gift.id !== giftObj.id
        ? giftObj
        : {
            ...gift,
            isReserved: true,
            key: `${gift.key}${randomKey}`,
          }
    );
    setGiftList(updatedList);
  };

  // const onCancel = (gift: IGift) => {
  //   const updatedList = giftsList.map((giftObj) =>
  //     gift.id !== giftObj.id
  //       ? giftObj
  //       : {
  //           ...gift,
  //           isReserved: false,
  //         }
  //   );
  //   setGiftList(updatedList);
  // };

  return <Gifts giftsList={giftsList} onReserve={onReserve} />;
};

export default GiftsContainer;
