import React from "react"
import { useState } from "react"
import { useAppContext } from "../utils/AppContext";

import Timeline, {
  TimelineHeaders,
  SidebarHeader,
  DateHeader
} from 'react-calendar-timeline'

import moment from 'moment'

const EmpTL = (props) => {
  const { appState } = useAppContext();
  
  if (props.blah.data[0] === undefined) {
    return (
      <p>User has no shifts.</p>
    )
  }

  console.log(appState)

  const shifts = []

  const employees = [{ id: 1, title: `${appState.userData.fname}` }]

  for (const key in props.blah.data) {
    shifts.push(
      {
        id: key,
        group: 1,
        title: 'Working',
        start_time: moment(props.blah.data[key].startTime),
        end_time: moment(props.blah.data[key].endTime),
        canMove: false,
      }
    )
  }

  const timelineStyle = {
    margin : "1%",
    border : "solid 1px black",
  }

  return (
    <Timeline
      groups={employees}
      items={shifts}
      defaultTimeStart={moment().add(-6, 'hour')}
      defaultTimeEnd={moment().add(18, 'hour')}
      minZoom={24 * 60 * 60 * 1000}
      maxZoom={365.24 * 86400 * 1000}
      style={timelineStyle}
      lineHeight={50}
      stackItems={"true"}
      traditionalZoom={true}
    >
      
    </Timeline>
  );
}


export default EmpTL