import { FC } from "react";
import Button from "@mui/material/Button";

import { IGift } from "../../../constants/gifts";
import ModalDialog from "../ModalDialog";

// import { Modal, ModalContentWrapper, ModalSubtitle } from "./styled";

interface IReserveModalProps {
  isModalOpened: boolean;
  handleClose: ({ ...props }: { [x: string]: any }) => void;
  gift: IGift | null;
}

const ReserveModal: FC<IReserveModalProps> = ({
  isModalOpened,
  handleClose,
  gift,
}) => (
  <ModalDialog
    title="Резерв подарка"
    handleClose={handleClose}
    isModalOpened={isModalOpened}
    actions={
      <>
        <Button onClick={handleClose}>Disagree</Button>
        <Button onClick={handleClose} autoFocus>
          Agree
        </Button>
      </>
    }
  >
    <p>{gift?.title}</p>
    <p>{gift?.key}</p>
    <p>{gift?.description}</p>
  </ModalDialog>
);

export default ReserveModal;
