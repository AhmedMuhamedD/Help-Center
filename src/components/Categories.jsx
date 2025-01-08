import Card from "./Card";
const items = [
  {
    image: "/assets/images/account.png",
    title: "Item 1",
    content: "This is the content for item 1.",
  },
  {
    image: "/assets/images/account.png",
    title: "Item 2",
    content: "This is the contesnt for item 2.",
  },
  {
    image: "/assets/images/account.png",
    title: "Item 3",
    content: "This is the content for item 3.",
  },
  {
    image: "/assets/images/account.png",
    title: "Item 4",
    content: "This is the content for item 4.",
  },
  {
    image: "/assets/images/account.png",
    title: "Item 5",
    content: "This is the content for item 5.",
  },
  {
    image: "/assets/images/account.png",
    title: "Item 6",
    content: "This is the content for item 6.",
  },
];

function Categories() {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          {items.map((item, index) => (
            <Card
              key={index}
              image={item.image}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
