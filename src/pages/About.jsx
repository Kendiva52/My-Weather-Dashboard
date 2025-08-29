export default function About() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center px-6 py-12"
      style={{ backgroundImage: "url('/image/weather-bg.jpg')" }}
    >
       <div className="bg-white bg-opacity-90 rounded-2xl shadow-lg p-8 w-full max-w-3xl">
      {/* Title */}
      <h1 className="text-3xl font-bold text-blue-600 mb-4 text-center">
        About Weather Dashboard
      </h1>

      {/* Description */}
      <p className="text-gray-700 text-lg mb-4 max-w-2xl text-center">
        The Weather Dashboard is a simple web app that provides real-time weather updates 
        and a 5-day forecast for any city worldwide.
      </p>

      {/* Features */}
      <h2 className="text-2xl font-semibold text-blue-500 mt-6 mb-3">
        Features
      </h2>
      <ul className="list-disc list-inside text-left text-gray-700 space-y-2 mb-6 max-w-md">
        <li>🌍 Search weather by city name</li>
        <li>🌡️ View current temperature, conditions, and icons</li>
        <li>📅 See a 5-day weather forecast</li>
        <li>⭐ Save favorite cities for quick access</li>
        <li>🎨 Clean, responsive design with Tailwind CSS</li>
      </ul>

      {/* Footer note */}
      <p className="text-gray-700 italic text-center max-w-xl">
        Built with React and the OpenWeather API to make checking the weather fast and easy.
      </p>
      </div>
    </div>
  );
}

