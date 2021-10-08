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
          <form>
            <table>
              <tbody>
                <tr>
                  <td>
                    <h3> Name</h3>
                  </td>
                  <td>
                    <p> {props.name} </p>
                  </td>
                  <td>
                    <input type="text" placeholder="Enter new name" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3> Email</h3>
                  </td>
                  <td>
                    <p> {props.email} </p>
                  </td>
                  <td>
                    <input type="text" placeholder="Enter new E-mail" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3> Number</h3>
                  </td>
                  <td>
                    <p> {props.number} </p>
                  </td>
                  <td>
                    <input type="text" placeholder="Change Number" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3> City</h3>
                  </td>
                  <td>
                    <p> {props.city} </p>
                  </td>
                  <td>
                    <input type="text" placeholder="Change City" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3> Password</h3>
                  </td>
                  <td></td>
                  <td>
                    <input type="text" placeholder="Enter new password" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3 className={classes.biohead}> Bio</h3>
                  </td>
                  <td className={classes.bio}>
                    <p className={classes.bio}> {props.bio} </p>
                  </td>
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
              </tbody>
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
  email: "xyzxyz@zyz.com",
  number: "9089786767",
  city: "atlantis",
};
