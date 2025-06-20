
import { CardLossTable } from "./_components/Table";


const CardLostManagementPage = () => {

  return (
    <div className="space-y-8">
      <div className="w-full flex items-center justify-between">
        <div>
          <h1 className="font-semibold text-2xl">Card Loss Management</h1>
          <p>View adn Manage cards in this page</p>
        </div>
      </div>
      <CardLossTable />
    </div>
  );
};

export default CardLostManagementPage;
