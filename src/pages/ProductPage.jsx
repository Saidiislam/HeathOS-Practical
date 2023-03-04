import React from "react";
import { useQuery } from "react-query";
import { List, Warning } from "../Components";
import ItemList from "../Components/ItemList/ItemList";
import Structure from "../Components/Structure/Structure";
import { url } from "../lib/apiConfig";
import Image from "../assets/shoe.png";

const ProductPage = () => {
  const productQuery = useQuery(
    ["product"],
    async () => await fetch(`${url}products/records`).then((res) => res.json())
  );

  console.log(productQuery.data);

  return (
    <Structure>
      <ItemList title={`My Products`}>
        {productQuery.isLoading ? (
          <Warning title={`Products Being Fetched Using Tanstack Query 🤤`} />
        ) : (
          productQuery.data.items.map((item) => {
            return (
              <List
                key={item.id}
                productImage={Image}
                name={item.title}
                description={item.desc}
                price={item.price}
              />
            );
          })
        )}
      </ItemList>
    </Structure>
  );
};

export default ProductPage;
