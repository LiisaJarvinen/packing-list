import React from "react";
import AddItems from "./Components/AddItems";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Testing App", () => {
  it("Has one input", () => {
    const wrapper = shallow(<AddItems />);
    expect(wrapper.find("input")).toHaveLength(1);
  });

});