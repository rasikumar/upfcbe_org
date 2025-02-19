import { getAllDonation } from "@/api/Donation";
import { useQuery } from "@tanstack/react-query";

const DonationHook = () => {
  const {
    data: DonationData,
    isError: isDonationError,
    isLoading: isDonationLoading,
    error: DonationError,
  } = useQuery({
    queryKey: ["donation"],
    queryFn: () => getAllDonation(),
    staleTime: 60 * 1000, // 1 minute
  });
  return {
    DonationData,
    isDonationError,
    isDonationLoading,
    DonationError,
  };
};

export default DonationHook;
