export const handleDateClick = async (
  info: any,
  setFormData: any,
  setSelectedEvent:any
) => {
  setSelectedEvent(null);
  console.log("Raw Date from FullCalendar:", info.dateStr);
  const calendarApi = info.view.calendar;
  const currentView = calendarApi.view.type;
  let startTime, endTime;
  if (currentView === "multiMonthYear") {
    startTime = new Date(info.dateStr);
    endTime = new Date(info.dateStr);
    endTime.setDate(endTime.getDate() + 1); 
  } else if (currentView === "dayGridMonth") {
    startTime = new Date(info.dateStr);
    endTime = new Date(info.dateStr);
    endTime.setDate(endTime.getDate() + 1); 
  } else {
    startTime = new Date(info.dateStr);
    endTime = new Date(startTime.getTime() + 30 * 60 * 1000);
  }
  console.log("Start Time:", startTime.toISOString());
  console.log("End Time:", endTime.toISOString());
  setFormData({
    title: "",
    description: "",
    start: startTime.toISOString().slice(0, 16),
    end: endTime.toISOString().slice(0, 16),
  });
};