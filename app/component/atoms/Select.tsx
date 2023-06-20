import React from "react";
import { Select } from "@mantine/core";
export default function SelectNormal() {
  return (
    <div>
      <Select
       
        placeholder="Pick one"
        data={[
          { value: "react", label: "React" },
          { value: "ng", label: "Angular" },
          { value: "svelte", label: "Svelte" },
          { value: "vue", label: "Vue" },
        ]}
      />
    </div>
  );
}
