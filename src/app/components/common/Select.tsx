import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Option = {
  label: string;
  value: string | number;
};

interface CommonSelectProps {
  placeholder?: string;
  options: Option[];
  value?: string | number;
  onChange?: (value: string) => void;
  className?: string;
}

export function CommonSelect({
  placeholder = "Select option",
  options,
  value,
  onChange,
  className,
}: CommonSelectProps) {
  return (
    <Select value={value?.toString()} onValueChange={onChange}>
      <SelectTrigger className={className || "w-auto"}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value.toString()}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
