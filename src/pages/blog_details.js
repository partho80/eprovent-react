import React from 'react'
import Header from "../component/Header/header";
import Footer from "../component/Footer/footer";
import Blog_details_body from '../component/Blog/Blog_Details/blog_details_body';
import Blog_details_header from '../component/Blog/Blog_Details/blog_details_header';

import Pagination from "../component/Pagination/pagination";

function blog_details() {
  return (
    <div>
      <Header />
      <Blog_details_header />
      <Blog_details_body />

      <Pagination />
      <Footer />
    </div>
  )
}

export default blog_details