"use client";

import { useAuth } from "./context/authContext";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const user = useAuth();

  if (user) {
    console.log(user);
  } else {
    router.push("/auth/login");
  }

  return <div></div>;
}
