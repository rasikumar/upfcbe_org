import DonationList from "@/components/Dashboard/DonationList";
import DonationHook from "@/hooks/DonationHook";

const Donations = () => {
  const donationList = DonationHook();

  const { DonationData, DonationError, isDonationError, isDonationLoading } =
    donationList;

  const DonationLists = DonationData?.payments;
  // console.log(DonationData);

  return (
    <div>
      <DonationList data={DonationLists} />
    </div>
  );
};

export default Donations;
