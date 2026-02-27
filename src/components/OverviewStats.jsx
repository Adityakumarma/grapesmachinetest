function OverviewStats() {

  const stats = [
    { title: "Out Patients", value: 120 },
    { title: "In Patients", value: 42 },
    { title: "Surgeries", value: 15 },
    { title: "Appointments", value: 30 },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

      {stats.map((s, i) => (
        <div key={i} className="bg-white p-6 rounded shadow">

          <p className="text-grey-600">{s.title}</p>
          <h2 className="text-3xl font-bold text-purple-600">{s.value}</h2>

        </div>
      ))}

    </div>
  );
}

export default OverviewStats;