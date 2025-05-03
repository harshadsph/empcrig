export default function HeroVideoBackground() {
  return (
    <div className="relative flex items-center justify-center w-full min-h-[100dvh] bg-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full max-h-full object-contain md:object-cover border-none outline-none"
      >
        <source src="/videos/hero_v2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
