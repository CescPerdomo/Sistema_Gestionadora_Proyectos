"use client";

import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { getProjects, getTasks } from "@/services/api";

export default function CalendarView() {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const projects = await getProjects();
        const tasks = await getTasks();

        // Suponiendo que cada proyecto tiene un campo 'startDate'
        // y cada tarea un campo 'dueDate'; si no, puedes simularlo
        const projEvents = projects.map((proj) => ({
          date: new Date(proj.startDate || new Date()),
          title: proj.name,
          type: "project",
        }));

        const taskEvents = tasks.map((task) => ({
          date: new Date(task.dueDate || new Date()),
          title: task.title,
          type: "task",
        }));

        setEvents([...projEvents, ...taskEvents]);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    }
    fetchEvents();
  }, []);

  // Muestra eventos en cada día del mes
  const tileContent = ({ date, view }) => {
    if (view === "month") {
      const dayEvents = events.filter(
        (ev) => ev.date.toDateString() === date.toDateString()
      );
      return dayEvents.length ? (
        <ul style={{ padding: 0, listStyle: "none", fontSize: "0.6rem" }}>
          {dayEvents.map((ev, index) => (
            <li
              key={index}
              style={{ color: ev.type === "project" ? "blue" : "green" }}
            >
              {ev.title}
            </li>
          ))}
        </ul>
      ) : null;
    }
  };

  return (
    <div className="container">
      <h2 className="my-4">Calendario</h2>
      <Calendar onChange={setDate} value={date} tileContent={tileContent} />
    </div>
  );
}
