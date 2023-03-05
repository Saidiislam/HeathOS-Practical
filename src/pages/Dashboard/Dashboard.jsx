import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import { 
    Container,
    ContentBox,
    DashboardHeader,
    Warning,
  } from "../../Components"
import Biscuits from '../../Components/Elements/Biscuits';
import Structure from '../../Components/Structure/Structure';
import { url } from '../../lib/apiConfig';

const Dashboard = () => {

  const dashQuery = useQuery(
    ["users"],
    () => fetch(`${url}users/records/xp2txew4id0aec7`)
    .then(res => res.json())
  )

  console.log(dashQuery.data);

  return (
    <section className=''>
      <Structure>
        <Container>
          <ContentBox>
            {
              dashQuery.isLoading ? <Warning /> :
              <div className='p-2 container sm'>
              <DashboardHeader name={dashQuery.data.name}/>
              <div className="flow-root ">
                <div className="grid gap-4 grid-cols-2 ">
                  <Biscuits title={`ORDERS`} count={dashQuery.data.order} />
                  <Biscuits title={`TOTAL SALES`} count={dashQuery.data.sale} />
                  <Biscuits title={`STORE VIEWS`} count={dashQuery.data.sview} />
                  <Biscuits title={`PRODUCT VIEWS`} count={dashQuery.data.pview} />
                </div>
              </div>
              </div>
            }
          </ContentBox>
        </Container>
      </Structure>
    </section>
  )
}

export default Dashboard