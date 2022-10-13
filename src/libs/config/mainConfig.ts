import { SpaceBank } from '../css/SpaceBank';
import { MainConfigProps } from '../types/config';

let customConfig: Partial<MainConfigProps> = {};

try {
  customConfig = require('../../../../kodiui.config.js');
} catch (er) {
  customConfig = {};
}

export const MainConfig: MainConfigProps = {
  space: {
    type: 'fixed',
    fixed: {
      smaller: SpaceBank[1],
      small: SpaceBank[1.5],
      base: SpaceBank[2],
      big: SpaceBank[2.5],
      bigger: SpaceBank[3],
      ...customConfig.space?.fixed,
    },
  },
};

const initialConfig: MainConfigProps = {
  space: {
    type: 'fixed',
    fixed: {
      smaller: SpaceBank[1],
      small: SpaceBank[2],
      base: SpaceBank[4],
      big: SpaceBank[6],
      bigger: SpaceBank[8],
      ...customConfig.space?.fixed,
    },
  },
};

export const MainConfigFn = (): MainConfigProps => {
  if (initialConfig.space?.type === 'fixed') {
    return {
      ...initialConfig,
    };
  } else return initialConfig;
};
