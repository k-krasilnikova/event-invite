import { FC, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import ModalDialog from "../ModalDialog";

// import { Modal, ModalContentWrapper, ModalSubtitle } from "./styled";

interface ICancelModalProps {
  isModalOpened: boolean;
  error?: string | null;
  onCancel: (code: string) => void;
  handleClose: () => void;
}

const CancelModal: FC<ICancelModalProps> = ({
  isModalOpened,
  error,
  onCancel,
  handleClose,
}) => {
  const [code, setCode] = useState<string>("");

  const onCodeChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = ({ target }) => {
    if (target?.value) {
      setCode(target.value);
    }
  };

  return (
    <ModalDialog
      title="Отмена резерва подарка"
      handleClose={handleClose}
      isModalOpened={isModalOpened}
      actions={
        <Button onClick={() => onCancel(code)} variant="contained">
          Отмена резерва
        </Button>
      }
    >
      <div>
        <p>Введи код для отмены:</p>
        <TextField
          onChange={onCodeChange}
          id="outlined-basic"
          variant="outlined"
        />
        {error && <p>Неверный код</p>}
      </div>
    </ModalDialog>
  );
};

export default CancelModal;
