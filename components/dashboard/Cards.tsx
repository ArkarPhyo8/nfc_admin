import React from "react";
import DashboardUserNumber from "./UserNumber";
import DashboardCardNumber from "./CardNumber";
import DashboardSaleCardNumber from "./SaleCardNumber";

const DashboardCards = () => {
  return (
    <div className="grid grid-cols-3 gap-20">
      <DashboardUserNumber />
      <DashboardCardNumber />
      <DashboardSaleCardNumber />
    </div>
  );
};

export default DashboardCards;
