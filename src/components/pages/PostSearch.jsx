import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function PostSearch(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
 

  const urlParams = new URLSearchParams(location.search);
  const [UrlQ, setUrlQ] = useState(urlParams.get('q'));

  useEffect(() => {

    const URL = 'https://www.googleapis.com/books/v1/volumes?maxResults=10&orderBy=relevance&q=deneme';
    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        setData(json.items);
        console.log(json.items);
      });
}, []);

  function formHandler(event) {
    event.preventDefault();
    setUrlQ(event.target.q.value);
    navigate(`/arama?q=${event.target.q.value}`);
  }

  const results = <h1>Search Results : {UrlQ} </h1>;
  return (
    <>
      <form onSubmit={formHandler}>
        <div className="mb-3">
          <label htmlFor="search" className="form-label">
            
          </label>
          <input
            name="q"
            type="text"
            className="form-control"
            id="search"
            defaultValue={UrlQ}
          />
        </div>
        <button type="reset" className="btn btn-danger">
          Reset
        </button>
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>

      {location.pathname === '/arama' && results}
      <table className="table table-hover">

           { location.search !== '' &&
        <thead className='bg-success'>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Authors</th>
        </tr>
        </thead> 
             }
            
           {data
        .filter((item, index) => item.volumeInfo.title.includes(UrlQ))
        .map((item, index) => (
          
          <tbody className='table'>
          <tr>
            <th scope="row">{index + 1}</th> 
            <th>
            <Link className="text-dark" to={`${item.id}`}>
              {item.volumeInfo.title}
            </Link>
            </th>
            <td>{item.volumeInfo.authors}</td>
          </tr>
          </tbody> 
        ))}
        </table>
     
      </>
  )}

export default PostSearch;