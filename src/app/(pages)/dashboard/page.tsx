"use client";

import { getAuth } from "firebase/auth";
import app from "../../../../firebaseConfig";
import { useAuth } from "@/app/context/authContext";

const Page = () => {
  const { user } = useAuth();
  console.log(user);

  return (
    <main>
      <p>{}</p>
    </main>
  );
};

export default Page;
