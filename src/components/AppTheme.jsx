const AppTheme = () => {
  return (
    <div className="flex flex-row items-center bg-neutrals-800 h-16 w-full rounded-lg p-4 pr-2">
      <div className="flex text-center">App Theme</div>
      <div className="flex-1"></div>
      <div className="flex flex-row space-x-2">
        <button type="button" className="btn btn-primary w-28">
          DARK
        </button>
        <button type="button" className="btn bg-neutrals-700 w-28">
          LIGHT
        </button>
      </div>
    </div>
  );
};

export default AppTheme;
