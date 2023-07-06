import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <div className="bg-container">
      <h1 className="heading">
        MY JOURNEY OF <br /> <br />
        <span className="subheading">CCBP 4.0</span>
      </h1>
      <div className="timeline-container">
        <Chrono
          items={timelineItemsList}
          theme={{
            primary: '#0967d2',
            secondary: '#ffffff',
            titleColor: '#0967d2',
          }}
          mode="VERTICAL_ALTERNATING"
        >
          {timelineItemsList.map(item => {
            if (item.categoryId === 'COURSE') {
              return (
                <CourseTimelineCard courseItemDetails={item} key={item.id} />
              )
            }
            return (
              <ProjectTimelineCard projectItemDetails={item} key={item.id} />
            )
          })}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
