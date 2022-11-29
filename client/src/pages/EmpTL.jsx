import Timeline, {
  TimelineHeaders,
  SidebarHeader,
  DateHeader
} from 'react-calendar-timeline'

import moment from 'moment'

const EmpTL = (props) => {
  
  const employees = [{ id: 1, title: 'Emp 1' }]

  const shifts = [
    {
      id: 1,
      group: 1,
      title: 'Working',
      start_time: moment.unix(1669730400),
      end_time: moment.unix(1669730400).add(8, 'hour'),
      canMove: true,
    },
  ]

  return (
    <Timeline
      groups={employees}
      items={shifts}
      defaultTimeStart={moment().add(-12, 'hour')}
      defaultTimeEnd={moment().add(12, 'hour')}
    >
      
    </Timeline>
  );
}


export default EmpTL