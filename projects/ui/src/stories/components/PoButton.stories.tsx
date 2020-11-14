import React from 'react';
import { storiesOf } from '@storybook/react';

import PoButton from '../../lib/components/po-button';

storiesOf('PoButton', module)
    .add('Default', () => <PoButton label="Botao"></PoButton>)
    .add('Disabled', () => <PoButton disabled label="Disabled" />);