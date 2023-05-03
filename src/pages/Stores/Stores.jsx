import React, { useEffect, useState } from "react";
import { InfoMaps, SpinnerBook, Section } from "../../components";

import { online } from "../../data";
const Stores = () => {
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    document.title = "Cửa hàng - NOOR - Coffee & Tea - Coworking Cafe";
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setSpinner(false);
    }, 200);
  }, []);

  return (
    <>
      {spinner ? (
        <SpinnerBook />
      ) : (
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
              dark={index === "1" ? true : false}
            />
          ))}
        </>
      )}
    </>
  );
};

export default Stores;
