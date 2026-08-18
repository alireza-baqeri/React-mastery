import { Link } from "react-router-dom";
import { topics } from "../../data/topics";

function TopicCard() {
  const topicFirst = topics[0];
  return (
    <div>
      <h3>{topicFirst.title}</h3>
      <p>{topicFirst.description}</p>
      <Link to={`topics/${topicFirst.slug}`}>View Topic</Link>
    </div>
  );
}

export default TopicCard;
