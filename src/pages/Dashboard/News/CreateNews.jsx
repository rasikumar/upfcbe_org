import { useState, useEffect } from "react";
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
import { toast } from "@/hooks/use-toast";
import QuillEditor from "@/lib/QuillEditor";

export function CreateNews({ onCreate, success }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (success) {
      setTitle("");
      setDescription("");
      setText("");
      setImage(null);
      setIsOpen(false);
    }
  }, [success]);

  const handleSubmit = () => {
    // Basic validation
    if (!title || !text || !description) {
      alert("Title, Text, and Description are required!");
      return;
    }

    const newsData = { title, text, description, image };
    if (onCreate) {
      onCreate(newsData);
    }
    setShowPreview(false); // Close preview after submission
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];

    // Validate image size
    if (file && file.size > 5 * 1024 * 1024) {
      toast({
        title: "Image size exceeds 5MB",
        description: "Please upload an image smaller than 5MB.",
      });
      e.target.value = ""; // Reset file input
      setImage(null); // Reset image state
      return;
    }

    // Check if the file is an image
    if (file && file.type.startsWith("image/")) {
      setImage(file);
    } else {
      alert("Please upload a valid image file.");
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
            Create News
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[550px] p-6 h-[30rem] overflow-y-scroll">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold">
              Create News Article
            </DialogTitle>
            <DialogDescription className="text-sm text-gray-500">
              Fill in the details below. Click "Publish News" when you're ready.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-6 py-4">
            <div className="md:grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right text-sm font-medium">
                Title
              </Label>
              <Input
                id="title"
                placeholder="Enter news title"
                className="col-span-3 px-3 py-2"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="md:grid grid-cols-4 items-center gap-4">
              <Label htmlFor="text" className="text-right text-sm font-medium">
                Text
              </Label>
              <Input
                id="text"
                placeholder="Enter news text"
                className="col-span-3 px-3 py-2"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>

            <div className="md:flex float-right gap-2">
              <Label
                htmlFor="description"
                className="text-sm font-medium md:ml-10"
              >
                Description
              </Label>
              <QuillEditor
                value={description}
                onChange={setDescription}
                className="md:mb-16 ml-2"
              />
            </div>

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
              Publish News
            </Button>
            <Button
              type="button"
              variant="outline"
              className="w-full py-2 text-sm font-medium"
              onClick={() => {
                if (!text || !description || !image || !title) {
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
                News Preview
              </DialogTitle>
            </DialogHeader>

            <div className="grid gap-4">
              <p className="text-2xl font-semibold">{title || "N/A"}</p>
              {image && (
                <div className="flex justify-center">
                  <img
                    src={URL.createObjectURL(image)}
                    alt="News"
                    className="max-w-xs rounded-md shadow-md"
                  />
                </div>
              )}
              <div className="p-3 rounded-md">
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
