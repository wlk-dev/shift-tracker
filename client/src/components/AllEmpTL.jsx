import React from "react"
import { useState } from 'react'

import Timeline, {
  TimelineHeaders,
  SidebarHeader,
  DateHeader,
} from 'react-calendar-timeline'

import moment from 'moment'


const AllEmpTL = (props) => {

  // const employees = []
  // const register = {}
  // let index = 0

  // let uid
  
  // for (const key in props.data.data) {
  //   uid = props.data.data[key].user_id
  //   if (register[uid] === undefined) {
  //     register[uid] = true
  //     index++;
  //     employees.push({id: uid, title: `Emp ${index}`});
  //   }
  // }

  const employees = [{ id: '6387f7a848ac79ba0c9c3f14', title: 'Emp 1' }, { id: "6388e941242b7ae85923fbc8", title: 'Emp 2' }, { id: 3, title: 'Emp 3' }, { id: 4, title: 'Emp 4' }, { id: 5, title: 'Emp 5' }, { id: 6, title: 'Emp 6' }]

  const shifts = []

  for (const key in props.data.data) {
    shifts.push(
      {
        id: key,
        group: props.data.data[key].user_id,
        title: 'Working',
        start_time: moment(props.data.data[key].startTime),
        end_time: moment(props.data.data[key].endTime),
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
    >
      
    </Timeline>
  );
}


export default AllEmpTL