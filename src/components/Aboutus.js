// src/components/Services.js

const Aboutus = ({ title, subtitle, image }) => {

    return (

        <div className="aboutus-background bg-transparent w-full h-screen">
            {/* // Aboutus text Section */}
            <div className="p-10">
                <div className="text-center p-4"><h1 className="text-7xl text-hexgrey font-bold">{title} </h1></div>
                <div className="text-center p-2"><h2 className="text-2xl text-hexgrey">"{subtitle}"</h2></div>
            </div>

            {/* // Aboutus Section */}
           
        </div>
    );
};

export default Aboutus;
