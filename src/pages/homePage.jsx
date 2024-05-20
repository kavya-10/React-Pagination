 import React from "react";
import Couroseal from "../Components/Couroseal";
import Navbar from "../Components/Navbar";

const HomePage = () => {
  return (
    <div>
      <Couroseal />
      {/* gutterr component */}
      <div className="container-fluid px-0 text-center guuter1">
        <div className="row gx-0 justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="pt-5">
              <h1 className="p-3 text-danger">Harry Potter</h1>
              <p className="p-3 fst-oblique">
                Harry Potter, the indomitable hero of J.K. Rowling's enchanting
                saga, embodies the timeless struggle against darkness with
                unwavering courage and steadfast loyalty. From the moment he
                survives the deadly curse of Lord Voldemort as an infant,
                earning him the moniker "The Boy Who Lived," Harry's journey is
                one of resilience and self-discovery. Raised in relative
                obscurity by his Muggle relatives, his world transforms at
                eleven when he learns of his magical heritage and embarks on a
                transformative journey at Hogwarts School of Witchcraft and
                Wizardry. Alongside his steadfast friends Ron and Hermione,
                Harry navigates the complexities of adolescence while
                confronting the resurgence of Voldemort and his dark forces.
                {/* With each trial, Harry demonstrates a remarkable blend of
                bravery, compassion, and moral fortitude, ultimately leading the
                charge against the Dark Lord in a climactic battle of good
                versus evil. */}
                 {/* Harry Potter's enduring legacy serves as a
                testament to the power of hope, friendship, and the triumph of
                light over darkness in the face of adversity. */}
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="p-3">
              <img
                src="./src/assets/harry3.jpg"
                alt=""
                className="img-fluid"
                style={{ height: "430px" }} // Added img-fluid for responsive images
              />
            </div>
          </div>
        </div>
      </div>

      {/* card componentssss */}
      <div className="container-fluid con2">
        <h2 className="text-center mb-4 text-danger pt-5">Houses</h2>
        <div className="d-flex flex-row justify-content-center">
          <div className="card m-3 " style={{ width: "18rem" }}>
            <img
              src="./src/assets/gryfindor.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text pt-2">
                Gryffindor, known for its bravery and chivalry, values courage
                and daring, with its emblematic animal being the lion.
              </p>
            </div>
          </div>
          <div className="card m-3" style={{ width: "18rem" }}>
            <img
              src="./src/assets/raven.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text pt-2">
                Ravenclaw, renowned for its wisdom and intellect, celebrates
                creativity and learning, represented by the eagle.
              </p>
            </div>
          </div>
          <div className="card m-3" style={{ width: "18rem" }}>
            <img
              src="./src/assets/hufflepuff.webp"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text pt-5">
                Hufflepuff, characterized by loyalty and dedication, embraces
                inclusivity and values hard work, symbolized by the badger.
              </p>
            </div>
          </div>
          <div className="card m-3" style={{ width: "18rem" }}>
            <img
              src="./src/assets/slitheren.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text pt-2">
                Slytherin, known for ambition and cunning, prioritizes
                resourcefulness and ambition, with the serpent as its emblem.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="container-fluid text-center p-3 con1">
        <h1 className="text-center mb-4 text-danger pt-5">Cast</h1>
        <div class="row justify-content-start p-3">
          <div class="col-md-4 p-1">
            <h4 className="fst-italic">Danieal Radcliffe </h4>
            <img src="./src/assets/danieal-HP.jpg" id="cImg" alt="" />
          </div>
          <div class="col-md-4 p-1">
            <h4 className="fst-italic">Emma Watson </h4>
            <img src="./src/assets/emma.jpg" id="cImg" alt="" />
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-4 p-1">
            <h4 className="fst-italic">Rupert Grint </h4>
            <img src="./src/assets/rupert.jpg" id="cImg" alt="" />
          </div>
          <div class="col-md-4  p-1">
            <h4 className="fst-italic">Maggie Smith </h4>
            <img src="./src/assets/maggie.jpg" id="cImg" alt="" />
          </div>
        </div>
        <div class="row justify-content-end">
          <div class="col-md-4  p-1">
            <h4 className="fst-italic">Michael Gambon</h4>
            <img src="./src/assets/micheal.jpg" id="cImg" alt="" />
          </div>
          <div class="col-md-4  p-1">
            <h4 className="fst-italic">Julie Walters </h4>
            <img src="./src/assets/julie.jpg" id="cImg" alt="" />
          </div>
        </div>
        <div class="row justify-content-around">
          <div class="col-md-4  p-1">
            <h4 className="fst-italic">Mathew Lewis </h4>
            <img src="./src/assets/mathew.jpg" id="cImg" alt="" />
          </div>
          <div class="col-md-4  p-1">
            <h4 className="fst-italic">Tom Felton</h4>
            <img src="./src/assets/tom.jpg" id="cImg" alt="" />
          </div>
        </div>
        <div class="row justify-content-between">
          <div class="col-md-4  p-1">
            <h4 className="fst-italic">Harry Melling </h4>
            <img src="./src/assets/harry.jpg" id="cImg" alt="" />
          </div>
          <div class="col-md-4  p-1">
            <h4 className="fst-italic">Evvana Lynch </h4>
            <img src="./src/assets/evvana.jpg" id="cImg" alt="" />
          </div>
        </div>
        <div class="row justify-content-evenly">
          <div class="col-md-4  p-1">
            <h4 className="fst-italic">Heleana </h4>
            <img src="./src/assets/heleana.jpg" id="cImg" alt="" />
          </div>
          <div class="col-md-4  p-1">
            <h4 className="fst-italic">Robert Pattision</h4>
            <img src="./src/assets/robert.jpg" id="cImg" alt="" />
          </div>
        </div> 
      </div>  */}
    </div>
  );
};

export default HomePage;