import React from "react";

import Header from "../component/Header/header";
import Footer from "../component/Footer/footer";
import Blog_header from "../component/Blog/Blog_1/blog_header";
import Pagination from "../component/Pagination/pagination";
import Blog_body from "../component/Blog/Blog_1/blog_body";

function blog() {
    return (
        <div>
            <Header />
            <Blog_header />
            <Blog_body />
            <Pagination />
            <Footer />
        </div>
    )
}

export default blog