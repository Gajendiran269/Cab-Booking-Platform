import React from 'react';

const LocationSearchPanel = ({ 
    suggestions = [],  // Default to empty array to prevent errors
    setVehiclePanel, 
    setPanelOpen, 
    setPickup, 
    setDestination, 
    activeField 
}) => {

    const handleSuggestionClick = (suggestion) => {
        if (activeField === 'pickup') {
            setPickup(suggestion);
        } else if (activeField === 'destination') {
            setDestination(suggestion);
        }
        setVehiclePanel(true);
        setPanelOpen(false);
    };

    return (
        <div>
            {/* Display fetched suggestions */}
            {Array.isArray(suggestions) && suggestions.length > 0 ? (
                suggestions.map((elem, idx) => (
                    <div 
                        key={idx} 
                        onClick={() => handleSuggestionClick(elem)} 
                        className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start cursor-pointer'
                    >
                        <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'>
                            <i className="ri-map-pin-fill"></i>
                        </h2>
                        <h4 className='font-medium'>{elem}</h4>
                    </div>
                ))
            ) : (
                <p className="text-gray-500 text-sm">No suggestions available</p>
            )}
        </div>
    );
};

export default LocationSearchPanel;
