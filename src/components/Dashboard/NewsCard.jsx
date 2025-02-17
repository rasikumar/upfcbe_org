import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PHOTOS } from "@/utils/api";

const NewsCard = ({
  title,
  image,
  description,
  text,
  onView,
  onDelete,
  id,
}) => {
  return (
    <Card className="overflow-hidden border transition-transform duration-300 hover:border-emerald-300 relative">
      <img
        className="w-full h-48 object-cover rounded-md"
        src={`${PHOTOS}${image}`}
        alt={title}
      />
      <CardContent className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: description || "<em>No description provided</em>",
          }}
          className="line-clamp-4"
        />
        <p className="text-gray-700 mt-2">{text}</p>
      </CardContent>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            // variant="ghost"
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

export default NewsCard;
