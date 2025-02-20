import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const DonationList = ({ data }) => {
  // console.log(data);
  return (
    <>
      <h2 className="inline-flex flex-col text-xl">
        Welcome back!{" "}
        <span className="text-base">Here's a list of your Donation</span>
      </h2>
      <Table>
        <TableCaption>A list of your recent Donations.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>TaxID</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Reason</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        {data && data.length > 0 ? (
          data.map((d) => (
            <TableRow key={d.id}>
              <TableCell className="font-medium flex flex-col">
                <span>{d.name}</span>
                <span className="text-sm">{d.email}</span>
              </TableCell>
              <TableCell className="font-medium">{d.txnid}</TableCell>
              <TableCell>{d.status}</TableCell>
              <TableCell>{d.reason}</TableCell>
              <TableCell>{d.amount}</TableCell>
              <TableCell>
                {new Date(d.created_at).toLocaleDateString("en-IN")}
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={5} className="text-center">
              No donations found.
            </TableCell>
          </TableRow>
        )}
      </Table>
    </>
  );
};

export default DonationList;
