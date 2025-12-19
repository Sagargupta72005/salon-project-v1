import React, { useState, useCallback, useMemo } from "react";
import { useDarkMode } from "../Dark/DarkModeContext";
import SectionHeader from "../Header/Header";

/* ---------- APPOINTMENTS (REAL DATES) ---------- */
const APPOINTMENTS = {
  "2025-12-11": [
    { name: "Henry Ford", time: "11:00 am" },
    { name: "Karen Smith", time: "1:00 pm" }
  ],
  "2025-12-12": [
    { name: "Tim Rogers", time: "9:00 am" },
    { name: "Sophie Turner", time: "10:30 am" }
  ],
  "2025-12-13": [
    { name: "Bill Barrot", time: "7:15 am" },
    { name: "John Walker", time: "7:30 am" },
    { name: "Arthur Klein", time: "8:00 am" },
    { name: "Maria Lopez", time: "9:15 am" }
  ]
};

/* ---------- HELPERS ---------- */
const formatKey = (date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(
    date.getDate()
  ).padStart(2, "0")}`;

const generateCalendar = (year, month) => {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startPadding = (firstDay.getDay() + 6) % 7; // monday start
  const days = [];

  for (let i = 0; i < startPadding; i++) days.push(null);
  for (let d = 1; d <= lastDay.getDate(); d++) days.push(d);

  return days;
};

/* ---------- MODAL ---------- */
const BookingModal = ({ selectedDate, slot, onClose, darkMode }) => {
  if (!slot) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
      <div
        className={`w-full max-w-md rounded-lg p-5
          ${darkMode ? "bg-neutral-900 text-white" : "bg-neutral-800 text-white"}`}
      >
        <div className="flex justify-between mb-3">
          <h3 className="font-bold text-sm tracking-wider">REQUEST APPOINTMENT</h3>
          <button onClick={onClose} className="text-xl">×</button>
        </div>

        <p className="text-sm opacity-80 mb-3">
          {selectedDate.toDateString()} at {slot.time}
        </p>

        <div className="border border-gray-600 rounded p-3 mb-4">
          <p className="font-bold text-yellow-400">{slot.name}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <input className="border rounded px-3 py-2 bg-transparent" placeholder="Name" />
          <input className="border rounded px-3 py-2 bg-transparent" placeholder="Email" />
        </div>

        <div className="flex gap-2 mt-4">
          <button className="bg-yellow-600 px-4 py-2 rounded w-full">
            Request
          </button>
          <button onClick={onClose} className="border px-4 py-2 rounded w-full">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

/* ---------- MAIN ---------- */
const Booking = () => {
  const { darkMode } = useDarkMode();

  const today = new Date();
  const [currentDate, setCurrentDate] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );
  const [selectedDay, setSelectedDay] = useState(today);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const calendarDays = useMemo(
    () => generateCalendar(currentDate.getFullYear(), currentDate.getMonth()),
    [currentDate]
  );

  const monthLabel = currentDate.toLocaleString("default", {
    month: "long",
    year: "numeric"
  });

  const selectedKey = formatKey(selectedDay);
  const appointments = APPOINTMENTS[selectedKey] || [];

  const changeMonth = (dir) => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + dir, 1)
    );
  };

  const handleDayClick = useCallback(
    (day) => {
      if (!day) return;
      setSelectedDay(
        new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
      );
    },
    [currentDate]
  );

  return (
    <div className={`min-h-screen px-4 py-16 ${darkMode ? "bg-gray-900" : "bg-neutral-900"} text-white`}>
      <SectionHeader title="Book in Advance" as="h1" />

      <div className="flex flex-col lg:flex-row max-w-5xl mx-auto gap-6 mt-10">
        {/* CALENDAR */}
        <div className="flex-1 rounded-lg bg-neutral-800">
          <div className="flex justify-between px-4 py-4 bg-neutral-900 rounded-t">
            <button onClick={() => changeMonth(-1)}>‹</button>
            <span className="font-semibold">{monthLabel}</span>
            <button onClick={() => changeMonth(1)}>›</button>
          </div>

          <div className="grid grid-cols-7 text-center text-xs py-2">
            {["MON","TUE","WED","THU","FRI","SAT","SUN"].map(d => (
              <div key={d}>{d}</div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-2 p-4">
            {calendarDays.map((day, i) => {
              const isSelected =
                day &&
                selectedDay.getDate() === day &&
                selectedDay.getMonth() === currentDate.getMonth();

              return (
                <div
                  key={i}
                  onClick={() => handleDayClick(day)}
                  className={`h-12 flex items-center justify-center rounded-full cursor-pointer
                    ${!day ? "opacity-20" :
                      isSelected
                        ? "bg-yellow-400 text-black font-bold"
                        : "hover:bg-neutral-700"}`}
                >
                  {day}
                </div>
              );
            })}
          </div>
        </div>

        {/* APPOINTMENTS */}
        <div className="w-full lg:w-80 bg-neutral-700 rounded-lg p-4 max-h-[600px] overflow-y-auto">
          <h2 className="text-center font-semibold mb-4">
            {selectedDay.toDateString()}
          </h2>

          {appointments.length === 0 ? (
            <p className="text-center opacity-80">No appointments</p>
          ) : (
            appointments.map((a, i) => (
              <div
                key={i}
                onClick={() => setSelectedSlot(a)}
                className="border-b border-gray-600 pb-3 mb-3 cursor-pointer"
              >
                <p className="text-yellow-400 font-semibold">{a.name}</p>
                <p className="text-sm">{a.time}</p>
              </div>
            ))
          )}
        </div>
      </div>

      <BookingModal
        selectedDate={selectedDay}
        slot={selectedSlot}
        onClose={() => setSelectedSlot(null)}
        darkMode={darkMode}
      />
    </div>
  );
};

export default Booking;
