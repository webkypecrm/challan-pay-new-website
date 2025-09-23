import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-auto">
        <SelectValue placeholder="Select Vehicals" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="apple">0-10</SelectItem>
          <SelectItem value="banana">10-20</SelectItem>
          <SelectItem value="blueberry">20-30</SelectItem>
          <SelectItem value="grapes">30+</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
