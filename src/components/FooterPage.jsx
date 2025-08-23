export default function FooterPage() {
  return (
    <footer className="bg-blue-600 text-white text-center p-4">
      <p className="text-sm">
        © {new Date().getFullYear()} Weather Dashboard | Data from OpenWeatherMap
      </p>
    </footer>
  );
}

