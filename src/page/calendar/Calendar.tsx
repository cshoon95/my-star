import React from "react";
import InitPage from "../../comp/module/InitPage";
import ons from "../../core/Ons";

// start -- MUI 
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { myevents, myresources } from "./data";
import { format, parse, startOfWeek, getDay } from "date-fns";
import "react-big-calendar/lib/css/react-big-calendar.css";
import SpeedDialog from "./SpeedDialog";

const MyCalnedar = () => {
    const locales = { "en-KR": require("date-fns")};
    const localizer = dateFnsLocalizer({
        format,
        parse,
        startOfWeek,
        getDay,
        locales
    });

    return (
        <InitPage>
            <Calendar 
                events={data}
                localizer={localizer}
                defaultDate={new Date(today.yyyy, today.mm, today.dd)}
                style={{ height: 750, marginTop: 3 }}
                onSelectEvent={(e) => {
                    ons.log(e)

                }}
            />
        </InitPage>
    )
}

export default MyCalnedar