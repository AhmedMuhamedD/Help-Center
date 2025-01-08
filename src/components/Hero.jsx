import "../App.css";

function Hero() {
  return (
    <div className="bg-dark-subtle container-fluid ">
      <div className="py-5 d-flex flex-column justify-content-center align-items-center">
        <p className="mb-2" style={{ fontSize: "60px" }}>
          How can we help?
        </p>
        <input
          type="text"
          placeholder="Search..."
          className="form-control p-2"
          style={{ maxWidth: "500px", width: "100%" }}
        />
      </div>
    </div>
  );
}

export default Hero;
