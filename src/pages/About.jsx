export default function About() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center px-6 py-12"
      style={{ backgroundImage: "url('/image/weather-bg.jpg')" }}
    >
       <div className="bg-white bg-opacity-90 rounded-2xl shadow-lg p-8 w-full mt-14 max-w-3xl">
      {/* Title */}
      <h1 className="text-3xl font-bold text-blue-600 mb-4 text-center">
        About
      </h1>

      {/* Description */}
      <p className="text-gray-700 text-lg mb-4 max-w-2xl text-center">
        The Weather Dashboard is a simple web app that provides real-time weather updates 
        and a 5-day forecast for any city worldwide.
      </p>
      </div>
    </div>
  );
}

