import classes from "./Rightpane.module.css";
import React from "react";
import Card from "./Card";
import axios from "axios";
import { useState, useEffect } from "react";

const Rightpane = (props) => {
  const [news, setnews] = useState(null);
  const fetcher = async () => {
    await axios
      .get(
        "http://api.mediastack.com/v1/news?access_key=765ab931ef6ff3b1f1b9e468d21693d5&categories=business&languages=en"
      )
      .then((response) => {
        console.log(response.data.data);
        setnews(response.data.data);
      })
      .catch((e) => console.log("api failed"));
  };

  useEffect(() => {
    fetcher();
  }, []);

  return (
    <div className={props.rightpane==true ? classes.rightpane : classes.overlay}>
      <div className={classes.scroll}>
        <h3 className={classes.head}>News</h3>
        {news != null ? (
          news
            .filter((item) => {
              if (item.image) return item;
            })
            .map((item) => (
              <a href={item.url} target="_blank">
                {" "}
                <Card image={item.image} text={item.title} />{" "}
              </a>
            ))
        ) : (
          <div className={classes.loader}></div>
        )}
      </div>
      <br />
    </div>
  );
};

export default Rightpane;
