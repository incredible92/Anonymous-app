import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

const featureItems = [
  {
    title: "Anonymity",
    desc:
      "Our Platform ensures your privacy so that you stay anonymous everytime you send someone a secret message. You are anonymous until you ever choose to reveal your identity.",
  },
  {
    title: "Safe and Secure",
    desc:
      "Safety of our users using this anonymous messaging platform is very important for us. We have got reporting systems so that you can report anything that you do not like to see.",
  },
  {
    title: "24/7 Support",
    desc:
      "If there is anything that you need help with related to our anonymous messaging and feedback platform, We are always here for you. 24 hours a day and 7 days a week.",
  },

  {
    title: "Easy ",
    desc:
      "We are constantly working on Kubool as a platform to make it as user friendly as possible. As of now you can just download our app, fill in your username & pass to get started.",
  },
];
function HomePage() {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">ANONYMOUS</Link>

          <div className="nav-links">
            <Link to="/home">HOME</Link>
            <Link to="/download">DOWNLOAD</Link>
            <Link to="/get-started">GET SATERTED</Link>
            <Link to="/contact">CONTACT</Link>
          </div>
        </nav>
        <div className="content">
          <h1 className="heading">Send secret anonymous messages online!</h1>
          <p className="paragraph">
            This app is an interactive anonymous messaging app with a dare game.
            Create your Profile Link and Send it to all your contacts to check
            what do your friends think about you. With the help of the app, you
            can send and recieve anonymous compliments easily for free!
          </p>
        </div>
        <button className="button">Download Now!</button>
      </header>

      <div className="why">
        <h2>Why use anonymous?</h2>
        <p>
          Our Anonymous Messaging App comes along with many great features. Here
          we are going to list some of them. Have a look below.
        </p>
      </div>

      <div className="sections">
        {
          featureItems.map((item, itemIdx) => <div key= {itemIdx} className="section">
          <h2 >{item.title}</h2>
        <p>{item.desc}</p>
        </div>)
        }
      </div>
    </div>
  );
}

export default HomePage;
