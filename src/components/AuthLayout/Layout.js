import { useState } from "react";
import { useIsLoggedIn } from "../../hooks/useIsLoggedIn";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { Navigate, Outlet } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  Avatar,
  Box,
  DialogActions,
  Button,
  DialogContentText,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { signout } from "../../redux/features/authSlice";
import AccountBoxRounded from "@mui/icons-material/AccountBoxRounded";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(null);
  const [dialogueIsOpen, setDialogueIsOpen] = useState(false);
  const [confirmSignOut, setConfirmSignOut] = useState(false);
  const currentUser = useCurrentUser();
  const isLoggedIn = useIsLoggedIn();
  const dispatch = useDispatch();

  if (isLoggedIn === null) {
    return <h1>Loading...</h1>;
  } else if (!isLoggedIn) {
    return <Navigate replace to="/signin" />;
  }

  const signOutBtn = () => {
    dispatch(signout());
  };

  return (
    <>
      <AppBar >
        <Toolbar  sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h4">Home</Typography>
          <IconButton
            size="large"
            sx={{ color: "white" }}
            onClick={(e) => setIsOpen(e.target)}
          >
            <AccountBoxRounded size="large" />
          </IconButton>
          <Menu
            open={Boolean(isOpen)}
            anchorEl={isOpen}
            onClose={() => setIsOpen(null)}
          >
            <MenuItem
              onClick={() => {
                setIsOpen(null);
                setDialogueIsOpen((prev) => !prev);
              }}
            >
              Profile
            </MenuItem>
            <MenuItem
              onClick={() => {
                setIsOpen(null);
                setConfirmSignOut((prev) => !prev);
              }}
            >
              Sign Out
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Dialog
        open={dialogueIsOpen}
        onClose={() => setDialogueIsOpen((prev) => !prev)}
      >
        <DialogTitle> Profile </DialogTitle>
        <DialogContent dividers>
          <Box display="flex" alignItems={"center"}>
            <Avatar />
            <Box ml={3}>
              <Typography>Display Name:</Typography>
              <Typography>{currentUser.email}</Typography>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogueIsOpen((prev) => !prev)}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={confirmSignOut}
        onClose={() => setConfirmSignOut((prev) => !prev)}
      >
        <DialogContent>
          <DialogTitle mt={2}>
            <DialogContentText>Do You Want to Sign Out ?</DialogContentText>
            <DialogActions>
              <Button
                variant="contained"
                color="error"
                onClick={() => {
                  setConfirmSignOut((prev) => !prev);
                  signOutBtn();
                }}
              >
                Yes
              </Button>
              <Button
              variant="contained"
              color="success"
               onClick={() => setConfirmSignOut((prev) => !prev)}>
                Cancel
              </Button>
            </DialogActions>
          </DialogTitle>
        </DialogContent>
      </Dialog>
      <Outlet />
    </>
  );
};

export default Layout;
