import React from "react";
import App from "./App";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Testing App", () => {
  it("Should return one Menu", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Menu")).toHaveLength(1);
  });

});