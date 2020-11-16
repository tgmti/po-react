import { addParameters } from '@storybook/client-api';

addParameters({
  viewMode: 'docs',
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

import '@po-ui/style/css/po-theme-default.min.css'
import './portal.css'
