import { useState } from "react";

import { GIFTS, IGift } from "../../constants/gifts";
import Gifts from "./Gifts";
import ReserveModal from "../../components/Modals/ReserveModal";
import CancelModal from "../../components/Modals/CancelModal";

const GiftsContainer = () => {
  const [giftsList, setGiftList] = useState<IGift[]>(GIFTS);
  const [selectedGift, setSelectedGift] = useState<null | IGift>(null);
  const [isReserveModalOpened, setReserveModalOpened] = useState(false);
  const [isCancelModalOpened, setCancelModalOpened] = useState(false);

  const handleReserveModalOpen = () => setReserveModalOpened(true);
  const handleReserveModalClose = () => setReserveModalOpened(false);
  const handleCancelModalOpen = () => setCancelModalOpened(true);
  const handleCancelModalClose = () => setCancelModalOpened(false);

  const onReserve = () => {
    if (selectedGift) {
      const updatedList = giftsList.map((giftObj) =>
        selectedGift.id !== giftObj.id
          ? giftObj
          : { ...selectedGift, isReserved: true }
      );
      setGiftList(updatedList);
    }
    handleReserveModalClose();
  };

  const onReserveClick = (gift: IGift) => {
    if (!gift.isReserved) {
      const randomKey = new Date().getMilliseconds();
      const giftToReserve = giftsList.find((giftObj) => giftObj.id === gift.id);
      if (giftToReserve) {
        giftToReserve.key = `${gift.key}${randomKey}`.trim();
        setSelectedGift(giftToReserve);
      }
      handleReserveModalOpen();
    }
  };

  const onCancel = (code: string) => {
    const giftToUpdate = giftsList.find((giftObj) => giftObj.key === code);
    if (giftToUpdate && giftToUpdate.isReserved) {
      const updatedList = giftsList.map((giftObj) =>
        code !== giftObj.key
          ? giftObj
          : {
              ...giftObj,
              isReserved: false,
            }
      );
      setGiftList(updatedList);
      handleCancelModalClose();
    }
  };

  return (
    <>
      {isReserveModalOpened && (
        <ReserveModal
          onReserve={onReserve}
          isModalOpened={isReserveModalOpened}
          handleClose={handleReserveModalClose}
          gift={selectedGift}
        />
      )}

      {isCancelModalOpened && (
        <CancelModal
          onCancel={onCancel}
          isModalOpened={isCancelModalOpened}
          handleClose={handleCancelModalClose}
        />
      )}
      <Gifts
        giftsList={giftsList}
        onReserveClick={onReserveClick}
        onCacnelRsrvtn={handleCancelModalOpen}
      />
    </>
  );
};

export default GiftsContainer;
