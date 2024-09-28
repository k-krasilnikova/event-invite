import { FC } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

interface ITimelineProps {
  roadmap: { time: string; title: string; description: string }[];
}

export const TimePlan: FC<ITimelineProps> = ({ roadmap }) => (
  <Timeline position="alternate">
    {roadmap.map((action, index) => {
      const isLastItem = roadmap.length === index + 1;
      return (
        <TimelineItem key={action.title}>
          <TimelineOppositeContent color="textSecondary">
            {action.time}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" />
            {!isLastItem && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>{action.title}</TimelineContent>
        </TimelineItem>
      );
    })}
  </Timeline>
);

export default TimePlan;
