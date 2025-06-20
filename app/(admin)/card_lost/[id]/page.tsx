import { redirect } from "next/navigation";
import CardClose from "./CardClose";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id:cardID } = await params;
  if (!cardID) {
    redirect("/card_lost");
  }
  if (cardID) {
    return <CardClose cardID={cardID} />;
  }
};

export default page;
