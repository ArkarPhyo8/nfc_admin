"use client";
import React, { useMemo, useState } from "react";
import CreateUserAccount from "./_components/CreateCard";
import SearchInput from "@/reusable/SearchInput";
import { debounce } from "lodash";
import { SaleManagementTable } from "./_components/Table";

const SaleManagementPage = () => {
  const [searchInputKey, setSearchInputKey] = useState("");
  const [searchKey, setSearchKey] = useState("");

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
    <div className="space-y-8">
      <div className="w-full flex items-center justify-between">
        <div>
          <h1 className="font-semibold text-2xl">Sale Management</h1>
          <p>View adn Manage sale cards in this page</p>
        </div>
        <div className="flex items-center gap-5">
          <SearchInput
            handleInputChange={handleInputChange}
            searchInputKey={searchInputKey}
            placeholder={"Search..."}
          />
          <CreateUserAccount />
        </div>
      </div>
      <SaleManagementTable searchKey={searchKey} />
    </div>
  );
};

export default SaleManagementPage;
