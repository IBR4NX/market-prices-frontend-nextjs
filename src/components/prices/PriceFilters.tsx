import { RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { FilterOption, PriceFiltersValue } from "@/components/catalog/types";

import { FilterSelect } from "@/components/prices/FilterSelect";
import { SearchFilter } from "./ProductSearch";
import { AppSelect } from "./select";

interface PriceFiltersProps {
  filters: PriceFiltersValue;
  cities: FilterOption[];
  categories: FilterOption[];
  onChange: (changes: Partial<PriceFiltersValue>) => void;
  onClear: () => void;
}

export function PriceFilters({
  filters,
  cities,
  categories,
  onChange,
  onClear,
}: PriceFiltersProps) {
  const hasActiveFilters = Boolean(
    filters.search || filters.city || filters.category,
  );
  console.log("filters", filters);
  return (
    <Card className="mb-6 py-4 shadow-sm">
      <CardContent className=" grid grid-cols-4 gap-2 md:grid-cols-4 relative">
        <SearchFilter
          value={filters.search}
          onChange={(search) => onChange({ search })}
        />
        <FilterSelect
          id="city-filter"
          label="المدينة"
          allLabel="كل المدن"
          options={cities ?? []}
          value={"تعز"}
          onChange={(cityName) => onChange({ city: cityName })}
          getOptionValue={(city) => city.slug}
          />
        <FilterSelect
          id="category-filter"
          label="الفئة"
          allLabel="كل الفئات"
          options={categories}
          value={filters.category}
          onChange={(categoryName) => onChange({ category: categoryName })}
          getOptionValue={(category) => category.name}
          />
          {hasActiveFilters && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={onClear}
              className="  self-top "
            >
              <RotateCcw />
              إعادة تعيين
            </Button>
          )}
      </CardContent>
    </Card>
  );
}
