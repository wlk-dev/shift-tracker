import React from "react"
import { useState } from 'react'

import Timeline, {
  TimelineHeaders,
  SidebarHeader,
  DateHeader
} from 'react-calendar-timeline'

import moment from 'moment'

const EmpTL = (props) => {

  console.log(props)

  const employees = [{ id: 1, title: 'Emp 1' }]

  const shifts = [
    {
      id: 1,
      group: 1,
      title: 'Working',
      start_time: moment(props.blah.data[0].startTime),
      end_time: moment(props.blah.data[0].endTime),
      canMove: false,
    },
  ]

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