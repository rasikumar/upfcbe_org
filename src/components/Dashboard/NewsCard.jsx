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
    <Card className="max-w-sm bg-white shadow-md rounded-lg overflow-hidden p-4 border border-gray-200">
      <img
        className="w-full h-48 object-cover rounded-md"
        src={`${PHOTOS}${image}`}
        alt={title}
      />
      <CardContent className="mt-3">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-1">{description}</p>
        <p className="text-gray-700 mt-2">{text}</p>
      </CardContent>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
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
