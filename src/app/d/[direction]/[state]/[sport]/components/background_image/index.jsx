"use client";

import styles from "./styles.module.css";
<<<<<<< Updated upstream

export default function Background({ imgData, data }) {
  const img = `/images/sports/${imgData}.jpg`;
  return (
    <>
      <div className={styles.container}>
        <img className={styles.img} src={img} alt={Object.values(imgData)} />
        <div className={styles.text}>
          <h3>Sport:{data.location}</h3>
          <hr />
          <p>Price range:{data.price}</p>
        </div>
      </div>
      <div>
        <p>Detailed Location:{data.locationDetailed}</p>
        <p>Best Season:{data.season}</p>
        <p>Weather Conditions:{data.weather}</p>
      </div>
=======
import { Iceland } from "next/font/google";
const inter = Iceland({ weight: ["400"], subsets: ["latin"] });

export default function Background({ imgData, data }) {
  const img = `/images/sports/${imgData}.jpg`;

  let randomInt = Math.floor(Math.random() * 11) + 10;

  let randomNumber = randomInt * 500;

  return (
    <>
      <div className={`${inter.className} ${styles.container}`}>
        <img className={styles.img} src={img} alt={Object.values(imgData)} />
        <div className={styles.text}>
          <h3>Sport: {data.name}</h3>
          <hr />
          <h3>Location: {data.location}</h3>
          <br />
          <p>
            <h4>Price range: </h4>
            {randomNumber} - {randomNumber + 500}
          </p>
          <br />
          <br />
          <br />
          <div className={styles.box}>
            <p>
              <h4>Detailed Location: </h4>
              {data.description}
            </p>
            <br />
            <p>
              <h4>Best Season: </h4>
              {data.bestSeason}
            </p>
            <br />
            <p>
              <h4>Weather Conditions: </h4>
              {data.bestWeather}
            </p>
          </div>
        </div>
      </div>
>>>>>>> Stashed changes
    </>
  );
}
