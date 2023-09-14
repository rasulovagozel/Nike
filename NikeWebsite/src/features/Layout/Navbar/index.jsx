import React from "react";
import "./navbar.scss";
import {AiOutlineSearch} from "react-icons/ai"
import {AiOutlineHeart} from "react-icons/ai";
import {BsBasket3} from "react-icons/bs"

const Navbar = () => {
  return (
    <>
      <div className="container navbar">
        <div className="row">
          <div className="col-2 image">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="79"
              height="79"
              viewBox="0 0 79 79"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M68.9262 28.7725L25.8854 47.0298C22.302 48.5502 19.2874 49.3087 16.8581 49.3087C14.1248 49.3087 12.1336 48.3442 10.9108 46.4184C9.32501 43.9335 10.0182 39.9381 12.7385 35.7203C14.3536 33.2551 16.4069 30.9925 18.4079 28.828C17.9371 29.5931 13.7815 36.5083 18.3262 39.7648C19.2253 40.4187 20.5037 40.7391 22.0764 40.7391C23.3384 40.7391 24.7869 40.5332 26.3792 40.1179L68.9262 28.7725Z"
                fill="#111111"
              />
            </svg>
          </div>
          <div className="col-6">
            <div className="lists">
                <ul>
                    <li>New & Featured</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>Kids</li>
                    <li>Sale</li>
                    <li>SNKRS</li>
                </ul>
            </div>
          </div>
          <div className="col-4 icons">
            <div className="input">
                <input type="search" placeholder="Search" />
                <AiOutlineSearch />
            </div>
            <div className="icon1">
                <AiOutlineHeart className="heart" />
            </div>
            <div className="icon2">
            <BsBasket3 className="basket" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
