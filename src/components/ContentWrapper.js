import React from 'react'
import { useSelector } from 'react-redux'


function ContentWrapper() {
    const mode = useSelector((state) => state.mode)

    return (
        <div className="ContentWrapper" style={{'backgroundColor': mode.color2}}>
          
        </div>
    )
}

export default ContentWrapper