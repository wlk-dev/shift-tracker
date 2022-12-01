import React, { useState, useEffect } from "react"

import Timeline, {
  TimelineHeaders,
  SidebarHeader,
  DateHeader,
} from 'react-calendar-timeline'

import moment from 'moment'


const AllEmpTL = (props) => {
  const [ dataReady, setDataReady] = useState(false)
  const [ employees, setEmployees] = useState([])
  const [ shifts, setShifts] = useState([])

  const register = {}
  let index = 0
  let uid

  const timelineStyle = {
    margin : "1%",
    border : "solid 1px black",
  }

  const prepData = () => {
    console.log(props.data.data)
    let emps = []
    for (const key in props.data.data) {
      console.log(key)
      uid = props.data.data[key].user_id
      if (register[uid] === undefined) {
        register[uid] = true
        index++;
        emps.push({id: uid, title: `Emp ${index}`});
      }
    }

    setEmployees(emps)

    let tempShifts = []
    for (const key in props.data.data) {
      tempShifts.push(
        {
          id: key,
          group: props.data.data[key].user_id,
          title: 'Working',
          start_time: moment(props.data.data[key].startTime),
          end_time: moment(props.data.data[key].endTime),
          canMove: false,
        }
      )
      setShifts(tempShifts)
    }
  }

  useEffect(() => {
    if( employees.length && shifts.length){
      console.log("ready")
      setDataReady(true)
    }
  }, [employees, shifts])


  // const employees = [{ id: '6387f7a848ac79ba0c9c3f14', title: 'Emp 1' }, { id: "6388e941242b7ae85923fbc8", title: 'Emp 2' }, { id: 3, title: 'Emp 3' }, { id: 4, title: 'Emp 4' }, { id: 5, title: 'Emp 5' }, { id: 6, title: 'Emp 6' }]

  useEffect( () => {
    prepData()
  }, [])

  
  return (
    <>
      { dataReady === true && (
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
      )}
    </>
  );
}


export default AllEmpTL