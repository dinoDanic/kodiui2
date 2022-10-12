import { SpaceProps } from "./space";

export interface MainConfigProps {
  space?: {
    scalable?: {
      step: string;
      space: string;
      mobileStep: string;
      tabletStep: string;
    };
    fixed?: SpaceProps 
  };
}
