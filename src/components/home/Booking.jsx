import React, { useState, useCallback } from "react";
import { useDarkMode } from "../Dark/DarkModeContext";
import SectionHeader from "../Header/Header";

/* ---------- STATIC DATA ---------- */
const DAYS_DECEMBER_2025 = [
  "", "", 1, 2, 3, 4, 5,
  6, 7, 8, 9, 10, 11, 12,
  13, 14, 15, 16, 17, 18, 19,
  20, 21, 22, 23, 24, 25, 26,
  27, 28, 29, 30, 31, "", ""
];

const APPOINTMENTS = {
  13: [
    { name: "Bill Barrot", time: "7:15 am" },
    { name: "John Walker", time: "7:30 am" },
    { name: "Arthur Klein", time: "8:00 am" },
    { name: "Maria Lopez", time: "9:15 am" }
  ],
  12: [
    { name: "Tim Rogers", time: "9:00 am" },
    { name: "Sophie Turner", time: "10:30 am" }
  ],
  11: [
    { name: "Henry Ford", time: "11:00 am" },
    { name: "Karen Smith", time: "1:00 pm" }
  ]
};

/* ---------- TODAY ---------- */
const getInitialDay = () => {
  const today = new Date();
  const isDecember2025 =
    today.getFullYear() === 2025 && today.getMonth() === 11;

  return isDecember2025 ? today.getDate() : 1;
};

/* ---------- MODAL ---------- */
const BookingModal = ({ selectedDay, slot, onClose, darkMode }) => {
  if (!slot) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div
        className={`rounded-lg shadow-xl w-full max-w-md p-5 
          ${darkMode ? "bg-neutral-900 text-white" : "bg-neutral-800 text-gray-200"}`}
      >
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-bold text-sm tracking-wider">
            REQUEST AN APPOINTMENT
          </h3>
          <button onClick={onClose} className="text-xl font-bold">×</button>
        </div>

        <p className="text-sm opacity-90">
          Please confirm that you would like to request this appointment:
        </p>

        <div
          className={`border rounded-lg p-3 mt-3 
            ${darkMode ? "border-gray-600" : "border-gray-300"}`}
        >
          <p className="font-bold text-yellow-400">{slot.name}</p>
          <p className="text-sm mt-1 opacity-80">
            {selectedDay} Dec at {slot.time}
          </p>
        </div>

        <p className="font-semibold mt-4 text-sm">Your Information *</p>

        <div className="flex flex-col sm:flex-row gap-2 mt-2">
          <input
            className="border rounded px-3 py-2 w-full"
            placeholder="Name..."
          />
          <input
            className="border rounded px-3 py-2 w-full"
            placeholder="Email Address..."
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-2 mt-4">
          <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg">
            Request Appointment
          </button>

          <button
            onClick={onClose}
            className={`border px-4 py-2 rounded-lg 
              ${darkMode ? "border-gray-500" : "border-neutral-400"}`}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

/* ---------- APPOINTMENT CARD ---------- */
const AppointmentCard = ({ appt, onSelect, darkMode }) => (
  <div
    className={`border-b pb-3 last:border-b-0 cursor-pointer
      ${darkMode ? "border-gray-600" : "border-gray-400"}`}
    onClick={() => onSelect(appt)}
  >
    <p className="font-semibold text-yellow-400">{appt.name}</p>
    <p className={`text-sm ${darkMode ? "text-gray-200" : "text-gray-800"}`}>
      {appt.time}
    </p>
  </div>
);

/* ---------- MAIN COMPONENT ---------- */
const Booking = () => {
  const { darkMode } = useDarkMode();
  const [selectedDay, setSelectedDay] = useState(getInitialDay());
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleDayClick = useCallback((day) => {
    if (day) setSelectedDay(day);
  }, []);

  const getAppointmentsForDay = (day) => APPOINTMENTS[day] || [];

  return (
    <div
      className={`h-full w-full flex flex-col overflow-hidden  border-t-2 border-yellow-900  items-center py-16 px-4 transition
        ${darkMode ? "bg-gray-900 text-white" : "bg-neutral-900 text-white"}`}
    >
      {/* <h1 className="text-3xl sm:text-4xl font-semibold text-yellow-100 underline mb-20">
        Book in Advance
      </h1> */}
      
      <SectionHeader
  title="Book in Advance"
  as="h1"
  className="py-22"
/>

      {/* Calendar + Side Appointments */}
      <div className="flex w-full max-w-5xl gap-6">
        {/* CALENDAR */}
        <div
          className={`rounded-lg shadow-xl flex-1 transition text-white
            ${darkMode ? "bg-gray-700" : "bg-neutral-700 bg-opacity-90"}`}
        >
          {/* MONTH BAR */}
          <div className={`flex justify-between items-center px-4 py-5 rounded-t-lg
            ${darkMode ? "bg-neutral-800 text-white" : "bg-neutral-800 text-white"}`}>
            <button className="text-xl font-bold">{"<"}</button>
            <span className="font-semibold">DECEMBER 2025</span>
            <button className="text-xl font-bold">{">"}</button>
          </div>

          {/* WEEKDAYS */}
          <div className={`grid grid-cols-7 text-center text-xs sm:text-sm font-semibold border-b py-2
            ${darkMode ? "text-gray-300 border-gray-600" : "text-white border-gray-300"}`}>
            {["MON","TUE","WED","THU","FRI","SAT","SUN"].map((d) => (
              <div key={d}>{d}</div>
            ))}
          </div>

          {/* DAYS */}
          <div className="grid grid-cols-7 gap-2 p-4 text-center">
            {DAYS_DECEMBER_2025.map((day, idx) => {
              const isSelected = day === selectedDay;
              return (
                <div
                  key={idx}
                  onClick={() => handleDayClick(day)}
                  className={`flex items-center justify-center h-12 sm:h-16 rounded-full text-sm sm:text-base font-medium transition
                    ${!day
                      ? "opacity-30"
                      : isSelected
                        ? "bg-yellow-200 text-black font-extrabold shadow-md"
                        : darkMode
                          ? "text-gray-400 hover:bg-neutral-800 cursor-pointer"
                          : "text-white hover:bg-gray-200 cursor-pointer"
                    }`}
                >
                  {day}
                </div>
              );
            })}
          </div>
        </div>

        {/* SIDE APPOINTMENTS */}
        <div
          className={`w-80 rounded-lg shadow-lg p-4 flex flex-col max-h-[600px] overflow-y-auto
            ${darkMode ? "bg-neutral-700" : "bg-neutral-500 bg-opacity-90"}`}
        >
          <h2 className="text-center font-semibold mb-4">
            Appointments on <span className="font-bold">{selectedDay} Dec</span>
          </h2>

          {getAppointmentsForDay(selectedDay).length === 0 ? (
            <p className="text-center text-sm opacity-80">No appointments</p>
          ) : (
            getAppointmentsForDay(selectedDay).map((appt, i) => (
              <AppointmentCard
                key={i}
                appt={appt}
                onSelect={setSelectedSlot}
                darkMode={darkMode}
              />
            ))
          )}
        </div>
      </div>

      {/* MODAL */}
      <BookingModal
        selectedDay={selectedDay}
        slot={selectedSlot}
        onClose={() => setSelectedSlot(null)}
        darkMode={darkMode}
      />
    </div>
  );
};

export default Booking;
