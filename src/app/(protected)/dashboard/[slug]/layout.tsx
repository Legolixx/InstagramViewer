import Sidebar from "@/components/global/sidebar";
import React from "react";

type LayoutProps = {
  children: React.ReactNode;
  params: { slug: string };
};

const Layout = ({ children, params }: LayoutProps) => {
  return (
    <div className="p-3">
      {/* SideBar */}
      <Sidebar slug={params.slug} />
      {/* NavBar */}
    </div>
  );
};

export default Layout;
