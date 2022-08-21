import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useNotify = () => {
  const notifySuccess = () =>
    toast.success(" New post added 😊.", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    const notifyLogin = () =>
    toast.success(" Sign-In Success 😊.", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const notifyRemove = () =>
    toast.success(" Removed 🗑️.", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const notifyError = () =>
    toast.error("Fill in the all blanks 🚨!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    const notifyAlready = () =>
    toast.error("Already Favourited 🚨!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const notifyLike = () =>
    toast.success("Favourited💗.", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return {
    notifySuccess,
    notifyRemove,
    notifyError,
    notifyLike,
    notifyAlready,
    notifyLogin
  };
};

export default useNotify;
