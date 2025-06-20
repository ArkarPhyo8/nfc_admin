"use client";
import { Input } from "@/components/ui/input";
import { debounce } from "lodash";
import { useMemo, useState } from "react";
interface SearchInputProps {
  setSearchKey: (searchKey: string) => void;
  placeholder: string;
}
export default function SearchInput({
  setSearchKey,
  placeholder,
}: SearchInputProps) {
  const [searchInputKey, setSearchInputKey] = useState("");

  const debouncedHandleSearchChange = useMemo(
    () =>
      debounce((query: string) => {
        setSearchKey(query);
      }, 500),
    [setSearchKey]
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputKey(event.target.value);
    debouncedHandleSearchChange(event.target.value);
  };
  return (
    <Input
      type="text"
      value={searchInputKey}
      onChange={handleInputChange}
      placeholder={placeholder}
      className="max-w-xl"
    />
  );
}
