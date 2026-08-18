import { topics } from "../data/topics";
import TopicCard from "../components/topics/TopicCard";

function TopicsPage() {
  return (
    <div className=" bg-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <header className="pt-7 text-center">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            React Topics
          </h1>
          <p className="mt-2 text-lg font-light italic text-lime-300/80 sm:text-xl">
            Learn React concepts and test your knowledge.
          </p>
        </header>

        {topics.length === 0 ? (
          <p className="mt-10 text-center text-lg text-slate-400">
            No topics are available yet.
          </p>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic) => (
              <TopicCard key={topic.id} topic={topic} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default TopicsPage;
