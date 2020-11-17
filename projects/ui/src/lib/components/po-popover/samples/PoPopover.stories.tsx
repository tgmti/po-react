import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import PoPopover, { PoPopoverProps } from '..';

export default {
    title: 'Popover/PoPopoverComponent',
    component: PoPopover,
  } as Meta;

const POPopoverBasicTemplate: Story<PoPopoverProps> = (args) => {

    return (
        <>
            <PoPopover><button>Open Popover</button></PoPopover>
            <PoPopover><button>Open Popover2</button></PoPopover>
        </>
    )
};

export const POPopoverBasic = POPopoverBasicTemplate.bind({});

