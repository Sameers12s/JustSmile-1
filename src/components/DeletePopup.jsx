import { IconX } from '@tabler/icons-react';
const DeletePopup = () => {
    return (
        <div className="flex justify-center items-center h-screen w-screen">
            <div className="flex flex-col justify-center items-center bg-neutrals-800 h-auto w-full rounded-lg p-4 px-4">
                <div className="flex flex-row justify-between text-lg pl-6 font-extrabold w-full">
                    <h1 className="flex justify-center items-center text-red-500 text-lg p-2 font-extrabold flex-grow">DANGER</h1>
                    <button type="button" className=" btn-square bg-neutrals-800">
                    <IconX size={35} color="#718096"/>
                    </button>
                </div>

                <div className="text-center p-2 text-base text-neutrals-100">
                    <h1>Please Type “delete my profile” to confirm <br />Deletion of account</h1>
                    <div className="text-red-500 text-center p-2 pt-4 text-base">
                        <h1 > Account cannot be restored once deleted.</h1>
                    </div>
                </div>

                <div className="flex w-full">
                    <input id="text" className="flex textarea bg-neutrals-900 rounded-lg w-full h-3" placeholder="Type “delete my profile”"></input>
                </div>
                <div className="pt-4">
                    <button type="button" className="btn bg-red-500 md:w-60 text-neutrals-100">DELETE MY ACCOUNT</button>
                </div>

            </div>

        </div>
    );

}

export default DeletePopup;