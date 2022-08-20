import {
  TextField,
  Button,
  Box,
  Container,
  Link,
  Avatar,
  Typography,
} from "@mui/material";

import { Link as RouterLink} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  changeName,
  changeEmail,
  changePassword,
  signup,
} from "../../redux/features/authSlice";

const SignUp = () => {
  const name = useSelector((state) => state.auth.name);
  const email = useSelector((state) => state.auth.email);
  const password = useSelector((state) => state.auth.password);
  const errorMsg = useSelector((state) => state.auth.errorMessage);
  const isLoading = useSelector((state) => state.auth.isLoading);

  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    dispatch(changeName(e.currentTarget.value));
  };
  const handleEmailChange = (e) => {
    dispatch(changeEmail(e.currentTarget.value));
  };
  const handlePasswordChange = (e) => {
    dispatch(changePassword(e.currentTarget.value));
  };

  const signupHandle = (e) => {
    e.preventDefault();
    dispatch(signup({ name, email, password }));
  };

  return (
    <Container maxWidth="xs">
      <Box component="form" sx={{ mt: 8 }}>
        <Avatar sx={{ mx: "auto", bgcolor: "secondary.main" }}></Avatar>
        <Typography variant="h5" sx={{ textAlign: "center", mt: 1 }}>
          Sign-Up
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
          label="Full Name"
          type={"text"}
          value={name}
          required
          onChange={handleNameChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Email Address"
          value={email}
          required
          autoComplete="email"
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
          type="submit"
          onClick={signupHandle}
          fullWidth
          variant="contained"
          sx={{ mt: 2 }}
          disabled={isLoading}
        >
          Sign-Up
        </Button>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 4,
          }}
        >
          <Link component={RouterLink} to="/signin">Already have an account? Sign-In</Link>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
