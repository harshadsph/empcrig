// src/components/ServicesR.js
import ServicesData from "../../data/servicesData";

const ServicesR = ({ title, subtitle, image }) => {

    return (

        <section className="px-4 py-12 services-background bg-transparent w-full">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl md:text-7xl font-bold mb-4">{title}</h2>
                <p className="text-lg md:text-xl mb-12 font-medium">"{subtitle}"</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {ServicesData.map((serviceData, index) => (
                        <div key={serviceData.index} className="bg-white/20 backdrop-blur-md rounded-xl p-6 shadow-lg">
                            <div className="text-3xl mb-4">{serviceData.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{serviceData.title}</h3>
                            <p className="text-sm text-gray-900">{serviceData.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default ServicesR;
