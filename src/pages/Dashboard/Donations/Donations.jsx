import DonationList from "@/components/Dashboard/DonationList";
import PaginationComponent from "@/components/PaginationComponent";
import DonationHook from "@/hooks/DonationHook";
import { useState } from "react";

const Donations = () => {
  const [itemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const donationList = DonationHook(currentPage, itemsPerPage, setCurrentPage);

  const { DonationData, DonationError, isDonationError, isDonationLoading } =
    donationList;

  if (isDonationError) return <h1>{DonationError}</h1>;
  if (isDonationLoading) return <h1>Loading...</h1>;

  const DonationLists = DonationData?.payments;
  const totalpages = Math.ceil((DonationData?.total || 0) / itemsPerPage);
  // console.log(DonationData);

  return (
    <div className="flex flex-col gap-4">
      <DonationList data={DonationLists} />
      <PaginationComponent
        totalPages={totalpages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Donations;
