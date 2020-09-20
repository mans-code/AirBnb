import React from "react";
import { Button } from "@material-ui/core";

import SearchResult from "../SearchResult/SearchResult";

import "./SearchPage.css";

function Search() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays . 26 august to 30 august . 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Flexibility</Button>
        <Button variant="outlined">Type Of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Room and beds</Button>
        <Button variant="outlined">Moor filters</Button>
      </div>
      <SearchResult
        img="https://a0.muscache.com/im/pictures/aaee9046-e3fb-4dd0-9060-6a1904a43643.jpg?im_w=720"
        location="Private Room in Toronto"
        title="Stay at this spacious Edwardian House"
        description="1 guest . 1 bed . 1.5 shared bathroom . wifi . kitchen"
        star={4.73}
        price="$30 / night"
        total="$200 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/aaee9046-e3fb-4dd0-9060-6a1904a43643.jpg?im_w=720"
        location="Private Room in Toronto"
        title="Stay at this spacious Edwardian House"
        description="1 guest . 1 bed . 1.5 shared bathroom . wifi . kitchen"
        star={4.73}
        price="$30 / night"
        total="$200 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/aaee9046-e3fb-4dd0-9060-6a1904a43643.jpg?im_w=720"
        location="Private Room in Toronto"
        title="Stay at this spacious Edwardian House"
        description="1 guest . 1 bed . 1.5 shared bathroom . wifi . kitchen"
        star={4.73}
        price="$30 / night"
        total="$200 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/aaee9046-e3fb-4dd0-9060-6a1904a43643.jpg?im_w=720"
        location="Private Room in Toronto"
        title="Stay at this spacious Edwardian House"
        description="1 guest . 1 bed . 1.5 shared bathroom . wifi . kitchen"
        star={4.73}
        price="$30 / night"
        total="$200 total"
      />
    </div>
  );
}

export default Search;
