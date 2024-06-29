import React from "react";
import Header from "../components/Header";
import Contact from "../components/Contact";

export const About = () => {
  return (
    <div>
      <Header />
      <br />
      <div className="floater">
        <h1>History</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          reprehenderit mollitia. Aperiam non corrupti amet adipisci labore
          recusandae quis, possimus harum optio fugit eum at facere, nostrum nam
          consequuntur quas.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
          odit tenetur voluptatum, cum debitis eos nisi pariatur nemo atque et
          repellendus incidunt, quod itaque vero rerum nesciunt delectus.
          Exercitationem, saepe.
        </p>
      </div>
      <br></br>
      <Contact />
    </div>
  );
};
