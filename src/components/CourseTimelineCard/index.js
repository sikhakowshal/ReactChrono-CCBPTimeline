import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {courseItemDetails} = props
  const {courseTitle, description, duration, tagsList} = courseItemDetails

  return (
    <div className="course-item-card">
      <div className="course-card-title-container">
        <h1 className="course-card-title">{courseTitle}</h1>
        <div className="course-card-duration-container">
          <AiFillClockCircle className="clock-icon" />
          <p className="course-card-duration">{duration}</p>
        </div>
      </div>
      <p className="course-card-description">{description}</p>
      <ul className="course-card-tags-container">
        {tagsList.map(eachTag => (
          <li className="tag-item">
            <p className="tag-item-text">{eachTag.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
