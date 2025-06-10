"use client";
import { Input } from "@/components/ui/input";
interface SearchInputProps {
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchInputKey: string;
  placeholder: string;
}
export default function SearchInput({
  handleInputChange,
  searchInputKey,
  placeholder,
}: SearchInputProps) {
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
