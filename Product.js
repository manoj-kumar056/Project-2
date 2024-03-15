import React from 'react';
import { Link,Outlet } from 'react-router-dom';
const Product = () => {
  return (
    <div>
      Product Page
      <nav>
      <Link to={"mostview"}>MostViewed</Link>
      <Link to={"new"}>New</Link>
      </nav>
      <Outlet/>
    </div>
  )
}

export default Product
