import { IconPaperclip, IconX } from "@tabler/icons-react";
const AddPostPopup = ({ close }) => {
  return (
    <div className="modal-box  flex w-[37rem] bg-neutrals-800 rounded-2xl flex-col justify-between ">
      <div className="flex items-center px-4 pt-4">
        <div className=" w-full flex justify-center text-center ">
          <div className="text-neutral-100 font-extrabold text-xl">
            NEW POST
          </div>
        </div>
        <button className="btn btn-square cursor-pointer" onClick={close}>
          <IconX />
        </button>
      </div>
      <div className="flex justify-center p-2 mt-4">
        <textarea
          className="textarea bg-neutrals-900 rounded-lg p-3 w-[35rem] h-32"
          placeholder="Type Something"
        ></textarea>
      </div>

      <div className=" flex justify-between items-center px-4 mb-4 mt-2">
        <button className="btn btn-neutrals-600 ">
          <IconPaperclip />
        </button>

        <button className="btn btn-primary w-24 h-12">SEND</button>
      </div>
    </div>
  );
};
export default AddPostPopup;
