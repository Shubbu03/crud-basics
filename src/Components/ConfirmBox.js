import React, { forwardRef } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Fade,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";

// const Transition = forwardRef(function Transition(ref, props) {
//   return <Fade ref={ref} prop={props} />;
// });

function ConfirmBox({ open, closeDialog, data ,deleteFunc}) {
  return (
    <Dialog
      fullWidth
      open={open}
      maxWidth="md"
      scroll="body"
      onClose={closeDialog}
      onBackdropClick={closeDialog}
      //TransitionComponent={Transition}
    >
      <DialogContent sx={{ px: 8, py: 6, position: "relative" }}>
        <IconButton
          size="medium"
          onClick={closeDialog}
          sx={{ position: "absolute", right: "1rem", top: "1rem" }}
        >
          X
        </IconButton>

        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Box
              sx={{
                mb: 3,
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "column",
              }}
            >
              <Typography variant="h5">Delete {data}</Typography>

              <Typography variant="body1">
                Are you sure you want to delete this {data} ?
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sx={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}
          >
            <Button onClick={closeDialog} size="medium" variant="contained" color="primary">
              Cancel
            </Button>

            <Button onClick={deleteFunc} size="medium" variant="contained" color="error">
              Delete
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}

export default ConfirmBox;
