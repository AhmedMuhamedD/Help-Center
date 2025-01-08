// import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

function Navbars() {
  return (
    <div className="bg-dark text-white  ">
      <div className="d-flex justify-content-between container align-items-center ">
        <span className="fs-3">Help Center</span>
        <span className="my-3">
          <Button type="submit" className="bg-dark border-white">
            Categories
          </Button>
          <Button className="mx-4">Sign in</Button>
        </span>
      </div>
    </div>
  );
}

export default Navbars;
