// components/ServicesCard.js

import { ReactElement } from "react";

export default function ServicesCard({ icon, title, description }) {
  return (
    <div className="p-10 rounded-xl shadow-md flex flex-col items-left text-left space-y-3 hover:shadow-xl transition-shadow duration-200">
      <div className="w-12 h-12">
        <img src={icon} alt={title} className="w-full h-full object-contain" />
      </div>
      <h4 className="text-3xl font-semibold text-hexgrey">{title}</h4>
      <p className="text-lg text-hexgrey">{description}</p>
    </div>
  );
}
