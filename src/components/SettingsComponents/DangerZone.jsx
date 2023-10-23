import DangerImg from "../../assets/images/3694486fe7d9cc69aa37c9102557f371.png";
const DangerZone = () => {
  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden mb-16">
      <div
        className="flex h-full w-full justify-center items-center rounded-lg"
        style={{
          backgroundImage: `url(${DangerImg})`,
          backgroundSize: "350%",
          backgroundPosition: "center",
        }}
      >
        <div className="flex w-full justify-center items-center bg-neutrals-900 rounded-lg m-6">
          <div className="flex flex-col justify-center items-center py-4">
            <h1 className="text-brand-red px-2 md:px-16">
              Your Account will be deleted permanently
            </h1>
            <div className="flex">
              <button
                type="button"
                className="btn w-full md:w-80 bg-brand-red text-white mt-2"
              >
                DELETE MY ACCOUNT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DangerZone;
