import { useEffect, useState } from "react";
import DonationList from "@/components/Dashboard/DonationList";
import PaginationComponent from "@/components/PaginationComponent";
import DonationHook from "@/hooks/DonationHook";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import TableSkeleton from "@/components/loading/TableSkeleton";

const Donations = () => {
  const [itemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  // Filters state
  const [name, setName] = useState("");
  const [debouncedName, setDebouncedName] = useState(""); // Debounced search term
  const [status, setStatus] = useState("all"); // Default to "all"
  const [dateRange, setDateRange] = useState(undefined);

  // Fetch donations with filters
  const donationList = DonationHook(
    currentPage,
    itemsPerPage,
    debouncedName,
    status === "all" ? "" : status, // Convert "all" to an empty string for filtering
    dateRange?.to ? format(dateRange.to, "yyyy-MM-dd") : "",
    dateRange?.from ? format(dateRange.from, "yyyy-MM-dd") : ""
  );

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedName(name);
    }, 500); // Waits 500ms before updating

    return () => clearTimeout(handler);
  }, [name]);

  const { DonationData, DonationError, isDonationError, isDonationLoading } =
    donationList;

  if (isDonationError)
    return <h1>{DonationError?.message || "Error loading data"}</h1>;

  const DonationLists = DonationData?.payments || [];
  const totalPages = Math.ceil((DonationData?.total || 0) / itemsPerPage);

  return (
    <div className="flex flex-col gap-4">
      {/* Filters Section */}
      <div className="flex gap-4 p-4 bg-gray-100 rounded-lg w-full">
        <Input
          type="text"
          placeholder="Search by Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 border rounded-md w-1/4"
        />
        <Select value={status} onValueChange={setStatus}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="failure">Failure</SelectItem>
              <SelectItem value="success">Success</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        {/* Date Range Picker */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant="outline"
              className="w-[300px] justify-start text-left font-normal"
            >
              <CalendarIcon className="mr-2" />
              {dateRange?.from ? (
                dateRange.to ? (
                  <>
                    {format(dateRange.from, "LLL dd, y")} -{" "}
                    {format(dateRange.to, "LLL dd, y")}
                  </>
                ) : (
                  format(dateRange.from, "LLL dd, y")
                )
              ) : (
                <span>Pick a date range</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={dateRange?.from}
              selected={dateRange}
              onSelect={setDateRange}
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>

        <Button
          onClick={() => {
            setName("");
            setStatus("all");
            setDateRange(undefined);
            setCurrentPage(1);
          }}
        >
          Clear Filters
        </Button>
      </div>

      {/* Donation List */}
      {isDonationLoading ? (
        <TableSkeleton />
      ) : (
        <DonationList data={DonationLists} />
      )}

      {/* Pagination */}
      <PaginationComponent
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Donations;
