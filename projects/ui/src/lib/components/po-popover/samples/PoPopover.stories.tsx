import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import PoPopover, { PoPopoverProps } from '..';

export default {
    title: 'Popover/PoPopoverComponent',
    component: PoPopover,
  } as Meta;

const POPopoverLabsTemplate: Story<PoPopoverProps> = (args) => {

    return (
        <>
            <PoPopover title="PoPopover" {...args}><button>PoPopover Custom</button></PoPopover>
            <PoPopover title="PoPopover Click" {...args} trigger="click"><button>PoPopover Click</button></PoPopover>
            <PoPopover title="PoPopover Hover" {...args} trigger="hover"><button>PoPopover Hover</button></PoPopover>
        </>
    )
};

export const POPopoverLabs = POPopoverLabsTemplate.bind({});

