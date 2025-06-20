"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import CardRegister from "./_components/CardRegister";
import AllCard from "./_components/all_card/AllCard";
import AvailableCards from "./_components/available_card/AvailableCards";
import SoldCards from "./_components/sold_card/SoldCards";

const CardManagementPage = () => {
  const [activeTab, setActiveTab] = useState("allCard");

  return (
    <div>
      <div className="space-y-8">
        <div className="w-full flex items-center justify-between">
          <div>
            <h1 className="font-semibold text-2xl">Card Management</h1>
            <p>View adn Manage cards in this page</p>
          </div>

          <CardRegister />
        </div>
        <div className="border-b border-t-border py-2 flex gap-4">
          <Button
            variant={activeTab === "allCard" ? "default" : "outline"}
            onClick={() => setActiveTab("allCard")}
            className="cursor-pointer"
          >
            <span>All Card</span>
          </Button>
          <Button
            variant={activeTab === "available" ? "default" : "outline"}
            onClick={() => setActiveTab("available")}
            className="cursor-pointer"
          >
            <span>Available Cards</span>
          </Button>
          <Button
            variant={activeTab === "sold" ? "default" : "outline"}
            onClick={() => setActiveTab("sold")}
            className="cursor-pointer"
          >
            <span>Sold Cards</span>
          </Button>
        </div>

        {activeTab === "allCard" ? (
          <AllCard />
        ) : activeTab === "available" ? (
          <AvailableCards />
        ) : (
          <SoldCards />
        )}
      </div>
    </div>
  );
};

export default CardManagementPage;
