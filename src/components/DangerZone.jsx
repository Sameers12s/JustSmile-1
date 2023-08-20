const DangerZone = () => {
    return(
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex h-auto w-auto justify-center items-center rounded-lg"  style={{
            backgroundImage: `url("src/assets/images/3694486fe7d9cc69aa37c9102557f371.png")`,
            backgroundSize: '350%',
            backgroundPosition: 'center',
          }}>

      <div className="flex justify-center bg-neutrals-900 rounded-lg  m-6">
      <div className="flex flex-col justify-center items-center py-4">
        <h1 className=" text-red-500 px-2 md:px-16">Your Account will be deleted permanantly</h1>
        <div className="flex">
        <button type="button" className="btn w-full md:w-80 bg-red-500 text-white mt-2">DELETE MY ACCOUNT</button>
          </div>
       </div>
       </div>
    </div>
    </div>
    );
}
export default DangerZone;


