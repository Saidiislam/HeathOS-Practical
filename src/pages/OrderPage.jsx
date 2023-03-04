import React from "react";
import { useQuery } from "react-query";
import { List, Warning } from "../Components";
import ItemList from "../Components/ItemList/ItemList";
import Structure from "../Components/Structure/Structure";
import { url } from "../lib/apiConfig";
import Avatar from "../assets/avatar.png";

const OrderPage = () => {
  const orderQuery = useQuery(["orders"], async () => {
    return await fetch(`${url}orders/records`).then((res) => res.json());
  });

  console.log(orderQuery.data);

  return (
    <Structure>
      <ItemList title={`My Orders`}>
        {orderQuery.isLoading ? (
          <Warning title={`Orders Being Fetched Using Tanstack Query 🤤`} />
        ) : (
          orderQuery.data.items.map((item) => {
            return (
              <List
                key={item.id}
                productImage={Avatar}
                name={item.usersID}
                description={item.timestamp}
                price={item.price}
                items={item.items}
              />
            );
          })
        )}
      </ItemList>
    </Structure>
  );
};

export default OrderPage;
