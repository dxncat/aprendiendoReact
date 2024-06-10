import React from 'react';

const Actividad2 = (dato) => {
    return (
        <div className="grid grid-cols-3 gap-4">
            <div key={dato.id} className="bg-white rounded-lg shadow-md p-4">
                <h2 className="text-xl font-bold mb-2">{dato.name}</h2>
                <h3>ID: {dato.id}</h3>
                <p className="text-gray-500">{dato.species}</p>
            </div>
        </div>
    );
};

export default Actividad2;