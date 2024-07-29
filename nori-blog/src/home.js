import { useEffect, useState } from 'react';
import Bloglist from './bloglist';
import useFetch from './useFetch';

const Home = () => {
    const {data: blogs, isPending, Error} = useFetch('http://localhost:8000/blogs');
   


    return (
        <div className="home">
            {isPending && <div>Loading...</div>}
            {blogs && <Bloglist blogs={blogs} title="All Blogs!" />}
        </div>
    );
};

export default Home;
