import Loader from "@/components/global/loader";
import React from "react";

type Props = {};

export default function Loading({}: Props) {
  return (
    <div className="h-screen flex justify-center items-center">
      <Loader state className={""}>
        ...Loading
      </Loader>
    </div>
  );
}
