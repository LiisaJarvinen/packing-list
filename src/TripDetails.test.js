import React from "react";
import TripDetails from "./Components/TripDetails";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe('Testing App', () => {
  it("Has one paragraph", () => {
    const wrapper = shallow(<TripDetails />);
    expect(wrapper.find("h1")).toHaveLength(1);
  });

});