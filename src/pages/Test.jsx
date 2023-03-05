import React, { useEffect } from "react";
import { faker } from '@faker-js/faker';

const Test = () => {
  // generate 10 products with fake data
  const data =
    {
      title: "Handmade Steel Car",
      desc: "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
      price: "448.00"
    }
  useEffect(() => {
    

    fetch(
      `https://sharp-napkin.pockethost.io/api/collections/products/records`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((response) => {
        if (response.ok) {
          console.log("Data posted successfully!");
        } else {
          console.error("Error posting data:", response.statusText);
        }
      })
      .catch((error) => {
        console.error("Error posting data:", error);
      });
  }, []);

  return <div>test</div>;
};

export default Test;
