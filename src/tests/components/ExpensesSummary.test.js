import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should create component for multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={3} totalAmount={132241}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should create component for 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} totalAmount={1341}/>);
  expect(wrapper).toMatchSnapshot();
});