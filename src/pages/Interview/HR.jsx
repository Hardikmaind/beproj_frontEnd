import React from "react";
// import AudioRecorder from '../../Components/audiorecordercomponent'
// import QA from '../../Components/QA'
import QA from "../../Components/QAMain";

const HR = () => {
  const { data, loading, error } = useFetch("hr_questions/");
  if (loading || !data) return []; // Return an empty array while loading or if data is null
  if (error) {
    console.error("Error fetching interview questions:", error);
    return []; // Return an empty array if there's an error
  }
  console.log(data);

  console.log("Quesstions", data, loading, error);
  return (
    <div className="bg-gray-100 ">
      <h6 className="text-5xl">HR Interview</h6>
      <QA />
    </div>
  );
};

export default HR;
