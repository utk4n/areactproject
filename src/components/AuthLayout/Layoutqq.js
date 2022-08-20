import { useState } from "react";
import { useIsLoggedIn } from "../../hooks/useIsLoggedIn";
import { Navigate, Outlet } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle
} from "@mui/material";
import AccountBoxRounded from "@mui/icons-material/AccountBoxRounded";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(null);
  const isLoggedIn = useIsLoggedIn();

  if (isLoggedIn === null) {
    return <h1>Loading...</h1>;
  } else if (!isLoggedIn) {
    return <Navigate replace to="/signin" />;
  }

  return (
    <>
      <AppBar position="absolute">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
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
            <MenuItem onClick={() => setIsOpen(null)}>Profile</MenuItem>
            <MenuItem onClick={() => setIsOpen(null)}>Sign Out</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Dialog>
        <DialogTitle open={true}></DialogTitle>
      </Dialog>
      <Outlet />
    </>
  );
};

export default Layout;
