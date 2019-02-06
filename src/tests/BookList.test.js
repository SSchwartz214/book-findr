import React from "react";
import { shallow } from "enzyme";
import BookList from "../components/BookList";
import { mockBooksTwo } from "./MockData";

describe("BookList", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BookList books={mockBooksTwo} />);
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
