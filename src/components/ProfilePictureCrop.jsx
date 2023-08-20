import { IconCamera } from '@tabler/icons-react';
import { IconX } from '@tabler/icons-react';
import { IconFocusCentered } from '@tabler/icons-react';
const ProfilePictureCrop = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="flex flex-col justify-center items-center bg-neutrals-800 h-auto w-full rounded-lg p-4 px-6">
        <div className="flex flex-row justify-between items-center w-full pb-2">
          <div className="flex flex-col items-center">

            <div className="flex flex-col items-center justify-center">
              <button type='file'>
                <IconCamera size={30} color="#718096" />
              </button>
            </div>

          </div>
          <h1 className="flex justify-cente text-center font-extrabold text-neutrals-100">UPLOAD PROFILE</h1>
          <div className="flex justify-end">
            <button type="button" className="btn-square bg-neutrals-800">
              <IconX size={35} color="#718096" />
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center py-2">

          {/* imp */}



          {/* imp */}
        </div>
        <div className="flex justify-between items-center w-full">
          <h1 className="flex text-center pt-4"><button type='file'>
            <IconFocusCentered size={30} color="white" />
          </button></h1>
          <div className="flex justify-end pt-4">
            <button type="button" className="btn btn-primary">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );

}

export default ProfilePictureCrop;