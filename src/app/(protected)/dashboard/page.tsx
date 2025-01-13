import { UserButton } from "@clerk/nextjs";
import React from "react";

export default function DashBoardPage() {
  return (
    <div>
      <h1>DashBoardPage</h1>
      <UserButton />
    </div>
  );
}
