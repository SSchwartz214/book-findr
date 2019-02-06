import React from "react";
import { shallow } from "enzyme";
import Books from "../components/Books";
import { mockBooks } from "./MockData";

describe("Books", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Books />);
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should match snapshot when loading", () => {
    wrapper.setState({ loading: true });

    expect(wrapper).toMatchSnapshot();
  });

  it("should match snapshot when there are no results", () => {
    wrapper.setState({ error: "No results" });

    expect(wrapper).toMatchSnapshot();
  });

  it("should return book JSON", async () => {
    const mockEvent = { preventDefault: jest.fn() };
    wrapper.setState({ searchField: "ruby" });

    expect(wrapper.state().books.length).toEqual(0);

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        json: () => Promise.resolve(mockBooks)
      });
    });
    await wrapper.instance().searchBooks(mockEvent);
    expect(window.fetch).toHaveBeenCalled();
    expect(wrapper.state().books.length).toEqual(10);
  });

  it("should return an error if there is invalid input", async () => {
    const mockEvent = { preventDefault: jest.fn() };
    wrapper.setState({ searchField: "" });

    expect(wrapper.state().books.length).toEqual(0);

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({ status: 400 });
    });
    await wrapper.instance().searchBooks(mockEvent);
    expect(window.fetch).toHaveBeenCalled();
    await expect(wrapper.state().error).toEqual("Please enter a valid term");
  });

  it("should return an error if there are no results", async () => {
    const mockEvent = { preventDefault: jest.fn() };
    wrapper.setState({ searchField: "2432fdf342r" });

    expect(wrapper.state().books.length).toEqual(0);

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        json: () => Promise.resolve({ kind: "books#volumes", totalItems: 0 })
      });
    });
    await wrapper.instance().searchBooks(mockEvent);
    expect(window.fetch).toHaveBeenCalled();
    await expect(wrapper.state().error).toEqual("No results");
  });

  it("should update state with user input", () => {
    const mockEvent = { target: { value: "Ruby" } };
    wrapper.instance().handleSearch(mockEvent);

    expect(wrapper.state().searchField).toEqual("Ruby");
  });
});
