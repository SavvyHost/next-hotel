"use client";
import { Checkbox } from "@mantine/core";

type CheckboxComp_TP = {
  label: string;
};

function CheckboxComp({ label }: CheckboxComp_TP) {
  return <Checkbox label={label} />;
}
export default CheckboxComp;
