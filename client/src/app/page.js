"use client";
import { Button } from "@/components/ui/button";

import { signOut } from "next-auth/react";

export default function Home() {
  return (
    <>
      <div>Home page</div>
      <Button onClick={() => signOut()} className='bg-blue-500 text-white p-2 rounded'>Sign out</Button>
    </>
  );
}
