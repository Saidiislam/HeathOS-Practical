import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Container, ContentBox, List } from "../Components";
import ItemList from "../Components/ItemList/ItemList";
import { pb } from "../lib/pocketbase";

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    pb.collection("products")
      .getFullList()
      .then((res) => setProducts(res));
  }, [products]);

  return (
    <ItemList title={`My Products`}>
      {
        products.map(item => {
          return <List key={item.key} name={item.title} description={item.desc} price={item.price}/>
        })
      }
    </ItemList>
  );
};

export default ProductPage;
