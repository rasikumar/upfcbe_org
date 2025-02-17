import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// import { statusOptions } from "@/utils/statusOptions";
import { toast } from "@/hooks/use-toast";

export function CreateEvents({ onCreate, success }) {
  const [name, setName] = useState("");
  const [date_time, setDateTime] = useState("");
  const [venue, setVenue] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("open");
  const [image, setImage] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Controls modal open state

  const startDateRef = useRef(null);
  // Reset form & close modal when success is true
  useEffect(() => {
    if (success) {
      setName("");
      setDateTime("");
      setVenue("");
      setDescription("");
      setStatus("open");
      setImage(null);
      setIsOpen(false);
    }
  }, [success]);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];

    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "Image size exceeds 5MB",
          description: "Please upload an image smaller than 5MB.",
        });

        // Reset file input
        e.target.value = "";
        setImage(null);
        return;
      }
      setImage(file);
    }

    if (file && file.type.startsWith("image/")) {
      setImage(file);
    } else {
      alert("Please upload a valid image file.");
    }
  };

  // Handle Form Submission
  const handleSubmit = () => {
    // Check if all required fields are filled
    if (!name || !date_time || !venue || !description || !status || !image) {
      toast({
        title: "All fields are required.",
      });
      return;
    }

    // Validate event name length
    if (name.length < 5) {
      toast({
        title: "Event name must be at least 5 characters long.",
      });
      return;
    }

    // Validate description length
    if (description.length < 20) {
      toast({
        title: "Description must be at least 20 characters long.",
      });
      return;
    }

    // If validation passes, proceed with submitting the form
    const eventData = { name, date_time, venue, description, status, image };

    if (onCreate) {
      onCreate(eventData);
    }
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="w-fit"
            onClick={() => setIsOpen(true)}
          >
            Create Event
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[550px] p-6 h-[30rem] overflow-y-scroll">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold">
              Create New Event
            </DialogTitle>
            <DialogDescription className="text-sm text-gray-500">
              Fill in the event details below. Click "Create Event" when you're
              ready.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-6 py-4">
            <div className="md:grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right text-sm font-medium">
                Name
              </Label>
              <Input
                id="name"
                placeholder="Enter event name"
                className="col-span-3 px-3 py-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="md:grid grid-cols-4 items-center gap-4">
              <Label
                htmlFor="date_time"
                className="text-right text-sm font-medium"
              >
                Date & Time
              </Label>
              <Input
                onClick={() => startDateRef.current.showPicker()}
                ref={startDateRef}
                id="date_time"
                type="datetime-local"
                className="col-span-3 px-3 py-2"
                value={date_time}
                onChange={(e) => setDateTime(e.target.value)}
              />
            </div>

            <div className="md:grid grid-cols-4 items-center gap-4">
              <Label htmlFor="venue" className="text-right text-sm font-medium">
                Venue
              </Label>
              <Input
                id="venue"
                placeholder="Enter venue"
                className="col-span-3 px-3 py-2"
                value={venue}
                onChange={(e) => setVenue(e.target.value)}
              />
            </div>

            <div className="md:flex float-right gap-2">
              <Label
                htmlFor="description"
                className="text-sm font-medium md:ml-10"
              >
                Description
              </Label>
              <ReactQuill
                value={description}
                onChange={setDescription}
                className="md:mb-16 ml-2"
              />
            </div>

            {/* <div className="md:grid grid-cols-4 items-center gap-4">
              <Label
                htmlFor="status"
                className="text-right text-sm font-medium"
              >
                Status
              </Label>
              <Select onValueChange={setStatus}>
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
            </div> */}

            <div className="md:grid grid-cols-4 items-center gap-4">
              <Label htmlFor="image" className="text-right text-sm font-medium">
                Image
              </Label>
              <Input
                id="image"
                type="file"
                className="col-span-3 px-3 py-2"
                onChange={handleImageChange}
              />

              {image && (
                <img
                  src={URL.createObjectURL(image)}
                  alt="News"
                  className="max-w-xs rounded-md shadow-md mt-2"
                />
              )}
            </div>
          </div>

          <DialogFooter className="mt-6 flex gap-4">
            <Button
              type="submit"
              className="w-full py-2 text-sm font-medium"
              onClick={handleSubmit}
            >
              Create Event
            </Button>
            <Button
              type="button"
              variant="outline"
              className="w-full py-2 text-sm font-medium"
              onClick={() => {
                if (!name || !date_time || !venue || !description || !image) {
                  toast({
                    title: "Please fill in all the fields before previewing.",
                  });
                  return;
                }
                setShowPreview(true);
              }}
            >
              Preview
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {showPreview && (
        <Dialog open={showPreview} onOpenChange={setShowPreview}>
          <DialogContent className="sm:max-w-[550px] p-6 overflow-y-scroll max-h-[50rem]">
            <DialogHeader>
              <DialogTitle className="text-lg font-semibold">
                Event Preview
              </DialogTitle>
            </DialogHeader>

            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <p className="text-2xl">{name || "N/A"}</p>
              </div>
              <div className="flex gap-4">
                <p className="text-sm">
                  {new Date(date_time).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
                <p className="text-sm">{venue || "N/A"}</p>
                <p className="text-sm">{status || "N/A"}</p>
              </div>
              {image && (
                <div className="flex justify-center">
                  <img
                    src={URL.createObjectURL(image)}
                    alt="Event"
                    className="max-w-xs rounded-md shadow-md"
                  />
                </div>
              )}
              <div className=" p-3 rounded-md">
                <div
                  className="mt-2 text-gray-700 text-sm"
                  dangerouslySetInnerHTML={{
                    __html: description || "<em>No description provided</em>",
                  }}
                />
              </div>
            </div>

            <DialogFooter>
              <Button variant="outline" onClick={() => setShowPreview(false)}>
                Close
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
