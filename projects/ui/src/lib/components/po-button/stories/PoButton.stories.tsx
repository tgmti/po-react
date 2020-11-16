import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import PoButton, { PoButtonProps } from '..';

export default {
  title: 'Button/PoButtonComponent',
  component: PoButton,
  argTypes: {
    pLabel: { defaultValue: 'PoButton' },
    pIcon: {
      control: {
        type: 'select',
        options: [
          undefined,
          'po-icon-news',
          'po-icon-calendar',
          'po-icon-user',
          'po-icon-telephone',
        ]
      },
    },
    pClick: { action: 'pClick' },
  },
} as Meta;

const Template: Story<PoButtonProps> = (args) => <PoButton {...args} />;

export const Componente = Template.bind({});