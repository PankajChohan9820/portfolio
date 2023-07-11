import React from "react";
import './Download.css'

function Download() {
  const resumeUrl = "https://drive.google.com/file/d/1JV4zZ2zgQz4JuKd_9kwhvCU2q1V_Wujg/view?usp=sharing";
  return (
    <div style={{paddingTop:'20px'}}>
    <a href={resumeUrl} class="buttonDownload">Download</a>
    </div>
  )
}

export default Download