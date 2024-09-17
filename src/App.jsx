// import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { FaHome } from "react-icons/fa";
import "../src/component/Custom.scss"

function App() {
  return (
    <>
      <h1 className=" text-center p-5 mt-5 Small app">hello bootstrap</h1> {/* Bootstrap class usage */};

      <table className="table container-md body">
        <thead>
          <tr>
            <th className='text-center font-[50px] progress-bar' scope="col ">#</th>
            <th className="app" scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
      <div className="text-center container-md text-primary" >
        <button type="button" className="btn btn-primary text-center">Primary</button>
        <button type="button" className="btn btn-secondary text-center">Secondary</button>
        <button type="button" className="btn btn-success">Success</button>
        <button type="button" className="btn btn-danger">Danger</button>
        <button type="button" className="btn btn-warning">Warning</button>
        <button type="button" className="btn btn-info">Info</button>
        <button type="button" className="btn btn-light">Light</button>
        <button type="button" className="btn btn-dark">Dark</button>
      </div>

      <button type="button" className="btn btn-link">Link</button>


      <div className="card container-sm" >
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the  content.</p>
          <a href="#" className="card-link">Card link</a>
          <a href="#" className="card-link ">Another link</a>
        </div>
      </div>
      <FaHome className="add" /><FaHome className="text-primary" /><FaHome className="text-primary" />
    </>
  );
}

export default App;
