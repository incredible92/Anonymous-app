import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

const featureItems = [
  {
    image: "/image/f-icon-1.png",
    title: "Anonymity",
    desc:
      "Our Platform ensures your privacy so that you stay anonymous everytime you send someone a secret message. You are anonymous until you ever choose to reveal your identity.",
  },
  {
    image: "/image/f-icon-1.png",
    title: "Safe and Secure",
    desc:
      "Safety of our users using this anonymous messaging platform is very important for us. We have got reporting systems so that you can report anything that you do not like to see.",
  },
  {
    image: "/image/f-icon-1.png",
    title: "24/7 Support",
    desc:
      "If there is anything that you need help with related to our anonymous messaging and feedback platform, We are always here for you. 24 hours a day and 7 days a week.",
  },

  {
    image: "/image/f-icon-1.png",
    title: "Easy ",
    desc:
      "We are constantly working on Kubool as a platform to make it as user friendly as possible. As of now you can just download our app, fill in your username & pass to get started.",
  },
];

const screenshots = [
  {
    image: "/image/feature-1.png",
  },
  {
    image: "/image/feature-2.png",
  },
  {
    image: "/image/feature-3.png",
  },
  {
    image: "/image/feature-4.png",
  },
];
function HomePage() {
  return (
    <div>
      <header>
        <nav>
          {" "}
          <div className="logo">ANONYMOUS</div>
          <div className="nav-links">
            <Link to="/">HOME</Link>
            <div>
              <a href="#down">DOWNLOAD</a>
            </div>
            <div className="nav-link">
              <div className="start">
                GET STARTED
                <div className="ready">
                  <Link to="/login">
                    {" "}
                    <p className="login get-started">LOGIN</p>
                  </Link>
                  <Link to="/register">
                    {" "}
                    <p className="get-started">REGISTER</p>
                  </Link>
                </div>
              </div>
            </div>
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
        <p className="feature">
          Our Anonymous Messaging App comes along with many great features. Here
          we are going to list some of them. Have a look below.
        </p>
      </div>

      <div className="sections">
        {featureItems.map((item, itemIdx) => (
          <div key={itemIdx} className="section">
            <img src={item.image} alt="icon" />
            <h2>{item.title}</h2>
            <p className="contents">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="screenshots">
        <h2>App Screenshots</h2>
        <p className="feedback">
          Out of all other Anonymous Messaging and Anonymous Feedback apps our
          User Interface is much easier to use. Have a quick look.
        </p>
      </div>

      <div className="sections">
        {screenshots.map((item, itemIdx) => (
          <div key={itemIdx} className="screenshort">
            <img src={item.image} alt="icon" className="img" />
          </div>
        ))}
      </div>

      <div className="downloads">
        <h2 id="down">Download Anonymous App Today!</h2>
        <p className="download">
          Our app is easy to use, 5MB in size, and fun to play with! Simply
          download the app and get started with Kubool now. After you download
          the app, easily create your account and share the profile link with
          friends to get going. Receive anonymous messages from friends online!
        </p>
      </div>
    </div>
  );
}

export default HomePage;
