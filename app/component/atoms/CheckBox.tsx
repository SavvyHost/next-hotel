"use client";
import { Checkbox } from "@mantine/core";

type CheckboxComp_TP = {
  label: string;
  className?: string;
  text?: string;
};

function CheckboxComp({ label, className, text }: CheckboxComp_TP) {
  return (
    <Checkbox
      label={
        <>
          <div className="flex justify-between align-middle">
            <p>{label}</p>
            <p className="text-gray-500">{text}</p>
          </div>
        </>
      }
      className={`${className} w-full`}
    />
  );
}
export default CheckboxComp;
