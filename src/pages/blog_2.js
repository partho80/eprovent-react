import React from "react";
import Header from "../component/Header/header";
import Footer from "../component/Footer/footer";
import Blog_header from "../component/Blog/Blog_1/blog_header";
import Pagination from "../component/Pagination/pagination";
import Blog_body_2 from "../component/Blog/Blog_2/blog_body_2";

function blog_2() {
    return (
        <div>
            <Header />
            <Blog_header />
            <Blog_body_2 />
            <Pagination />
            <Footer />
        </div>
    )
}

export default blog_2