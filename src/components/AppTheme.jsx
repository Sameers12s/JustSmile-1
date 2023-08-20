const AppTheme = () => {
    return (
        <div className="flex justify-center items-center h-full w-full">
            <div className="flex justify-center items-center bg-neutrals-800 h-auto w-full rounded-lg p-4">
                <h1 className="flex basis-4/6 text-neutrals-600 text-center mr-4">App Theme</h1>
                <div className="flex justify-end basis-2/6">
                    <button type="button" className="btn btn-primary mr-4  md:w-28">DARK</button>
                    <button type="button" className="btn bg-neutrals-600 md:w-28">LIGHT</button>
                </div>

            </div>

        </div>
    );

}

export default AppTheme;