import { Link } from "react-router-dom";

function TopicCard({topic}) {
 
  return (
    <div>
      <h3>{topic.title}</h3>
      <p>Topic Description: {topic.description}</p>
      <Link to={`topics/${topic.slug}`}>View Topic</Link>
    </div>
  );
}

export default TopicCard;
