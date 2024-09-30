import { FC, ReactNode } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

// import { Modal, ModalContentWrapper, ModalSubtitle } from "./styled";

interface IModalDialogProps {
  isModalOpened: boolean;
  handleClose: ({ currentTarget }: { currentTarget: string }) => void;
  title?: string;
  children?: ReactNode;
  actions?: ReactNode;
}

const ModalDialog: FC<IModalDialogProps> = ({
  isModalOpened,
  handleClose,
  title,
  children,
  actions,
  // ...props
}) => (
  <Dialog
    open={isModalOpened}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        {children}
      </DialogContentText>
    </DialogContent>
    <DialogActions>{actions}</DialogActions>
  </Dialog>
);

export default ModalDialog;
