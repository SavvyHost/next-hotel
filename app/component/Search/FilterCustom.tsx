import { Drawer, ScrollArea } from "@mantine/core";
import { ReactNode } from "react";

type FilterCustom_TP = {
  children: ReactNode;
  isOpen: boolean;
  isClosed: () => void;
};

export default function FilterCustom({ children, isOpen, isClosed }:FilterCustom_TP) {

  return (
    <div>
      <Drawer
        opened={isOpen}
        onClose={isClosed}
        title="Header is sticky"
        scrollAreaComponent={ScrollArea.Autosize}
      >
        {children}
      </Drawer>
    </div>
  );
}
