import Navbar from './Component/Navbar/Navbar';
import Banner from './Component/Banner/Banner';
import Information from './Component/Information/Information';
import Tools from './Component/Tools/Tools';
import Steps from './Component/Steps/Steps';
import Pricing from './Component/Pricing/Pricing';
import './App.css'
import { Suspense } from 'react';
import Workflow from './Component/Workflow/Workflow';
import Footer from './Component/Footer/Footer';
import { ToastContainer } from 'react-toastify';

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
      <Pricing></Pricing>
      <Workflow></Workflow>
      <Footer></Footer>
<ToastContainer />
    </>
  )
}

export default App
