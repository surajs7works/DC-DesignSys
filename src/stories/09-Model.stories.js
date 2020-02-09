import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Button, LinkButton } from "../components/Button";


export default {
    title: "Model Dialog"
};


const Neutralbtn = {
    color: "black",
    background: "#fff"
  };
  

export function ModelDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open Model
      </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle>Model Title</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Let Google help apps determine location. This means sending anonymous location data to
                        Google, even when no apps are running.
          </DialogContentText>
                </DialogContent>
                <DialogActions>
                    {/* <Button color="primary">
                        Disagree
          </Button> */}
                    <Button style={Neutralbtn} onClick={handleClose}>
                        Close
  </Button>
                    <Button onClick={handleClose} autoFocus>
                        Button
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
