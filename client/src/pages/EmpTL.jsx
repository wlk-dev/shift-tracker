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
      start_time: moment(),
      end_time: moment().add(8, 'hour'),
      canMove: true,
    },
    {
      id: 2,
      group: 1,
      title: 'item 2',
      start_time: moment().add(-0.5, 'hour'),
      end_time: moment().add(0.5, 'hour')
    },
    {
      id: 3,
      group: 1,
      title: 'item 3',
      start_time: moment().add(2, 'hour'),
      end_time: moment().add(3, 'hour')
    }
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