/* eslint-disable no-undef */
import React from 'react';
import AccessibleSpinner from './index';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

let SpinnerWrapperDiv, isLoading;

isLoading = true;

beforeEach(() => {
    SpinnerWrapperDiv = shallow(<AccessibleSpinner isLoading={isLoading} />);
});

describe('Spinner', () => {
    it('should show the Spinner', () => {
        // mock o/p
        let output = 1;

        // Expectations
        expect(SpinnerWrapperDiv.find('div').length).toEqual(output);
    });
});
