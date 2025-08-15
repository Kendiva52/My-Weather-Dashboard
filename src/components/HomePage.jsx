import { useState } from "react";
import Navbar from "./Navbar"; 
import SearchBar from "./SearchBar";

export default function Homepage() {
  return (
        <div>

            <Navbar />

            <div className="text-center p-2">
                <h1 className="text-3xl text-black-900 inline-block shadow-md mb-2 mt-56">Weather Dashboard</h1>
                <p className="mb-6 text-gray-500">Search for the current weather in any city worldwide.</p>
        
                <SearchBar />
            </div>
        </div>
    );
}

