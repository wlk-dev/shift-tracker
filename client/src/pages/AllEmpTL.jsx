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
      start_time: moment(),
      end_time: moment().add(8, 'hour'),
      canMove: false,
    },
    {
      id: 2,
      group: 2,
      title: 'item 2',
      start_time: moment().add(-0.5, 'hour'),
      end_time: moment().add(0.5, 'hour'),
      canMove: false,
    },
    {
      id: 3,
      group: 3,
      title: 'item 3',
      start_time: moment().add(2, 'hour'),
      end_time: moment().add(3, 'hour'),
      canMove: false,
    }
  ]

  return (
    <Timeline
      groups={employees}
      items={shifts}
      defaultTimeStart={moment().add(-12, 'hour')}
      defaultTimeEnd={moment().add(12, 'hour')}
      minZoom={24 * 60 * 60 * 1000}
      maxZoom={365.24 * 86400 * 1000}
    >
      
    </Timeline>
  );
}


export default AllEmpTL