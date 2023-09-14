import React from "react";
import "./info.scss";

const Info = () => {
  return (
    <>
      <div className="container about">
        <div className="row">
          <div className="col-12">
            <div className="texts">
              <h4>First Look</h4>
              <h2>Nike Air Max Pulse</h2>
              <p>
                Extreme comfort. Hyper durable. Max volume. Introducing the Air
                Max Pulse —designed to push you past your limits and help you go
                to the max.
              </p>
              <div className="buttons">
                <button>Notify Me</button>
                <button>Shop Air Max</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
