// src/components/Hero.js
const Hero = ({ title, subtitle, image }) => {
    return (
        <div className="relative hero-background bg-cover bg-center h-screen flex items-center justify-between">

            {/* <!-- Hero Text Content on the Left --> */}
            <div class="text-white">
                <h1 class="text-5xl font-bold">Welcome to Our Website!</h1>
                <p class="text-lg mt-4">We create amazing digital experiences.</p>
            </div>

            {/* <!-- GIF Positioned on the Right Side --> */}
            <div class="absolute right-0 top-1/2 transform -translate-y-1/2 p-10 w-1/2">
                <img src="/images/floral_mandala.gif" alt="Animated GIF" class="w-full h-auto" />
            </div>
        </div>
    );
};

export default Hero;
