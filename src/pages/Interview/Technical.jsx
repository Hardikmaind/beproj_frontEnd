import React from "react";
import QA from "../../Components/QAMain";
import AudioRecorder from "../../Components/AudioRecorder";
import useFetch from "../../hooks/useFetch";

const Technical = () => {
  const { data, loading, error } = useFetch("tech_questions/");
  if (loading || !data) return []; // Return an empty array while loading or if data is null
  if (error) {
    console.error("Error fetching interview questions:", error);
    return []; // Return an empty array if there's an error
  }
  console.log(data);

  console.log("Quesstions", data, loading, error);
  return (
    <>
      <div className="  ">
        <h6 className="text-5xl">Technical Interview</h6>
        <QA data={data} />
        {/* <AudioRecorder/> */}
      </div>
    </>
  );
};

export default Technical;
