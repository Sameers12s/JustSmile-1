import { useState } from "react";
import { usePost } from "../../context/Post-Context";
import { IconPaperclip, IconX } from "@tabler/icons-react";
import { useQueryClient } from "react-query";
import { useAuth } from "../../context/auth-context";

const AddPostPopup = ({ close }) => {
  const [content, setContent] = useState("");
  const queryClient = useQueryClient();
  const { createPost } = usePost();
  const { currentUser } = useAuth();

  const handlePost = async (event) => {
    event.preventDefault();
    try {
      await createPost(content);
      queryClient.resetQueries({ queryKey: ["postList", currentUser.uid] });
      close();
    } catch (error) {
      console.error("Error during signup", error);
    }
  };

  return (
    <div className="modal-box p-4 pt-2 flex w-max-[37rem] bg-neutrals-800 rounded-2xl flex-col justify-between ">
      <div className="flex items-center">
        <div className=" w-full flex justify-center text-center ">
          <div className="text-neutral-100 font-extrabold text-xl">
            NEW POST
          </div>
        </div>
        <button
          className="btn btn-square cursor-pointer bg-transparent border-transparent"
          onClick={close}
        >
          <IconX />
        </button>
      </div>
      <form onSubmit={handlePost}>
        <div className="flex justify-center py-2">
          <textarea
            className="textarea bg-neutrals-900 rounded-lg p-3 w-[35rem] h-32"
            placeholder="Type Something"
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>

        <div className=" flex justify-between items-center">
          <button className="btn btn-neutrals-600 " type="button">
            <IconPaperclip />
          </button>

          <button
            className="btn btn-primary w-24 h-12"
            type="submit"
            value="submit"
          >
            SEND
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddPostPopup;
