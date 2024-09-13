import React, { useEffect, useRef, useState } from "react";
import { useJsApiLoader } from "@react-google-maps/api";

// Google Maps libraries used in this app
const libraries = ["places"];

function LocationSearch() {
  const [autocomplete, setAutocomplete] = useState(null);
  const inputRef = useRef(null);

  // Load Google Maps API
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey:import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: libraries,
  });

  useEffect(() => {
    if (isLoaded && inputRef.current) {
      const autocompleteInstance = new google.maps.places.Autocomplete(inputRef.current);
      autocompleteInstance.addListener("place_changed", () => {
        const place = autocompleteInstance.getPlace();
        console.log("Selected place:", place.formatted_address);
      });
      setAutocomplete(autocompleteInstance);
    }
  }, [isLoaded]);

  return (
    <div style={{ marginTop: "10%", textAlign: "center" }}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Start typing your address"
        style={{
          boxSizing: "border-box",
          border: "1px solid transparent",
          width: "50%",
          height: "50px",
          padding: "0 12px",
          borderRadius: "3px",
          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
          fontSize: "14px",
          outline: "none",
          textOverflow: "ellipsis",
          marginTop: "30px",
        }}
      />
    </div>
  );
}

export default LocationSearch;
