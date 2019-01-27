import React from "react";
import { shallow } from "enzyme";
import Header from "../components/Header";
jest.mock("axios");

describe("Header", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
