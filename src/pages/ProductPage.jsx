import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Container, ContentBox, List } from "../Components";
import ItemList from "../Components/ItemList/ItemList";
import { getX, url } from "../lib/axiosConfig";
import { pb } from "../lib/pocketbase";

const ProductPage = () => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   pb.collection("products")
  //     .getFullList()
  //     .then((res) => setProducts(res));
  // }, [products]);

  const productQuery = useQuery(
    ["product"],
    async () => await fetch(`${url}products/records`).then((res) => res.json())
  );

  console.log(productQuery.data);

  return (
    <ItemList title={`My Products`}>
      {
        productQuery.isFetching && productQuery.isLoading
        ? null
        : productQuery.isLoading 
        ? (
          <p>Loading...</p>
        ) : (
          productQuery.data.items.map((item) => {
            return (
              <List
                key={item.key}
                name={item.title}
                description={item.desc}
                price={item.price}
              />
            );
          })
      )}
    </ItemList>
  );
};

export default ProductPage;
