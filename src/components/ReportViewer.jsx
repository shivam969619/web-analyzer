import React from "react";

function ReportViewer({ report }) {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Accessibility Report</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-2">Visual Issues</h3>
          {report.visual.length > 0 ? (
            <ul className="list-disc pl-6">
              {report.visual.map((issue, index) => (
                <li key={index} className="mb-4">
                  <h4 className="text-lg font-medium">{issue.description}</h4>
                  <p className="text-sm text-gray-600 mt-1">{issue.help}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No visual issues found.</p>
          )}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Auditory Issues</h3>
          {report.auditory.length > 0 ? (
            <ul className="list-disc pl-6">
              {report.auditory.map((issue, index) => (
                <li key={index} className="mb-4">
                  <h4 className="text-lg font-medium">{issue.description}</h4>
                  <p className="text-sm text-gray-600 mt-1">{issue.help}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No auditory issues found.</p>
          )}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Motor Issues</h3>
          {report.motor.length > 0 ? (
            <ul className="list-disc pl-6">
              {report.motor.map((issue, index) => (
                <li key={index} className="mb-4">
                  <h4 className="text-lg font-medium">{issue.description}</h4>
                  <p className="text-sm text-gray-600 mt-1">{issue.help}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No motor issues found.</p>
          )}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Cognitive Issues</h3>
          {report.cognitive.length > 0 ? (
            <ul className="list-disc pl-6">
              {report.cognitive.map((issue, index) => (
                <li key={index} className="mb-4">
                  <h4 className="text-lg font-medium">{issue.description}</h4>
                  <p className="text-sm text-gray-600 mt-1">{issue.help}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No cognitive issues found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ReportViewer;
