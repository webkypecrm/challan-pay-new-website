"use client";
import Header from "./Header";
//import AuthHeader from "./AuthHeader";
import { useAuth } from "@/context/AuthContext";

export default function ConditionalHeader() {
  const { user } = useAuth();
  // console.log(user);
  if (user?.subscriber?.name) return <Header />;
  return <Header />;
}
