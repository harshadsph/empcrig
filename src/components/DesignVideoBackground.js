// app/page.tsx or pages/index.tsx


const DesignVideoBackground = ({ title, subtitle, image }) => {
  return (
    <section className="py-4 md:py-12 design-background bg-transparent w-full">
      <div className="mx-auto text-center">
        <h2 className="text-4xl md:text-7xl font-bold mb-4">{title}</h2>
        <p className="text-lg md:text-xl mb-12 font-medium">"{subtitle}"</p>
        <div className="relative flex items-center justify-center w-full mb-0 bg-white overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-h-full object-contain md:object-cover border-none outline-none"
          >
            <source src="/videos/designprocess_v6.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}

export default DesignVideoBackground;
