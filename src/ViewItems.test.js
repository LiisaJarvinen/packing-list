import React from "react";
import ViewItems from "./Components/ViewItems";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { render } from '@testing-library/react';

configure({ adapter: new Adapter() });

test("Includes text example", () => {
  const { getByText } = render(<ViewItems />);
  const content = getByText(/My Packing List/i);
  expect(content).toBeInTheDocument();
});

describe('Testing App', () => {
  it("Has one list", () => {
    const wrapper = shallow(<ViewItems />);
    expect(wrapper.find("ul")).toHaveLength(1);
  });

});