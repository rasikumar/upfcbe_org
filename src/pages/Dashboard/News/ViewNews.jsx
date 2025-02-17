import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import EditNews from "./EditNews"; // Import the new EditNews component
import { PHOTOS } from "@/utils/api";

const ViewNews = ({
  news,
  onUpdate,
  successs,
  isModalOpen,
  setIsModalOpen,
}) => {
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    // Reset isEdit when the modal is opened again (force re-render)
    if (isModalOpen) {
      setIsEdit(false);
    }
  }, [isModalOpen]);

  useEffect(() => {
    if (successs) {
      setIsModalOpen(false); // Close only if changes were saved
    }
  }, [successs, setIsModalOpen]);

  return (
    <Dialog
      open={isModalOpen}
      onOpenChange={setIsModalOpen}
      key={isModalOpen ? "open" : "closed"}
    >
      <DialogContent aria-describedby="dialog-description">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">
            {isEdit ? "Edit News" : "View News"}
          </DialogTitle>
        </DialogHeader>

        <div>
          {isEdit ? (
            <EditNews news={news} onUpdate={onUpdate} setIsEdit={setIsEdit} />
          ) : (
            <>
              <p className="text-2xl">{news?.title || "N/A"}</p>
              <div className="flex gap-4">
                <p className="text-sm">{news?.text || "N/A"}</p>
              </div>
              {news?.image && (
                <div className="flex justify-center">
                  <img
                    src={`${PHOTOS}${news.image}`}
                    alt="news"
                    className="max-w-xs rounded-md shadow-md"
                  />
                </div>
              )}
              <div
                className="mt-2 text-gray-700 text-sm"
                dangerouslySetInnerHTML={{
                  __html:
                    news?.description || "<em>No description provided</em>",
                }}
              />
            </>
          )}
        </div>
        <DialogFooter className="mt-6 flex gap-4">
          {!isEdit && (
            <Button onClick={() => setIsEdit(true)}>Edit Event</Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ViewNews;
