import * as React from 'react';
import { StickyNotes, TimelineDiv } from './style';
import pin from '../assets/images/pngimg.com - pin_PNG64.png'
import blackboard from '../assets/images/blackboard_chalk.png'
import blackboard2 from '../assets/images/blackboard.png'

export default function TimeLine({ timelineRef }) {
  const [showContent, setShowContent] = React.useState()
  const timeLineData = require('../shared/constant.json')
  const handleNoteClick = (id) => {
    let content = timeLineData.timelineCards.filter((el, index) => index == id)[0].sideContent
    setShowContent(content)
  }

  return (
    <TimelineDiv ref={timelineRef}>
      <div id="board">
        {/* index={index} onClick={() => handleNoteClick(index)} onMouseLeave={removeSideContent} */}
        <StickyNotes>
          <ul>
            {timeLineData.timelineCards.map((data, id) =>
              <li key={id} onClick={() => handleNoteClick(id)}>
                <a>
                  <img src={pin} style={{ width: 25, height: 25, float: 'right' }} />
                  <h2>{data.date}</h2>
                  <p>{data.description}</p>
                  <p>{data.shortDescription}</p>
                </a>
              </li>
            )}
          </ul>
        </StickyNotes>
      </div>
      <div style={{ flexGrow: 1 }} />
      <div style={{ marginTop: -25, position: 'relative' }}>
        {showContent ? <img src={blackboard2} className='blackboardImg' /> : <img src={blackboard} className='blackboardImg' />}
        <div className='contentDiv'>
          <h5 className='blackboardMsg'>{showContent}</h5>
        </div>
      </div>
    </TimelineDiv>
  );
}