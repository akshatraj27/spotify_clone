// src/pages/CalendarPage.js
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const CalendarPage = () => {
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={[
        { title: 'event 1', date: '2024-06-01' },
        { title: 'event 2', date: '2024-06-02' },
      ]}
    />
  );
};

export default CalendarPage;
