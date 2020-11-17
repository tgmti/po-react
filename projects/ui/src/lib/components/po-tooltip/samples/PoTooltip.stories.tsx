import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import PoTooltip, { PoTooltipProps } from '..';

export default {
    title: 'PoTooltip/PoTooltipComponent',
    component: PoTooltip,
  } as Meta;

const PoTooltipLabsTemplate: Story<PoTooltipProps> = (args) => {

    return (
        <>
          <PoTooltip title="Tooltip" {...args} >
            <button onClick={() => alert('oi')}> Botão com Tooltip </button>
          </PoTooltip>
        </>
    )
};

export const PoTooltipLabs = PoTooltipLabsTemplate.bind({});

