import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { statusOptions } from "@/utils/statusOptions";
import { PHOTOS } from "@/utils/api";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import QuillEditor from "@/lib/QuillEditor";

const ViewEvent = ({
  event,
  onUpdate,
  successs, // success indicator
  isModalOpen,
  setIsModalOpen,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [venue, setVenue] = useState("");
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const startDateRef = useRef(null);

  // Function to format date-time for input field
  const formatDateTime = (dateTime) => {
    if (!dateTime) return "";
    const date = new Date(dateTime);
    return date.toISOString().slice(0, 16); // Convert to YYYY-MM-DDTHH:MM format
  };

  // Update state when `event` prop changes
  useEffect(() => {
    if (event) {
      setName(event.name || "");
      setDateTime(formatDateTime(event.date_time));
      setVenue(event.venue || "");
      setStatus(event.status || "");
      setDescription(event.description || "");
      setImage(event.image || null);
    }
  }, [event]);

  // Close modal if update is successful
  useEffect(() => {
    if (successs) {
      setIsModalOpen(false); // Close only if changes were saved
    }
  }, [successs, setIsModalOpen]);

  const handleSaveChanges = () => {
    const updatedEvent = {
      id: event.id, // Ensure ID is included for backend reference
      name,
      date_time: new Date(dateTime).toISOString(),
      venue,
      status,
      description,
      image, // You may need to handle file upload separately
    };
    onUpdate(updatedEvent); // Send updated data to the parent component
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogContent className="sm:max-w-[550px] p-6 overflow-y-scroll">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">
            {isEdit ? "Edit The Event" : "Event Details"}
          </DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 overflow-y-scroll max-h-96">
          {isEdit ? (
            <div className="flex flex-col gap-y-4">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <Label htmlFor="date_time">Date & Time</Label>
              <Input
                onClick={() => startDateRef.current.showPicker()}
                ref={startDateRef}
                id="date_time"
                type="datetime-local"
                value={dateTime}
                onChange={(e) => setDateTime(e.target.value)}
              />

              <Label htmlFor="venue">Venue</Label>
              <Input
                id="venue"
                value={venue}
                onChange={(e) => setVenue(e.target.value)}
              />

              <Label htmlFor="status">Status</Label>
              <Select onValueChange={setStatus} value={status || ""}>
                <SelectTrigger className="col-span-3 px-3 py-2">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  {statusOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Label htmlFor="description">Description</Label>
              <QuillEditor
                value={description}
                onChange={setDescription}
                className="min-h-56 mb-10"
              />

              <Label htmlFor="image">Image</Label>
              <Input
                id="image"
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
              />
              {image && (
                <div className="flex justify-center">
                  <img
                    src={
                      typeof image === "string"
                        ? `${PHOTOS}${image}`
                        : URL.createObjectURL(image)
                    }
                    alt="Event"
                    className="max-w-xs rounded-md shadow-md"
                  />
                </div>
              )}
            </div>
          ) : (
            <>
              <p className="text-2xl">{event?.name || "N/A"}</p>
              <div className="flex gap-4">
                <p className="text-sm">
                  {event?.date_time
                    ? new Date(event.date_time).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "numeric",
                        minute: "2-digit",
                      })
                    : "N/A"}
                </p>
                <p className="text-sm">{event?.venue || "N/A"}</p>
                <p className="text-sm">{event?.status || "N/A"}</p>
              </div>
              {event?.image && (
                <div className="flex justify-center">
                  <img
                    src={`${PHOTOS}${event.image}`}
                    alt="Event"
                    className="max-w-xs rounded-md shadow-md"
                  />
                </div>
              )}
              <div
                className="mt-2 text-gray-700 text-sm"
                dangerouslySetInnerHTML={{
                  __html:
                    event?.description || "<em>No description provided</em>",
                }}
              />
            </>
          )}
        </div>

        <DialogFooter className="mt-6 flex gap-4">
          {isEdit ? (
            <>
              <Button className="w-full" onClick={handleSaveChanges}>
                Save Changes
              </Button>
              <Button
                className="w-full"
                variant="outline"
                onClick={() => setIsEdit(false)}
              >
                Cancel
              </Button>
            </>
          ) : (
            <Button onClick={() => setIsEdit(true)}>Edit Event</Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ViewEvent;
