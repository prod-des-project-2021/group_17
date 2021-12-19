import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { connect } from 'react-redux';
import { ErrorActions } from '../stores/actions';

function AlertDialog(props) {
  const { error, clearError } = props;
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  React.useEffect(
    () => {
      if (error) {
        setMessage(error);
        setOpen(true);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [error]
  );

  const handleClose = () => {
    clearError();
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Note"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const mapStateToProps = ({ error }) => ({
  error: error.error
});

const mapDispatchToProps = {
  clearError: ErrorActions.clearError,
};

export default connect(mapStateToProps, mapDispatchToProps)(AlertDialog);



