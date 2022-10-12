import styled from '@emotion/styled';

let customConfig = { };

const defaultConfig = {
  space: {
    base: '10px',
    small: '10px',
    big: '20px',
  },
};

try {
  customConfig = require('../kodiui.config.js');
} catch (er) {
  console.log('er', er);
}

console.log('customConfigRoot', customConfig);

type SpaceSize = 0 | '0' | 'smaller' | 'small' | 'base' | 'big' | 'bigger';

interface Props {
  space?: SpaceSize;
}

type StyleFn<T> = (props: T) => string;

export const spaceBank = {
  ...defaultConfig.space,
  ...customConfig,
};

console.log('spaceBank', spaceBank);

const space: StyleFn<Props> = ({ space = 'base' }) => {
  switch (space) {
    case 'base':
      return spaceBank.base;
    case 'small':
      return spaceBank.small;
    default:
      return spaceBank.base;
  }
};

export const Box = styled.div<Props>`
  padding: ${space};
  background: gray;
`;
