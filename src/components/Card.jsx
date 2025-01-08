/* eslint-disable react/prop-types */
const Card = ({ image, title, content }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={image} className="card-img-top" alt="Item" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{content}</p>
          <button className="btn btn-primary">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
