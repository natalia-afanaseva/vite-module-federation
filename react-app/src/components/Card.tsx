import { useState } from "react";

interface Props {
  img: string;
  title: string;
  description: string;
}

const Card = ({ img, title, description }: Props) => {
  const [isSaved, setSaved] = useState(false);

  return (
    <div className="card">
      <img src={img} />
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={() => setSaved(!isSaved)}>
        {isSaved ? "Unsave" : "Save"}
      </button>
    </div>
  );
};

export default Card;
