import React from "react";
import { StickyNotes } from "./style";
import pin from '../assets/images/pngimg.com - pin_PNG64.png'

const Notes = ({ data, index, handleNoteClick, removeSideContent }) => {
    return (
        <StickyNotes index={index} onClick={() => handleNoteClick(index)} onMouseLeave={removeSideContent}>
            <ul>
                <li>
                    <a>
                        <img src={pin} style={{ width: 25, height: 25, float: 'right' }} />
                        <h2>{data.date}</h2>
                        <p>{data.description}</p>
                        <p>{data.shortDescription}</p>
                    </a>
                </li>
            </ul>
        </StickyNotes>
    )
}

export default Notes;