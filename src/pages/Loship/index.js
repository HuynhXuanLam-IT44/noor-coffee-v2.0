import React, { useEffect } from "react";
import { InfoMaps, Section } from "../../components";
import { online } from "../../data";
const Loship = () => {
  useEffect(() => {
    document.title = "Our stores - Noor - Coffee & Tea";
    window.location = "https://loship.vn/nocaphe";
  }, []);
  return (
    <>
      <InfoMaps />
      {online.map((store, index) => (
        <Section
          subHeader={store.subHeader}
          header={store.header}
          description={store.description}
          linkBtn={store.linkBtn}
          img={store.img}
          key={index}
        />
      ))}
    </>
  );
};

export default Loship;
