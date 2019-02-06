import React from "react";
import { shallow } from "enzyme";
import BookCard from "../components/BookCard";

describe("BookCard", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <BookCard
        key={1}
        image={"wwww.image.com"}
        title={"Ruby"}
        authors={["Seth"]}
        publisher={"SethCo"}
        link={"wwww.link.com"}
      />
    );
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should match snapshot", () => {
    wrapper = shallow(
      <BookCard
        key={1}
        image={"wwww.image.com"}
        title={"Ruby"}
        authors={["Seth", "Joe"]}
        publisher={"SethCo"}
        link={"wwww.link.com"}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("should match snapshot", () => {
    wrapper = shallow(
      <BookCard
        key={1}
        image={"wwww.image.com"}
        title={"Ruby"}
        authors={null}
        publisher={"SethCo"}
        link={"wwww.link.com"}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
