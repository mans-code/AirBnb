import React from "react";
import Card from "../Card/Card";
import Banner from "../Banner/Banner";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=320"
          title="Unique stays"
          description="Space that are more than just place to sleep"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=320"
          title="Online Exprience"
          description="Space that are more than just place to sleep"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=320"
          title="Entire homes"
          description="Space that are more than just place to sleep"
        />
      </div>

      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/e384315c-5209-4688-a3d0-4c74b03e56b8.jpg?im_w=720"
          title="Entire homes"
          description="Space that are more than just place to sleep"
          price={"$11.44"}
        />

        <Card
          src="https://a0.muscache.com/im/pictures/e384315c-5209-4688-a3d0-4c74b03e56b8.jpg?im_w=720"
          title="Entire homes"
          description="Space that are more than just place to sleep"
          price={"$11.44"}
        />

        <Card
          src="https://a0.muscache.com/im/pictures/e384315c-5209-4688-a3d0-4c74b03e56b8.jpg?im_w=720"
          title="Entire homes"
          description="Space that are more than just place to sleep"
          price={"$11.44"}
        />
      </div>
    </div>
  );
}

export default Home;
