import React from 'react'
import { Timeline , TimelineItem, TimelineSeparator , TimelineConnector , TimelineContent , TimelineDot } from '@mui/lab'

const MuiTimeLine = () => {
  return (
    <>
        <Timeline position='alternate'>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                A
                </TimelineContent>
            </TimelineItem>
            {/*  */}
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                B
                </TimelineContent>
            </TimelineItem>
            {/*  */}
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                C
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    </>
  )
}

export default MuiTimeLine