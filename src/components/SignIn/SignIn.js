import React, { useEffect } from "react";
import {
  TextField,
  CssBaseline,
  Button,
  Box,
  Container,
  Link,
  Avatar,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  changeEmail,
  changePassword,
  signin,
} from "../../redux/features/authSlice";

const SignIn = () => {
  const email = useSelector((state) => state.auth.email);
  const password = useSelector((state) => state.auth.password);
  const errorMsg = useSelector((state) => state.auth.errorMessage);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const dispatch = useDispatch();

  const handleEmailChange = (e) => {
    dispatch(changeEmail(e.currentTarget.value));
  };
  const handlePasswordChange = (e) => {
    dispatch(changePassword(e.currentTarget.value));
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    dispatch(signin({ email, password }));
  };

  return (
    <Container maxWidth="xs">
      <Box component="form" sx={{ mt: 8 }} onSubmit={handleSignInSubmit}>
        <Avatar sx={{ mx: "auto", bgcolor: "secondary.main" }}></Avatar>
        <Typography variant="h5" sx={{ textAlign: "center", mt: 1 }}>
          Sign-In
        </Typography>
        {errorMsg && (
          <Typography
            variant="h5"
            sx={{
              bgcolor: "error.main",
              color: "white",
              textAlign: "center",
              borderRadius: "10px",
            }}
          >
            {errorMsg}
          </Typography>
        )}
        <TextField
          fullWidth
          margin="normal"
          label="Email Address"
          required
          autoComplete="email"
          value={email}
          onChange={handleEmailChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Password"
          required
          type={"password"}
          value={password}
          onChange={handlePasswordChange}
        />
        <Button
          disabled={isLoading}
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 2 }}
        >
          Sign-In
        </Button>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 4,
          }}
        >
          <Link component={RouterLink} to="/forgotpassword">
            Forgot Password?
          </Link>
          <Link component={RouterLink} to="/signup">
            Don't have an account? Sign-Up
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default SignIn;
