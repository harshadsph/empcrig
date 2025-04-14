export default function OvalCard({ imageUrl, title, subtitle }) {
    return (
        <div className="oval-background rounded-3xl p-6 max-w-xl mx-auto shadow-md">
        {/* Text Block */}
        <div className="text-center mb-6">
          <p className="text-md text-gray-600 font-medium">{title}</p>
          <h2 className="text-3xl font-bold text-gray-900">{subtitle}</h2>
        </div>
  
        {/* Screenshot Image */}
        <div className="relative overflow-hidden rounded-3xl">
          <img
            src={imageUrl} // Replace with your image path
            alt="macOS Preview"
            className="w-full object-cover"
          />
  
          {/* Floating Notification (Glassmorphism) */}
          <div className="absolute top-6 left-6 w-72 bg-white/30 backdrop-blur-md p-4 rounded-xl shadow-lg text-sm text-gray-900">
            <div className="mb-2 text-xs text-gray-600">Here’s how to merge PDFs together into one PDF:</div>
            <ol className="list-decimal pl-4 space-y-1 text-gray-800">
              <li>Open the PDFs you want to combine in Preview.</li>
              <li>Click View → Thumbnails.</li>
              <li>Drag thumbnails from one to another.</li>
            </ol>
            <div className="mt-2 text-xs text-gray-500"> Preview User Guide</div>
          </div>
  
          {/* Bottom right + button */}
          <button className="absolute bottom-4 right-4 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center text-xl shadow-md">
            +
          </button>
        </div>
      </div>
    );
  }
  