/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import DashboardComponent from 'components/pages/DashboardComponent.js';

describe('DashboardComponent', () => {
  let component;

  beforeEach(() => {
    component = createComponent(DashboardComponent);
  });

  it('should have its component name as default className', () => {
    expect(component.props.className).to.equal('dashboard-component');
  });
});