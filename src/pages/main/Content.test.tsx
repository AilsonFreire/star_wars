import { fireEvent, render, screen } from "../../test-utils";
import React from "react";
import { Content } from "./Content";

describe("Content", () => {
  it("Should show a message when there's no movies", async () => {
    //Given
    render(<Content movies={[]} />);

    //When Then
    expect(screen.getByText(/no movie selected/i)).toBeTruthy()
  })

  it("Should show a list of movies", async () => {
    //Given
    render(<Content movies={[{
      director: 'bla',
      opening_crawl: 'Loren Ipsum',
      episode_id: 2, release_date: '2020-02-20',
      title: 'test movie'
    }]} />);


    //When Then
    expect(screen.getByText(/episode 2/i)).toBeTruthy()
    expect(screen.getByText(/episode ii test movie/i)).toBeTruthy()
    expect(screen.getByText(/2020\-02\-20/i)).toBeTruthy()
  })
})