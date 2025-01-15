import Trigger from "@/components/global/automations/trigger";
import AutomationsBredCrumb from "@/components/global/bread-crumbs/automations";
import { Warning } from "@/icons";
import React from "react";

type Props = {
  params: { id: string };
};

export default function page({ params }: Props) {
  return (
    <div className="flex flex-col items-center gap-y-20">
      <AutomationsBredCrumb id={params.id} />
      <div
        className="w-full lg:w-10/12 xl:w-6/12 p-5 rounded-xl flex
      flex-col bg-[#1D1D1D] gap-y-3"
      >
        <div className="flex gap-x-2">
          <Warning />
          when...
        </div>
        <Trigger id="" />
      </div>
    </div>
  );
}
