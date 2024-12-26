import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import Spinner from '../components/Spinner';

const Home = () => {
  const url = 'https://fakestoreapi.com/products';
  const[loading , setLoading]=useState(false);
  const[posts,setPosts]=useState([]);
  async function fetchProductData() {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.log(error);
      setPosts([]);
    }
    setLoading(false);
  }

  
  useEffect(()=>{
     fetchProductData();
  },[]);

  return (
    <div className='mt-10 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-4 gap-y-10'>
      {
        loading?(
          <Spinner/>
        ):(
          posts.length>0?(posts.map((product)=>(
            <Card key={product.id} product={product} />
          ))):(<p>No Data Found!</p>)
        )
      }
    </div>
  )
}

export default Home