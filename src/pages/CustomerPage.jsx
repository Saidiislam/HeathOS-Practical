import React from "react";
import { useQuery } from "react-query";
import { List, Warning } from "../Components";
import ItemList from "../Components/ItemList/ItemList";
import Structure from "../Components/Structure/Structure";
import { url } from "../lib/apiConfig";
import Avatar from "../assets/avatar.png";

const CustomerPage = () => {
  const customerQuery = useQuery(
    ["customers"],
    async () => await fetch(`${url}customers/records`).then((res) => res.json())
  );

  


  console.log(customerQuery.data);

  return (
    <Structure>
      <ItemList title={`My Customers`}>
        {customerQuery.isLoading ? (
          <Warning title={`Customers Being Fetched Using Tanstack Query 🤤`} />
        ) : (
          customerQuery.data.items.map((item) => {
            return (
              <List
                key={item.id}
                productImage={Avatar}
                name={item.name}
                items={item.orders}
              />
            );
          })
        )}
      </ItemList>
    </Structure>
  );
};

export default CustomerPage;
