import React from "react";

type Props = {
  title: string;
  description: string;
  icon: React.ReactNode;
  strategy: "INSTAGRAM" | "CRM";
};

function IntegrationCard({ description, icon, strategy, title }: Props) {
  return <div>IntegrationCard</div>;
}

export default IntegrationCard;
