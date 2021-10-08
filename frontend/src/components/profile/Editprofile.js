import classes from "./Editprofile.module.css";
import Navbar from "../homepage/Navbar";
import React from "react";
import dp from "../images/profile.png";

const Editprofile = (props) => {
  return (
    <div className={classes.wrapper}>
      <Navbar pos="relative" round="0" />
      <div className={classes.container}>
        <div className={classes.leftpane}>
          <img src={props.image} alt="" />
          <h2>{props.name}</h2>
          <h3> {props.accounttype}</h3>
          <p className={classes.bio}>{props.bio}</p>
          <h3 className={classes.date}> Joined: {props.date}</h3>
        </div>
        <div className={classes.rightpane}>
          <form action="">
            <table>
              <tr>
                <td>Name</td>
                <td>{props.name}</td>
                <td>
                  <input type="text" placeholder="Enter new name" />
                </td>
                <td>
                    <button type="submit">Submit</button>
                </td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{props.email}</td>
                <td>
                  <input type="text" placeholder="Enter new E-mail" />
                </td>
                <td>
                    <button type="submit">Submit</button>
                </td>
              </tr>
              <tr>
                <td>Number</td>
                <td>{props.number}</td>
                <td>
                  <input type="text" placeholder="Change Number" />
                </td>
                <td>
                    <button type="submit">Submit</button>
                </td>
              </tr>
              <tr>
                <td>City</td>
                <td>{props.city}</td>
                <td>
                  <input type="text" placeholder="Change City" />
                </td>
                <td>
                    <button type="submit">Submit</button>
                </td>
              </tr>
              <tr>
                <td>Password</td>
                <td></td>
                <td>
                  <input type="text" placeholder="Enter new password" />
                </td>
                <td>
                    <button type="submit">Submit</button>
                </td>
              </tr>
              <tr>
                <td>Bio</td>
                <td >{props.bio}</td>
                <td>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Max 50 words"
                  ></textarea>
                </td>
              </tr>
            </table>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Editprofile;

Editprofile.defaultProps = {
  name: "Default Name",
  text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores modi aliquid possimus explicabo atque illum ullam nisi maiores voluptas, similique illo, natus ratione veritatis enim voluptatum adipisci quisquam ea temporibus numquam rem id necessitatibus quasi nulla. Hic praesentium ipsum perferendis, numquam veritatis sit, maiores fuga repellendus tempora accusantium saepe ab.",
  password: "loremipsumdolersetamet",
  bio: "consectetur adipisicing elit. Dllendus  adipisicing elit. Dllendus  adipisicing elit. Dllendus tempora accusantium",
  image: dp,
  date: "24th July",
  accounttype: "investor",
};
