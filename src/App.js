function App() {
  return (
    <div classname="min-h-sreen bg-gray-100">
      <div className="flex items-center gap-2">
        <img
          src="data:image/png;base64,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"
          alt="WhatsApp Logo"
          className="w-8 h-8"
        />
        <div classname="flex justify-between items-center px-6 py-4 bg-white border-b">
          <h1 className="text-green-600 font-bold text-xl">WhatsApp</h1>

          <div className="flex gap-4 text-sm">
            <span>Features</span>
            <span>Privacy</span>
            <span>Help</span>
          </div>

          <button className="bg-green-600 text-white px-4 py-2 rounded-full">
            Download
          </button>
        </div>

        <div className="flex flex-col md:flex-row items-center px-6 py-12">
          <div classname="md:w1/2">
            <h2 className="text-4xl font-bold">Message privately</h2>

            <p className="text-gray-600 mt-4">
              Simple, reliable, private messaging and calling for free.
            </p>

            <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-full">
              Download
            </button>
          </div>

          <div className="md:w-1/2 mt-8 flex justify-center">
            <img
              sec="data:image/png;base64,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"
              alt="chat"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
