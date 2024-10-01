import { FC, useState } from "react";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";

import ModalDialog from "../ModalDialog";

interface ICancelModalProps {
  isModalOpened: boolean;
  error?: string | null;
  isLoading?: boolean;
  onCancel: (code: string) => void;
  handleClose: () => void;
}

const CancelModal: FC<ICancelModalProps> = ({
  isModalOpened,
  error,
  isLoading,
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
        <LoadingButton
          onClick={() => onCancel(code)}
          variant="contained"
          loading={isLoading}
        >
          Отмена резерва
        </LoadingButton>
      }
    >
      <div>
        <p>Введи код для отмены:</p>
        <TextField
          onChange={onCodeChange}
          id="outlined-basic"
          variant="outlined"
        />
        {error && <p>{error}</p>}
      </div>
    </ModalDialog>
  );
};

export default CancelModal;
