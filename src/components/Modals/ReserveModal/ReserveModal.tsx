import { FC } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import IconButton from "@mui/material/IconButton";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import { IGift } from "../../../constants/gifts";
import ModalDialog from "../ModalDialog";
import { Title, CodeBlock, Key, Link, Description } from "./styled";

interface IReserveModalProps {
  gift: IGift | null;
  error?: string | null;
  isModalOpened: boolean;
  isLoading?: boolean;
  onReserve: () => void;
  handleClose: () => void;
}

const ReserveModal: FC<IReserveModalProps> = ({
  gift,
  error,
  isModalOpened,
  isLoading,
  onReserve,
  handleClose,
}) => (
  <ModalDialog
    title="Резерв подарка"
    handleClose={handleClose}
    isModalOpened={isModalOpened}
    actions={
      <LoadingButton
        onClick={onReserve}
        variant="contained"
        loading={isLoading}
      >
        Зарезервировать
      </LoadingButton>
    }
  >
    <Title>{gift?.title}</Title>
    {gift?.key && (
      <CodeBlock>
        <Key>{gift.key}</Key>
        <IconButton
          aria-label="copy"
          onClick={() => navigator.clipboard.writeText(gift.key)}
        >
          <ContentCopyIcon />
        </IconButton>
      </CodeBlock>
    )}
    <Description>{gift?.description}</Description>
    {gift?.link && (
      <Link href={gift?.link} target="_blank">
        Больше деталей здесь *Клик*
      </Link>
    )}
    {error && <p>{error}</p>}
  </ModalDialog>
);

export default ReserveModal;
