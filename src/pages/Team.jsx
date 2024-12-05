import React from "react";
import styles from "./Team.module.css";
import HeadCard from "./HeadCard";
import { coordinatorsList } from "./heads_data";

import { coresList } from "./cores_data";
import OCCard from "./OCCard";
import Title from "./Title";
import Domain from "./Domain";
import Cores from "./Cores";
// import teampic from "../assets/images/teampic.webp"

// import style from "styled-jsx/style";

const Team = () => {
  return (
    <div className={styles.container} style={{ maxWidth:"100vw" ,overflowX:"hidden"}}>
      <Title color={"राजभाषा"} noncolor={"समिति"} style={{color: "white"}}/>
      <div data-aos="fade-up" className="container">
        <div className="fn_cs_news container">
          <div className="news_part">
            <div className="left_items" style={{margin:"0"}}>
              <div  className="blog__item">
                      {/* <img src={teampic} width="100%" alt="" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Title color={"प्रधान"} noncolor={"समन्वयक"} />
      <div className={styles.OverallHeadSection}>
        {coordinatorsList.map((heads) => {
          if (heads.id <= 3) {
            return (
              <OCCard
                key={heads.id}
                img={heads.imgUrl}
                name={heads.name}
                domain={heads.domain}
                linkedinId={heads.linkedinUrl}
                InstaId={heads.instaUrl}
              />
            );
          }
          return null;
        })}
      </div>
      <Title color={"मुख्य"} noncolor={"समन्वयक"} />
      <Title color={"प्रबंधन"}/>
      <div className={styles.HeadSection}>
        {coordinatorsList.map((heads) => {
          if (heads.id ==5 ||heads.id == 7 || heads.id == 18) {
            return (
              <HeadCard
                key={heads.id}
                img={heads.imgUrl}
                name={heads.name}
                domain={heads.domain}
                linkedinId={heads.linkedinUrl}
                InstaId={heads.instaUrl}
              />
            );
          }
          return null;
        })}
      </div>
      <Title color={"प्रचार"}/>
      <div className={styles.HeadSection}>
        {coordinatorsList.map((heads) => {
          if (heads.id >= 12 && heads.id <=16 ) {
            return (
              <HeadCard
                key={heads.id}
                img={heads.imgUrl}
                name={heads.name}
                domain={heads.domain}
                linkedinId={heads.linkedinUrl}
                InstaId={heads.instaUrl}
              />
            );
          }
          return null;
        })}
      </div>
      
      <Title color={"लेखन"}/>
      <div className={styles.HeadSection}>
        {coordinatorsList.map((heads) => {
          if (heads.id >= 8 && heads.id <= 10 ) {
            return (
              <HeadCard
                key={heads.id}
                img={heads.imgUrl}
                name={heads.name}
                domain={heads.domain}
                linkedinId={heads.linkedinUrl}
                InstaId={heads.instaUrl}
              />
            );
          }
          return null;
        })}
      </div>

      <Title color={"डिजाईन "}/>
      <div className={styles.HeadSection}>
        {coordinatorsList.map((heads) => {
          if (heads.id == 6 || heads.id == 17 ) {
            return (
              <HeadCard
                key={heads.id}
                img={heads.imgUrl}
                name={heads.name}
                domain={heads.domain}
                linkedinId={heads.linkedinUrl}
                InstaId={heads.instaUrl}
              />
            );
          }
          return null;
        })}
      </div>

      <Title color={"वेब टीम"}/>
      <div className={styles.HeadSection}>
        {coordinatorsList.map((heads) => {
          if (heads.id == 4 || heads.id == 11 ) {
            return (
              <HeadCard
                key={heads.id}
                img={heads.imgUrl}
                name={heads.name}
                domain={heads.domain}
                linkedinId={heads.linkedinUrl}
                InstaId={heads.instaUrl}
              />
            );
          }
          return null;
        })}
      </div>



      <Title color={"संयोजक"}  />
      <div>
       <Cores/>
      </div>
      {/* <div className={styles.CoreSection}>
        {coresList.map((heads) => {
          return (
            <div
              key={heads.id}
              className={styles.fn_cs_steps}
              data-cols={4}
              data-gap={60}
            >
              
             <div>
             
             <ul>
                <li>
                  <div className={styles.item}>
                    <div className={styles.item_in}>
                      <h3 className={styles.fn__gradient_title}>{heads.Name}</h3>
                      <p>{heads.Domain}</p>
                    </div>
                  </div>
                </li>
              </ul>
             </div>

            </div>
          );
        })}
      </div> */}


      <Title color={"सदस्य"} />
       <div >
      <Domain />
      </div>
    </div>
  );
};

export default Team;