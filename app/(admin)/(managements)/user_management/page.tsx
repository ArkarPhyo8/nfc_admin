"use client";
import React, { useState } from "react";
import CreateUserAccount from "./_components/CreateUser";
import SearchInput from "@/reusable/SearchInput";
import { UserTable } from "./_components/Table";

const UserManagementPage = () => {
  const [searchKey, setSearchKey] = useState("")

  return (
    <div className="space-y-8">
      <div className="w-full flex items-center justify-between">
        <div>
          <h1 className="font-semibold text-2xl">User Management</h1>
          <p>View adn Manage user in this page</p>
        </div>
        <div className="flex items-center gap-5">
          <SearchInput
            setSearchKey={setSearchKey}
            placeholder={"Search..."}
          />
          <CreateUserAccount />
        </div>
      </div>
      <UserTable searchKey={searchKey} />
    </div>
  );
};

export default UserManagementPage;
