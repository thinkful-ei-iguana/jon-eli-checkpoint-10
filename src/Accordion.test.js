import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Accordion from './Accordion.js';

configure({ adapter: new Adapter() });

const sections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]

describe('<Accordion />', () => {
    it('renders this UI as expected', () => {
        // Render the component, as JSON
        const tree = renderer.create(<Accordion sections={sections} />).toJSON();
        // Check whether it matches the previous snapshot
        // Stored in __snapshots__/App.test.js.snap
        expect(tree).toMatchSnapshot(); 
    });

    it('renders an empty li when the sections prop is not supplied', () => {
      const wrapper = shallow(<Accordion />)
      expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('renders no sections as active by default', () => {
      const tree = renderer.create(<Accordion sections={sections} />).toJSON()
    expect(tree).toMatchSnapshot()
    })

    it(' opens a clicked section', () => {
      const wrapper = shallow(<Accordion sections={sections} />)
      wrapper.find('button').at(1).simulate('click')
      expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('only opens the last section when multiple sections have been clicked.', () => {
      const wrapper = shallow(<Accordion sections={sections} />)
      wrapper.find('button').at(0).simulate('click')
      wrapper.find('button').at(1).simulate('click')
      wrapper.find('button').at(2).simulate('click')
      expect(toJson(wrapper)).toMatchSnapshot()
  })
});