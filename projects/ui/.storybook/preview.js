import { addDecorator } from '@storybook/react';
// import { docs } from '@storybook/addon-docs';
import centered from '@storybook/addon-centered/react';

// addDecorator(docs);
addDecorator(centered);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

import '@po-ui/style/css/po-theme-default.min.css'