import React from 'react';
import addons from '@storybook/addons';

import Rtl from './RtlPanel';

const ADDON_ID = 'storybook-addon-background';
const PANEL_ID = `${ADDON_ID}/background-panel`;

addons.register(ADDON_ID, api => {
  const channel = addons.getChannel();
  addons.addPanel(PANEL_ID, {
    title: 'Rtl',
    render: () => <Rtl channel={channel} api={api} />,
  });
});
