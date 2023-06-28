import React from "react";

const Education = () => {
  const dataEducation = [
    {
      id: 1,
      year: 2022,
      location: "Batam International University",
    },
    {
      id: 2,
      year: 2019,
      location: "Batam Maitreyawira Vocational High School",
    },
  ];
  return (
    <div className="mt-4">
      <h2 className="text-center text-secondary text-2xl font-bold">
        Education
      </h2>
    </div>
  );
};

export default Education;
