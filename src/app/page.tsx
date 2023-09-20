"use client";
import { Button } from "flowbite-react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <main>
      {JSON.stringify(session)}
      <Button onClick={() => signIn("google")}>Click me</Button>
      <Button onClick={() => signOut()}>Click me</Button>
    </main>
  );
}
