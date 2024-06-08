import { useState } from "react";
import "./App.css";
import ReportViewer from "./components/ReportViewer";

function App() {
  const [url, setUrl] = useState("");
  const [report, setReport] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setError(null);
    setReport(null);
    setLoading(true);
    
    if (!url || !url.match(/^(http|https):\/\/[^ "]+$/)) {
      setError("Please enter a valid URL.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("https://web-analyzer-backend-1.onrender.com/api/audit", {
        method: "POST",
        body: JSON.stringify({ url }),
        headers: { "Content-Type": "application/json" },
      });
      
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setReport(data);
    } catch (error) {
      setError("Failed to fetch the report. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
      <div className="max-w-lg w-full bg-blue-500 text-white p-6 rounded-lg shadow-md mb-4">
        <h1 className="text-3xl font-bold mb-4">Accessibility Test</h1>
        <div className="relative flex flex-col lg:flex-row items-center">
          <input
            type="text"
            className="w-full lg:w-80 px-4 py-2 mb-4 lg:mb-0 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400 text-black"
            placeholder="Enter your URL here"
            onChange={(e) => setUrl(e.target.value)}
          />
          <button
            className="mt-4 lg:mt-0 lg:ml-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-400"
            onClick={handleClick}
            disabled={loading}
          >
            {loading ? "Analyzing..." : "Analyze website"}
          </button>
        </div>
        {error && <div className="text-red-500 mt-4">{error}</div>}
      </div>
      <div className="content">
        {report && <ReportViewer report={report} />}
      </div>
    </div>
  );
}

export default App;
