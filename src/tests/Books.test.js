import React from "react";
import { shallow } from "enzyme";
import * as axios from "axios";
import Books from "../components/Books";
import { mockBooks } from "./MockData";
jest.mock("axios");

describe("Books", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Books />);
  });
  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should return book JSON", async () => {
    const mockEvent = { preventDefault: jest.fn() };
    const url = "https://www.googleapis.com/books/v1/volumes";
    const optionsObj = { params: { q: "" } };

    expect(wrapper.state().books.length).toEqual(0);

    axios.get.mockImplementation((url, optionsObj) => {
      return Promise.resolve({
        data: mockBooks
      });
    });
    await wrapper.instance().searchBook(mockEvent);
    expect(axios.get).toHaveBeenCalled();
    expect(wrapper.state().books.length).toEqual(10);
  });
});

{
  /* 
let mockSearchfn= jest.fn()

beforeEach(() => {
  wrapper = shallow(<BookList searchBook={mockSearchfn}>)
}) */
}
