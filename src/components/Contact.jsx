const Contact = () => {
    return (
        <div className="w-6/12 p-4 m-4">
            <h1 className="font-bold text-3xl mb-3">Contact Us Page</h1>
            <form action="">
                <div className="flex flex-col gap-y-2 shadow-lg p-4">
                    <input type="text" className="border border-black rounded-sm w-2/4" placeholder="Enter your name"/>
                    <textarea
                        name=""
                        id=""
                        placeholder="Enter a message"
                        className="border border-black rounded-sm"
                    ></textarea>
                    <button className="p-2 m-2 rounded-lg border bg-gray-100">Submit</button>
                </div>
            </form>
        </div>
    );
};
export default Contact;
