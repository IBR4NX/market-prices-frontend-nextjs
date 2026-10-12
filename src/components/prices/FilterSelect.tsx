import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { FilterOption } from "@/components/catalog/types";

const ALL_VALUE = " ";

interface FilterSelectProps {
  id: string;
  label: string;
  allLabel: string;
  options: FilterOption[];
  value: string;
  onChange: (value: string) => void;
  getOptionValue?: (option: FilterOption) => string;
}

export function FilterSelect({
  id,
  label,
  allLabel,
  options,
  value,
  onChange,
  getOptionValue = (option) => option.id,
}: FilterSelectProps) {
  return (
    <div className="col-span-2">
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">
        {label}
      </label>
      <Select items={options.map((option)=>({label:option.name,value:getOptionValue(option)}))}
        onValueChange={(nextValue) =>
          onChange(nextValue === ALL_VALUE ? "" : (nextValue ?? ""))
        }
        defaultValue={value || ALL_VALUE}
      >
        <SelectTrigger id={id} className="h-10 w-full">
          <SelectValue placeholder={allLabel} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => {
            const optionValue = getOptionValue(option);

            return (
            <SelectItem key={option.id} value={optionValue}>
              {option.name} {}
            </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
}

