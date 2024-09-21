// import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import "../src/component/Custom.scss"
import "../src/component/new.scss"

function App() {

  // eslint-disable-next-line no-unused-vars
  // const Navbar = <>
  //   <Link>Home</Link>
  //   <Link>Join us </Link>
  //   <Link>About</Link>
  //   <Link>My list</Link>
  // </>



  return (
    <>
      <div className="d-flex justify-between container-md m-10">
        <div>name</div>
        <div>
          <ul className="d-flex">
            <li><a href="#">home</a></li>
            <li><a href="#">home</a></li>
            <li><a href="#">home</a></li>
            <li><a href="#">home</a></li>
            <li><a href="#">home</a></li>
          </ul>
        </div>
        <div>name</div>
      </div>
    </>
  );
}

export default App;
