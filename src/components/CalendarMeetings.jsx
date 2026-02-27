function CalendarMeetings() {

  const meetings = [
    { title: "Surgery Meeting", time: "10 AM" },
    { title: "Case Review", time: "1 PM" },
    { title: "Staff Meeting", time: "4 PM" },
  ];

  return (
    <div className="bg-white p-6 rounded shadow">

      <h2 className="text-xl font-semibold mb-4">
        Meetings
      </h2>

      {meetings.map((m, i) => (
        <div key={i} className="border p-3 rounded mb-2 flex justify-between">

          <span>{m.title}</span>
          <span>{m.time}</span>

        </div>
      ))}

    </div>
  );
}

export default CalendarMeetings;