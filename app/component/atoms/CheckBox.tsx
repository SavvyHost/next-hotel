"use client";
import { Checkbox } from "@mantine/core";

type CheckboxComp_TP = {
  label: string
  className?:string
}

function CheckboxComp({ label, className }: CheckboxComp_TP) {
  return <Checkbox label={label} className={className} />
}
export default CheckboxComp;
