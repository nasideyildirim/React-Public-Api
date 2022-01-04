import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
  return <>
    <footer className="pt-4 my-md-5 pt-md-5 border-top ">
        <div className="row">
          <div className="col-12 col-md">
          <div className="text-center p-3" >
  © 2022 Copyright {' '}
  <Link className="text-dark" to="#">Naşide Yıldırım</Link>
</div>
</div>
          
        </div>
      </footer>
  </>
}
export default Footer;