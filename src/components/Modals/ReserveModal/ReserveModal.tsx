import { FC } from "react";
import Button from "@mui/material/Button";

import { IGift } from "../../../constants/gifts";
import ModalDialog from "../ModalDialog";

// import { Modal, ModalContentWrapper, ModalSubtitle } from "./styled";

interface IReserveModalProps {
  gift: IGift | null;
  isModalOpened: boolean;
  onReserve: () => void;
  handleClose: () => void;
}

const ReserveModal: FC<IReserveModalProps> = ({
  gift,
  isModalOpened,
  onReserve,
  handleClose,
}) => (
  <ModalDialog
    title="Резерв подарка"
    handleClose={handleClose}
    isModalOpened={isModalOpened}
    actions={
      <Button onClick={onReserve} variant="outlined">
        Зарезервировать
      </Button>
    }
  >
    <p>{gift?.title}</p>
    <p>{gift?.key}</p>
    <p>{gift?.description}</p>
  </ModalDialog>
);

export default ReserveModal;
