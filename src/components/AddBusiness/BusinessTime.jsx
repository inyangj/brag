import React, { useState } from "react";

const BusinessTime = () => {
  const [selectedStartDay, setSelectedStartDay] = useState("");
  const [selectedEndDay, setSelectedEndDay] = useState("");
  const [selectedStartTime, setSelectedStartTime] = useState("");
  const [selectedEndTime, setSelectedEndTime] = useState("");

  const handleStartDayChange = (e) => {
    setSelectedStartDay(e.target.value);
  };

  const handleEndDayChange = (e) => {
    setSelectedEndDay(e.target.value);
  };

  const handleStartTimeChange = (e) => {
    setSelectedStartTime(e.target.value);
  };

  const handleEndTimeChange = (e) => {
    setSelectedEndTime(e.target.value);
  };

  const daysOptions = [
    "Select Day",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const hoursOptions = [
    "Select Time",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
    "9:00 PM",
  ];

  return (
    <div>
      <p className="text-[16px] font-semibold mx-[62px]">Hours of operation</p>
      <div className="grid grid-cols-2 gap-4 mt-4 mx-16">
        <div>
          <label
            htmlFor="startDay"
            className="block text-sm font-medium text-gray-600"
          ></label>
          <div className="relative">
            <select
              id="startDay"
              name="startDay"
              value={selectedStartDay}
              onChange={handleStartDayChange}
              className="pl-8 pr-2 py-2 block w-1/2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
            >
              {daysOptions.map((day, index) => (
                <option key={index} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label
            htmlFor="endDay"
            className="block text-sm font-medium text-gray-600"
          ></label>
          <div className="relative">
            <select
              id="endDay"
              name="endDay"
              value={selectedEndDay}
              onChange={handleEndDayChange}
              className="pl-8 pr-2 py-2 block w-1/2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
            >
              {daysOptions.map((day, index) => (
                <option key={index} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </div>
        </div> 
        <div>
          <label
            htmlFor="startTime"
            className="block text-sm font-medium text-gray-600"
          ></label>
          <div className="relative">
            <select
              id="startTime"
              name="startTime"
              value={selectedStartTime}
              onChange={handleStartTimeChange}
              className="pl-8 pr-2 py-2 block w-1/2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
            >
              {hoursOptions.map((hour, index) => (
                <option key={index} value={hour}>
                  {hour}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="endTime"
            className="block text-sm font-medium text-gray-600"
          ></label>
          <div className="relative">
            <select
              id="endTime"
              name="endTime"
              value={selectedEndTime}
              onChange={handleEndTimeChange}
              className="pl-8 pr-2 py-2 block w-1/2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
            >
              {hoursOptions.map((hour, index) => (
                <option key={index} value={hour}>
                  {hour}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessTime;
