import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import PoTooltip, { PoTooltipProps } from '..';
import { PoWithTooltip } from '../PoWithTooltip';

export default {
    title: 'PoTooltip/PoTooltipComponent',
    component: PoTooltip,
  } as Meta;

const PoTooltipLabsTemplate: Story = (args) => {

  const ButtonWithTooltip = PoWithTooltip((props:any) => (
    <button {...props}>{props.children}</button>
  ));

  return (
      <ButtonWithTooltip
        tooltip="Tooltip"
        onClick={() => alert('oi Tooltip')}>
        Botão com Tooltip
      </ButtonWithTooltip>
  )
};

export const PoTooltipLabs = PoTooltipLabsTemplate.bind({});

