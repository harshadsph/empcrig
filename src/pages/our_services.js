// pages/our_services.js
export default function OurServices() {
  return (
      <div className="flex flex-grow hero-background bg-transparent bg-cover bg-center items-center justify-center">
        <div className="w-full h-full m-40">
        <video
          className="w-full h-full object-cover rounded-lg"
          controls
          autoPlay
        >
          <source src="/videos/our_services.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>
      </div>
  );
}