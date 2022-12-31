import React from "react";
import InitPage from "../../comp/module/InitPage";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { myevents, myresources } from "./data";
import { format, parse, startOfWeek, getDay } from "date-fns";
import "react-big-calendar/lib/css/react-big-calendar.css";
// import "./myCalendar.css";

const locales = {
	"en-KR": require("date-fns")
};
const localizer = dateFnsLocalizer({
	format,
	parse,
	startOfWeek,
	getDay,
	locales
});
const MyCalnedar = () => {
    return (
        <InitPage>
            <Calendar
                events={myevents}
                localizer={localizer}
                defaultDate={new Date(2021, 5, 8)}
                style={{ height: 700 }}
            />
        </InitPage>
    )
}

export default MyCalnedar