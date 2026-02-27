function DoctorInfo() {

  const doctors = [
    { name: "Dr. Meera", spec: "Cardiologist" },
    { name: "Dr. Rahul", spec: "Orthopedic" },
    { name: "Dr. Anita", spec: "Neurologist" },
  ];

  return (
    <div className="bg-white p-6 rounded shadow">

      <h2 className="text-xl font-semibold mb-4">
        Doctors
      </h2>

      {doctors.map((doc, i) => (
        <div key={i} className="border p-3 rounded mb-2">

          <p className="font-semibold text-purple-600">{doc.name}</p>
          <p className="text-sm text-gray-500">{doc.spec}</p>

        </div>
      ))}

    </div>
  );
}

export default DoctorInfo;