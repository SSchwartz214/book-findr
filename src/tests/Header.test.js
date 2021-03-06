import React from "react";
import { mount } from "enzyme";
import Header from "../components/Header";

describe("Header", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Header />);
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
