import { useEffect, useState } from "react";

import { auth } from "../firebase/firebaseConfigs";

import { onAuthStateChanged } from "firebase/auth";

export const useCurrentUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  return user;
};
