import { SpaceProps } from "./space";

export interface MainConfigProps {
  space: {
    type: "scalable" | "fixed"
    scalable?: {
      step: string;
      space: string;
      mobileStep: string;
      tabletStep: string;
    };
    fixed: SpaceProps 
  };
}
