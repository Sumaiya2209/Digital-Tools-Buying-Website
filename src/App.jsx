import Navbar from './Component/Navbar/Navbar';
import Banner from './Component/Banner/Banner';
import Information from './Component/Information/Information';
import Tools from './Component/Tools/Tools';
import Steps from './Component/Steps/Steps';
import './App.css'
import { Suspense } from 'react';

const fetchCartData = async () => {
  const res = await fetch("/data.json");
  return res.json();
}

function App() {
  const cartData = fetchCartData();

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Information></Information>
      <Suspense fallback={
        <div className="flex justify-center items-center min-h-screen">
          <span className="loading loading-spinner text-primary"></span>
        </div>
      }>
        <Tools cartData={cartData}></Tools>
      </Suspense>

      <Steps></Steps>

    </>
  )
}

export default App
