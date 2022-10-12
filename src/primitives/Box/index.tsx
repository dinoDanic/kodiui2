import styled from '@emotion/styled';
import { MainConfig } from '../../libs/config/mainConfig';
import { StyleFn } from '../../libs/types';
import { SpaceSize } from '../../libs/types/space';

interface Props {
  space?: SpaceSize;
}

const space: StyleFn<Props> = ({ space = 'base' }) => {
  if (MainConfig.space?.fixed) {
    return MainConfig.space.fixed[space];
  }
  return ""
};

export const Box = styled.div<Props>`
  padding: ${space};
  background: gray;
`;
