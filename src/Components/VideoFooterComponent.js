import React from 'react';
import './VideoFooter.css';

function VideoFooterComponent() {
    return (
        <div className="videoFooter">

            <div className="videoFooter__text">
                <h3>@draasthasharma</h3>
                <p>Hello this Dr.Astha Sharma</p>
            </div>
            <div>
            <img
            className="videoFooter__record"
            src="https://static.thenounproject.com/png/934821-200.png"
            alt=""
          />
            </div>
        </div>
    )
}

export default VideoFooterComponent
