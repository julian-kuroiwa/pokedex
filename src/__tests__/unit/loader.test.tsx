import { shallow } from 'enzyme';
import React from 'react';
import Loader from '../../components/Loader';

describe('Loader', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Loader />);

    expect(wrapper).toMatchSnapshot();
  });
});
