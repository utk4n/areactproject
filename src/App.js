import { Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Home from "./components/Home/Home";
import AuthLayout from "./components/AuthLayout/AuthLayout";
import Layout from "./components/AuthLayout/Layout";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import HTML from './components/Pages/HTML'
import CSS from './components/Pages/CSS'
import Javascript from './components/Pages/Javascript'
import ReactJs from './components/Pages/ReactJs'
import FavPage from "./components/Pages/FavPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/html" element={<HTML />} />
          <Route path="/css" element={<CSS />} />
          <Route path="/javascript" element={<Javascript />} />
          <Route path="/reactjs" element={<ReactJs />} />
          <Route path="/myFavPage" element={<FavPage />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
