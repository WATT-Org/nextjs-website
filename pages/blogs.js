import React, { useEffect, useState } from "react";
import Head from "next/head";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("/api/getAllBlogs")
      .then((a) => {
        return a.json();
      })
      .then((parsed) => {
        console.log(parsed);
        setBlogs(parsed);
      });
  }, []);

  return (
    <div className="px-4 py-6">
        <Head>
        <title>WATT Intelligence</title>
        <meta
          name="description"
          content="Welcome to WATT Intelligence - where innovation meets results. Our team of experts provides cutting-edge technology solutions and exceptional customer service to help your business succeed. Explore our site to learn more about our services and how we can help you achieve your goals."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-center text-white my-8 text-3xl font-bold underline underline-offset-4 p">Welcome to the Blogs</h1>
      <div className="grid grid-cols-3 gap-x-4 items-center">
        {blogs.map((blog)=>(
        

          <div key={blog.slug} className="11/12 px-6 py-4 rounded-md bg-gray-700 border border-white">
            <h2 className="text-2xl font-medium ">{blog.title}</h2>
            <div>
            </div>
            <p>{blog.content}</p>
            <div className="">By {blog.author}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
