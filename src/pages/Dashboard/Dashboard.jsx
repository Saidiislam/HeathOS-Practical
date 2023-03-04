import React, { useEffect, useState } from 'react'
import { 
    Container,
    ContentBox,
    DashboardHeader,
    DataCard
  } from "../../Components"
import { pb } from '../../lib/pocketbase';

const Dashboard = () => {

  const [user, setUser] = useState([]);

  useEffect(() => {
    pb.collection("users")
      .getFullList()
      .then((res) => setUser(res))
      .then(console.log)
  }, [user])

  return (
    <section className=''>
      <Container>
        <ContentBox>
            <DashboardHeader name={user.username} />
            <DataCard price={user.pview}/>
            <DataCard />
            <DataCard />
            <DataCard />
        </ContentBox>
      </Container>
    </section>
  )
}

export default Dashboard