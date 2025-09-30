"use client";

import { XIcon } from "lucide-react";
import { useState } from "react";

import { cn } from "@/utils/cn";
import Button from "./Button";

interface ISidePanelProps {
  children: React.ReactNode;
  title: string;
  Trigger: React.FC<React.ComponentProps<"button">>;
}

const SidePanel = ({ children, title, Trigger }: ISidePanelProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const closePanel = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Trigger onClick={() => setIsOpen(true)} />

      {/* Overlay */}
      <div
        className={cn(
          "bg-opacity-50 fixed inset-0 z-40 bg-black transition-opacity duration-500",
          {
            "pointer-events-auto opacity-50": isOpen,
            "pointer-events-none opacity-0": !isOpen,
          },
        )}
        onClick={closePanel}
      ></div>

      {/* Sidepanel */}
      <div
        className={cn(
          "bg-background fixed top-0 right-0 z-50 h-full w-[90%] overflow-y-auto transition-transform duration-500 sm:w-100",
          {
            "translate-x-0": isOpen,
            "translate-x-full": !isOpen,
          },
        )}
      >
        {/* Sidepanel header */}
        <div className="border-secondary flex items-center justify-between border-b p-4">
          <h2 className="text-lg font-bold">{title}</h2>

          <Button onClick={closePanel} size="icon" variant="secondary">
            <XIcon />
          </Button>
        </div>

        {/* Sidepanel body */}
        <div className="p-4">
          <div>{children}</div>
        </div>
      </div>
    </>
  );
};

export default SidePanel;
