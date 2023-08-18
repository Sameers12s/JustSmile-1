const SettingPersonaldetail = () => {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex h-96 w-[36.375rem] justify-between bg-neutrals-800 rounded-lg">
        <div className="bg-neutrals-800 px-4 pt-4 text-white rounded-lg">
          <h6 className="pt-2">Profile Picture</h6>
          <h6 className=" pt-32">Name</h6>
          <h6 className="pt-8">bio</h6>
          <h6 className=" pt-20">Blocked Contacts</h6>
        </div>
        <div className="flex-grow bg-neutrals-800 px-4 pt-3 text-white rounded-lg">
          <div className="grid grid-cols-2">
            <div className="flex w-28 flex-col rounded-full bg-neutrals-600 text-center ml-4">
              <h1 className="text-9xl">P</h1>
            </div>
            <div className="grid ml-16">
              <button type="button" className="btn text-neutrals-500 bg-neutrals-700 mt-2">UPLOAD</button>
              <button className="btn bg-red-500">REMOVE</button>
            </div>
          </div>
          <div className="flex justify-end items-end pt-2">
          <input className="textarea bg-neutrals-900 rounded-lg p-3 w-[23rem] h-3 mt-5" placeholder="GoodBits"></input>
          </div>
          <div className="flex justify-end items-end pt-2">
          <textarea className="textarea bg-neutrals-900 rounded-lg p-3 w-[23rem]" placeholder="My profile BIO&#10;Here I put details about Myself"></textarea>
          </div>
          <div className="flex justify-end items-end mt-3">
          <button type="button" className="btn w-32 text-neutrals-500 bg-neutrals-700 mt-2">MANAGE</button>
          </div>
        </div>
      </div>
    </div>
      
      
    );
}

export default SettingPersonaldetail;
