import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {projectItemDetails} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectItemDetails

  return (
    <div className="project-card">
      <img src={imageUrl} alt="project" className="project-card-img" />
      <div className="project-card-title-container">
        <h1 className="project-card-title">{projectTitle}</h1>
        <div className="project-card-duration-container">
          <AiFillCalendar className="calendar-icon" />
          <p className="project-duration">{duration}</p>
        </div>
      </div>
      <p className="project-card-description">{description}</p>
      <a className="redirect-url" href={projectUrl}>
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
