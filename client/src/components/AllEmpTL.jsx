import React, { useState, useEffect } from "react"

import Timeline from 'react-calendar-timeline'

import { Spinner, Alert, AlertIcon } from '@chakra-ui/react'

import moment from 'moment'


const AllEmpTL = (props) => {
  const [dataReady, setDataReady] = useState("not ready")
  const [employees, setEmployees] = useState([])
  const [shifts, setShifts] = useState([])

  const register = {}
  let index = 0
  let uid

  const timelineStyle = {
    margin: "1%",
    border: "solid 1px black",
  }

  const prepData = () => {
    let emps = []
    for (const key in props.data.data) {
      uid = props.data.data[key].user_id
      if (register[uid] === undefined) {
        register[uid] = true
        index++;
        emps.push({ id: uid, title: `${props.data.data[key].fname}` });
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
    if (employees.length && shifts.length) {
      setDataReady("ready")
    } else {
      setDataReady("no data")
    }
  }, [employees, shifts])


  useEffect(() => {
    prepData()
  }, [])


  return (
    <>
      {dataReady === "ready" ? (
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
      ) : dataReady === "no data" ? (
        <Alert status='warning'>
          <AlertIcon />
          No active shifts.
        </Alert>
      ) : (
        <Spinner />
      )}
    </>
  );
}


export default AllEmpTL