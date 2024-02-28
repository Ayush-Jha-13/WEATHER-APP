import React from "react";

function TopButtons({setQuery}) {
  const cities = [
    {
      id: 1,
      title: "London",
    },
    {
      id: 2,
      title: "Sydney",
    },
    {
      id: 3,
      title: "Tokyo",
    },
    {
      id: 4,
      title: "Toronto",
    },
    {
      id: 5,
      title: "Paris",
    },
  ];

  return (
    <>
    <div className="items-center justify-center my-4 text-center text-2xl font-bold text-white ">Weather Forecast Application</div>
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button key={city.id} className="text-white text-lg font-medium" onClick={() => setQuery({ q: city.title })}>
          {city.title}
        </button>
      ))}
    </div>
    </>
  );
}

export default TopButtons;
