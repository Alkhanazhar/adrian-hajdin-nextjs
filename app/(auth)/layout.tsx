import Logo from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import React, { ReactNode } from "react";
import { CgGoogle } from "react-icons/cg";
import { FiGithub } from "react-icons/fi";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <main className="border-dashed border-r border-l min-h-screen max-w-5xl flex flex-col items-center justify-center mx-auto p-12">
        <section className="p-6 border-dashed rounded-2 shadow-card background-light900_dark200 space-y-4">
          <div className="flex justify-center items-center">
            <Logo text="join" />
          </div>
          <p className="font-[300] text-[12px] text-center">
            A platform created by developers, for developers <br /> -- to help
            developers grow.
          </p>
          {children}
          <div className="flex gap-4 mt-4">
            <Button>
              <FiGithub />
              Sign in with Github
            </Button>
            <Button>
              <CgGoogle className="text-red-800" />
              Sign in with Google
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default layout;
