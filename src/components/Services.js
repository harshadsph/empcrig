// src/components/Services.js
import ServicesCard from "./ServicesCard";
import ServicesData from "../../data/servicesData";

const Services = ({ title, subtitle, image }) => {

    return (

        <div className="services-background bg-transparent w-full h-screen">
            {/* // Services text Section */}
            <div className="p-5 text-hexgrey">
                <div className="text-center p-4"><h1 className="text-8xl font-bold">{title} </h1></div>
                <div className="text-center p-2"><h2 className="text-2xl">"{subtitle}"</h2></div>
            </div>

            {/* // Services Video Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-20">
                {ServicesData.map((serviceData, index) => (
                    <ServicesCard
                        key={index}
                        icon={serviceData.icon}
                        title={serviceData.title}
                        description={serviceData.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default Services;
