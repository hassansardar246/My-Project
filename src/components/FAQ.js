import React from "react";
import "./faq.css";
import { useState } from "react";
const FAQDATA = [
  {
    Question: "what is MovStream?",
    Ans: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices You can watch as much as you want, whenever you want without a single commercial all for one low monthly price. There"s always something new to discover and new TV shows and movies are added every week!',
  },
  {
    Question: "what is MovStream?",
    Ans: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices You can watch as much as you want, whenever you want without a single commercial all for one low monthly price. There"s always something new to discover and new TV shows and movies are added every week!',
  },
  {
    Question: "what is MovStream?",
    Ans: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices You can watch as much as you want, whenever you want without a single commercial all for one low monthly price. There"s always something new to discover and new TV shows and movies are added every week!',
  },
  {
    Question: "what is MovStream?",
    Ans: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices You can watch as much as you want, whenever you want without a single commercial all for one low monthly price. There"s always something new to discover and new TV shows and movies are added every week!',
  },
  {
    Question: "what is MovStream?",
    Ans: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices You can watch as much as you want, whenever you want without a single commercial all for one low monthly price. There"s always something new to discover and new TV shows and movies are added every week!',
  },
  {
    Question: "what is MovStream?",
    Ans: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices You can watch as much as you want, whenever you want without a single commercial all for one low monthly price. There"s always something new to discover and new TV shows and movies are added every week!',
  },
  {
    Question: "what is MovStream?",
    Ans: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices You can watch as much as you want, whenever you want without a single commercial all for one low monthly price. There"s always something new to discover and new TV shows and movies are added every week!',
  },
];

export default function FAQ(props) {
  const [visibility, setVisibility] = useState(
    Array(FAQDATA.length).fill(false)
  );
  // const [hide, setHide] = useState(false);
  // const [rotate, setRotate] = useState(false);
  // const HideDiv = () => {
  //   setHide(!hide);
  // };

  const toggleVisibility = (index) => {
    const newVisibility = [...visibility];
    newVisibility[index] = !newVisibility[index];
    setVisibility(newVisibility);
    // {
    //   visibility[index]
    //     ? (document.querySelector(".cross-btn").style.transform =
    //         "rotate(0deg)")
    //     : (document.querySelector(".cross-btn").style.transform =
    //         "rotate(45deg)");
    // }
  };

  return (
    <div className="container my-5 text-white">
      <h4 className="faq-heading">Frequently Asked Questions</h4>
      {FAQDATA.map((val, index) => {
        return (
          <div>
            <div
              key={index}
              onClick={() => toggleVisibility(index)}
              className="faq-section my-3"
            >
              <h4>{val.Question}</h4>
              <span key={index} className="cross-btn">
                +
              </span>
            </div>

            {visibility[index] && (
              <div key={index} className="faq-description">
                <p>{val.Ans}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
