import React from "react"
import { useState } from 'react'

import Timeline, {
  TimelineHeaders,
  SidebarHeader,
  DateHeader,
} from 'react-calendar-timeline'

import moment from 'moment'


const AllEmpTL = (props) => {
  
  const employees = [{ id: 1, title: 'Emp 1' }, { id: 2, title: 'Emp 2' }, { id: 3, title: 'Emp 3' }, { id: 4, title: 'Emp 4' }, { id: 5, title: 'Emp 5' }, { id: 6, title: 'Emp 6' }]

  const shifts = [
    {
      id: 1,
      group: 1,
      title: 'Working',
      start_time: moment.unix(1669730400),
      end_time: moment.unix(1669730400).add(8, 'hour'),
      canMove: false,
    },
    {
      id: 4,
      group: 1,
      title: 'Working',
      start_time: moment.unix(1669730400),
      end_time: moment.unix(1669730400).add(9, 'hour'),
      canMove: false,
    },
    {
      id: 2,
      group: 2,
      title: 'Working',
      start_time: moment.unix(1669730400),
      end_time: moment.unix(1669730400).add(8, 'hour'),
      canMove: false,
    },
    {
      id: 3,
      group: 3,
      title: 'Working',
      start_time: moment.unix(1669730400),
      end_time: moment.unix(1669730400).add(8, 'hour'),
      canMove: false,
    }
  ]

  console.log(shifts[1])

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
    >
      
    </Timeline>
  );
}


export default AllEmpTL