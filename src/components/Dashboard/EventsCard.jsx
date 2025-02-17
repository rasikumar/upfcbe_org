import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PHOTOS } from "@/utils/api";

const EventsCard = ({
  description,
  image,
  name,
  status,
  venue,
  onView,
  onDelete,
  id,
}) => {
  return (
    <Card className="overflow-hidden border transition-transform duration-300 hover:border-emerald-300 relative">
      <img
        src={`${PHOTOS}${image}`}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 mb-2">
          {name}
        </h3>

        <div
          dangerouslySetInnerHTML={{
            __html: description || "<em>No description provided</em>",
          }}
          className="line-clamp-4"
        />
        <p className="text-sm text-gray-500 mt-1">{venue}</p>
        <span
          className={`inline-block mt-2 px-3 py-1 text-xs font-semibold rounded-full ${
            status.toLowerCase() === "upcoming"
              ? "bg-blue-100 text-blue-700"
              : status.toLowerCase() === "ongoing"
              ? "bg-green-100 text-green-700"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {status}
        </span>
      </CardContent>

      {/* Dropdown Menu */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            size="icon"
            className="absolute top-4 right-4"
          >
            &#8942;
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => onView(id)}>View</DropdownMenuItem>
          <DropdownMenuItem
            className="text-red-600"
            onClick={() => onDelete(id)}
          >
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Card>
  );
};

export default EventsCard;
