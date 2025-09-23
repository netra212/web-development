"use client";
import { getServerSession } from "next-auth";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  return (
    <SessionProvider>
      <RealHome></RealHome>
    </SessionProvider>
  );
}

async function RealHome() {
  // session hook is used to check either the user is sign in or not.
  const session = useSession();
  const session1 = await getServerSession();

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      {session.status === "authenticated" && (
        <button onClick={() => signOut()}>Sign out</button>
      )}

      {session.status === "unauthenticated" && (
        <button onClick={() => {signIn();}}>Sign in</button>
      )}
    </div>
  );
}
