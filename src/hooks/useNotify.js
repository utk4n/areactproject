import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useNotify = () => {
  const notifySuccess = () =>
    toast.success(" New post added ๐.", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    const notifyLogin = () =>
    toast.success(" Sign-In Success ๐.", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const notifyRemove = () =>
    toast.success(" Removed ๐๏ธ.", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const notifyError = () =>
    toast.error("Fill in the all blanks ๐จ!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    const notifyAlready = () =>
    toast.error("Already Favourited ๐จ!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const notifyLike = () =>
    toast.success("Favourited๐.", {
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
