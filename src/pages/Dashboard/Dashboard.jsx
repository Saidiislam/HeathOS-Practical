import React, { useEffect, useState } from 'react'
import { 
    Container,
    ContentBox,
    DashboardHeader,
  } from "../../Components"
import { pb } from '../../lib/pocketbase';

const Dashboard = () => {


  return (
    <section className=''>
      <Container>
        <ContentBox>
            <DashboardHeader/>
        </ContentBox>
      </Container>
    </section>
  )
}

export default Dashboard