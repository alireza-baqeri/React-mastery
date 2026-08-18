import { topics } from "../../data/topics";
import TopicCard from "../components/topics/TopicCard";

function TopicsPage({ topics }) {
  return (
    <div>
      <h1>React Topics</h1>
      <p>Learn React concepts and test your knowledge.</p>
      {topics.length === 0 ? (
        topics.map((topic) => <TopicCard topic={topic} key={topic.id} />)
      ) : (
        <p>No topics available.</p>
      )}
    </div>
  );
}

export default TopicsPage;
