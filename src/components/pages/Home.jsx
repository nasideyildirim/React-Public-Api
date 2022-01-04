import React, {useEffect} from 'react';
import PostSearch from './PostSearch';
import Faker from 'faker/locale/tr'; //rastgele bilgiler için kullanılabilir


function Home(props) {

  function runApi() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const products = [...Array(0)].map((item,index) => {
      const products = {title: Faker.name.findName(), 
        author: Faker.name.firstName()}
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(products),
        redirect: "follow"
      };
      
      fetch("https://www.googleapis.com/books/v1/volumes?maxResults=10&orderBy=relevance&q=deneme", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.error("error", error));

        return products
    })
  }

  return (
    <>
      <h3 className="text-success">Search for a book : </h3>
      <hr/>
      
      
      <img src="//cdn.kitapsec.com//temalar/KitapSec2017/img/logo.jpg" alt="" className='w-50' />
      
      
      <PostSearch />
    </>
  );
}

export default Home;