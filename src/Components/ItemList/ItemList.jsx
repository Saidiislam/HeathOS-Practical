import React from "react";
import {FaPen} from 'react-icons/fa'
import { Container, ContentBox, Warning } from "../";

const ItemList = ({title, children}) => {
  return (
    <Container>
      <ContentBox>
        <div
        //   className="max-w-xl mx-2.5 m-0 ma md:sm px-3"
          style={{ margin: `auto` }}
        >
          <div className="flex justify-between py-3 px-1.6 ">
            <h2>{title}</h2>
            <button className="p-3 text-lg">
              <FaPen />
            </button>
          </div>
          <div className="product-container">
            {children ? children : <Warning title={`products`}/>}
          </div>
        </div>
      </ContentBox>
    </Container>
  );
};

export default ItemList;
