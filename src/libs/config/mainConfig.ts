import { SpaceBank } from '../css/SpaceBank';
import { MainConfigProps } from '../types/config';

let customConfig: MainConfigProps = {};

try {
  customConfig = require('../../../../kodiui.config.js');
} catch (er) {
  customConfig = {}
}


export const MainConfig: MainConfigProps = {
  space: {
    fixed: {
      smaller: SpaceBank[1],
      small: SpaceBank[1.5],
      base: SpaceBank[2],
      big: SpaceBank[2.5],
      bigger: SpaceBank[3],
      ...customConfig.space?.fixed
    },
  },
};
