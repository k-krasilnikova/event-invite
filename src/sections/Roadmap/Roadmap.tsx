import { FC } from "react";

import TimePlan from "../../components/TimePlan";
import { ROADMAP_YOGA, ROADMAP_PARTY } from "../../constants/roadmap";
import { RoadmapLayout } from "./styled";

export const Roadmap: FC<{ isYogaAvailable: boolean }> = ({
  isYogaAvailable,
}) => (
  <RoadmapLayout>
    {isYogaAvailable && <TimePlan roadmap={ROADMAP_YOGA} />}
    <TimePlan roadmap={ROADMAP_PARTY} />
  </RoadmapLayout>
);

export default Roadmap;
