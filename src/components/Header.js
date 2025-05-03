// pages/about.js
import Navigation from "./Navbar"
import NavigationR from "./NavbarR"

export default function Header() {
  return (
    <header className="top-0 left-0 w-full h-16 bg-white shadow z-50">
      <div>
        {/* <Navigation /> */}
        <NavigationR />
      </div>
    </header>
  );
}
