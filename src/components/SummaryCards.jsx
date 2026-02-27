function SummaryCards() {

  const data = [
    { title: "Total Doctors", value: 25 },
    { title: "Beds Available", value: 80 },
    { title: "Emergency Cases", value: 6 },
    { title: "Today's Patients", value: 110 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-6">

      {data.map((d, i) => (
        <div key={i} className="bg-white p-5 rounded shadow">

          <h3 className="text-gray-500 ">{d.title}</h3>
          <p className="text-2xl font-bold text-purple-600">{d.value}</p>

        </div>
      ))}

    </div>
  );
}

export default SummaryCards;