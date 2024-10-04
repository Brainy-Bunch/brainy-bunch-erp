"use client";

// authContext.tsx
import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import { getFirestore, doc, getDoc, collection } from "firebase/firestore"; // Import Firestore functions
import { fetchUserByUid } from "../utils/firebase/getUser";

export type TUser = {
  email: string;
  role: string;
  createdAt: string;
  phone: string;
  userId: string;
};

// Create a context for authentication
const AuthContext = createContext<{ user: TUser | null }>({ user: null });

// Provide AuthContext to the app
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [userState, setUser] = useState<TUser | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const userData = await fetchUserByUid(user.uid);
          if (userData) {
            setUser(userData as TUser);
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching user document: ", error);
        }
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user: userState }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);

