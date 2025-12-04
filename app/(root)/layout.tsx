import Navbar from "@/components/shared/Navbar";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      <main className="border-dashed border-r border-l min-h-screen max-w-3xl mx-auto p-8">
        {children}
      </main>
    </div>
  );
};

export default layout;
