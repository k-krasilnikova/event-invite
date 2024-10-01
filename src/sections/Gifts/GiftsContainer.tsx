import { useState, useEffect } from "react";

import { IGift } from "../../constants/gifts";
import Gifts from "./Gifts";
import ReserveModal from "../../components/Modals/ReserveModal";
import CancelModal from "../../components/Modals/CancelModal";
import { useLoadGifts } from "../../api/products/getGifts";
import { useUpdateGift } from "../../api/products/updateGift";

const GiftsContainer = () => {
  const [giftsList, setGiftList] = useState<IGift[]>([]);
  const [selectedGift, setSelectedGift] = useState<null | IGift>(null);
  const [isReserveModalOpened, setReserveModalOpened] = useState(false);
  const [isCancelModalOpened, setCancelModalOpened] = useState(false);

  const handleReserveModalOpen = () => setReserveModalOpened(true);
  const handleReserveModalClose = () => setReserveModalOpened(false);
  const handleCancelModalOpen = () => setCancelModalOpened(true);
  const handleCancelModalClose = () => setCancelModalOpened(false);

  const { data: giftsResponse } = useLoadGifts();
  const { mutate: updateGift, isLoading, error } = useUpdateGift();

  useEffect(() => {
    if (giftsResponse) {
      setGiftList(giftsResponse);
    }
  }, [giftsResponse]);

  const onReserve = () => {
    if (selectedGift) {
      updateGift({
        id: selectedGift._id,
        key: selectedGift.key,
        isReserved: true,
      });
    }
    handleReserveModalClose();
    setSelectedGift(null);
  };

  const onReserveClick = (gift: IGift) => {
    if (!gift.isReserved) {
      const randomKey = new Date().getMilliseconds();
      const giftToReserve = giftsList.find(
        (giftObj) => giftObj._id === gift._id
      );
      if (giftToReserve) {
        const giftToWorkWith = {
          ...giftToReserve,
          key: `${gift.key}${randomKey}`.trim(),
        };
        setSelectedGift(giftToWorkWith);
      }
      handleReserveModalOpen();
    }
  };

  const onCancel = (code: string) => {
    const giftToUpdate = giftsList.find((giftObj) => giftObj.key === code);
    if (giftToUpdate && giftToUpdate.isReserved) {
      const updatedKey = giftToUpdate.key.split("-")[0] + "-";
      updateGift({
        id: giftToUpdate._id,
        key: updatedKey,
        isReserved: false,
      });
      handleCancelModalClose();
    }
  };
  console.log(error);
  return (
    <>
      {isReserveModalOpened && (
        <ReserveModal
          onReserve={onReserve}
          isModalOpened={isReserveModalOpened}
          handleClose={handleReserveModalClose}
          gift={selectedGift}
          isLoading={isLoading}
          // error={error}
        />
      )}

      {isCancelModalOpened && (
        <CancelModal
          onCancel={onCancel}
          isModalOpened={isCancelModalOpened}
          handleClose={handleCancelModalClose}
          isLoading={isLoading}
          // error={error}
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
