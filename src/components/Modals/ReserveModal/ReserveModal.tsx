import { FC } from "react";
import Button from "@mui/material/Button";

import { IGift } from "../../../constants/gifts";
import ModalDialog from "../ModalDialog";
import { Title, Key, Link, Description } from "./styled";

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
      <Button onClick={onReserve} variant="contained">
        Зарезервировать
      </Button>
    }
  >
    <Title>{gift?.title}</Title>
    <Key>{gift?.key}</Key>
    <Description>{gift?.description}</Description>
    {gift?.link && (
      <Link href={gift?.link} target="_blank">
        Больше деталей здесь *Клик*
      </Link>
    )}
  </ModalDialog>
);

export default ReserveModal;
