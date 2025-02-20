import { getAllDonation } from "@/api/Donation";
import { useQuery } from "@tanstack/react-query";

const DonationHook = (
  currentpage,
  itemPerPage,
  name,
  status,
  toDate,
  fromDate
) => {
  // console.log(name);
  // console.log(status);
  // console.log(fromDate);
  // console.log(toDate);
  const {
    data: DonationData,
    isError: isDonationError,
    isLoading: isDonationLoading,
    error: DonationError,
  } = useQuery({
    queryKey: [
      "donation",
      currentpage,
      itemPerPage,
      status,
      toDate,
      fromDate,
      name,
    ],
    queryFn: () =>
      getAllDonation(currentpage, itemPerPage, name, status, toDate, fromDate),
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
