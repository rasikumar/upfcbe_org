import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { PHOTOS } from "@/utils/api";

const EditNews = ({ news, onUpdate, setIsEdit }) => {
  const [title, setTitle] = useState(news.title);
  const [text, setText] = useState(news.text);
  const [description, setDescription] = useState(news.description);
  const [image, setImage] = useState(news.image);

  const handleSaveChanges = async () => {
    const updatedNews = {
      id: news.id, // Ensure ID is included for backend reference
      title,
      text,
      description,
      image,
    };
    await onUpdate(updatedNews);
  };

  return (
    <>
      <Label htmlFor="title">Title</Label>
      <Input
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Label htmlFor="text">Text</Label>
      <Input
        id="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <Label htmlFor="description">Description</Label>
      <ReactQuill
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
            alt="news"
            className="max-w-xs rounded-md shadow-md"
          />
        </div>
      )}
      <Button className="w-full mt-4" onClick={handleSaveChanges}>
        Save Changes
      </Button>
      <Button
        className="w-full mt-2"
        variant="outline"
        onClick={() => setIsEdit(false)}
      >
        Cancel
      </Button>
    </>
  );
};

export default EditNews;
