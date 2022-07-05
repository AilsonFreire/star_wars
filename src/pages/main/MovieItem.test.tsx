import { fireEvent, render, screen } from "../../test-utils";
import React from "react";
import { MovieItem } from "./MovieItem";
import { Movie } from "../../utils/types";


describe("MovieItem", () => {
  it("Shoould show the data", async () => {
    //Given
    render(
      <MovieItem movie={{
        title: "movie test",
        episode_id: 0,
        release_date: "2020-02-20",
        director: "roger call",
        opening_crawl: "this is a test movie"
      }}
        onSelectedMovie={function (movie: Movie): void {
          throw new Error("Function not implemented.");
        }} />
    )

    //When Then
    expect(screen.getByText(/episode 0/i)).toBeTruthy()
    expect(screen.getByText(/episode movie test/i)).toBeTruthy()
    expect(screen.getByText(/2020\-02\-20/i)).toBeTruthy()
  })

  it("Should get the correct value when the item is pressed", async () => {
    const itemSelected = jest.fn()
    //Given
    render(
      <MovieItem movie={{
        title: "movie test",
        episode_id: 0,
        release_date: "2020-02-20",
        director: "roger call",
        opening_crawl: "this is a test movie"
      }}
        onSelectedMovie={itemSelected}
      />
    )
    const selector = screen.getByText(/episode 0/i);

    //When
    fireEvent.click(selector);

    //Then
    expect(itemSelected).toHaveBeenCalledWith({
      title: "movie test",
      episode_id: 0,
      release_date: "2020-02-20",
      director: "roger call",
      opening_crawl: "this is a test movie"
    })

  })
})