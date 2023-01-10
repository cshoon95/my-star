import React from "react";
import InitPage from "../../comp/module/InitPage";
import ons from "../../core/Ons";

// start -- MUI 
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { myevents, myresources } from "./data";
import { format, parse, startOfWeek, getDay } from "date-fns";
import "react-big-calendar/lib/css/react-big-calendar.css";

const MyCalnedar = () => {
    const sysdate = ons.utils.sysdate(new Date());
    const today = {
        yyyy: Number(sysdate.substring(0, 4)),
        mm: Number(sysdate.substring(4, 6)) - 1,
        dd: Number(sysdate.substring(6, 8))
    }
    
    const customers = ons.getState('customers');
    const data = customers.map((item: any) => {
        return {
            id: `${item.id}`,
            title: `${item.NAME} 생일 🎂`,
            yyyy: `${Number(item.BIRTH.substring(0, 4))}`,
            mm: `${Number(item.BIRTH.substring(5, 7))}`,
            dd: `${Number(item.BIRTH.substring(8, 10))}`,
            start: new Date(today.yyyy, Number(item.BIRTH.substring(5, 7)) -1, Number(item.BIRTH.substring(8, 10))),
            end: new Date(today.yyyy, Number(item.BIRTH.substring(5, 7)) -1, Number(item.BIRTH.substring(8, 10)))
        }
    })
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