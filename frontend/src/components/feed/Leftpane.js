import classes from "./Leftpane.module.css";
import React from "react";
import dp from "../images/profile.png";

const Leftpane = (props) => {
  const { user } = props;

  return (
    <div className={classes.leftpane}>
      <img
        src={
          user.avatar === ""
            ? dp
            : `http://localhost:5000/images/${user.avatar}`
        }
        alt="404_user_img"
        className={classes.dp}
      />
      <div className={classes.btn}>{user.name}</div>
      <div className={classes.btn}>{user.location}</div>
      <div className={classes.btn}>
        {user.isInvestor === 0 ? "Startup" : "Investor"}
      </div>
    </div>
  );
};

export default Leftpane;

Leftpane.defaultProps = {
  name: "Default Name",
  text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores modi aliquid possimus explicabo atque illum ullam nisi maiores voluptas, similique illo, natus ratione veritatis enim voluptatum adipisci quisquam ea temporibus numquam rem id necessitatibus quasi nulla. Hic praesentium ipsum perferendis, numquam veritatis sit, maiores fuga repellendus tempora accusantium saepe ab.",
  date: "24th July, 2019",
  time: "7:30pm",
  image: "https://picsum.photos/536/354",
  dp: dp,
};
