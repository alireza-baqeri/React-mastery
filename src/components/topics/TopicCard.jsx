import { Link } from "react-router-dom";

function TopicCard({ topic }) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-slate-700 bg-slate-800 p-5 shadow-md shadow-indigo-500/20 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/40">
      <h3 className="mb-4 rounded-lg bg-amber-400 px-3 py-2 text-center text-base font-bold text-blue-900 sm:text-lg">
        {topic.title}
      </h3>

      <p className="mb-5 flex-1 text-sm leading-relaxed text-slate-300 sm:text-base">
        {topic.description}
      </p>

      <Link
        to={`/topics/${topic.slug}`}
        className="mt-auto inline-block rounded-lg bg-blue-500 px-5 py-2.5 text-center text-sm font-semibold text-white shadow-md shadow-emerald-500/20 transition hover:bg-blue-600 hover:shadow-lg hover:shadow-emerald-500/40 sm:text-base"
      >
        View Topic
      </Link>
    </article>
  );
}

export default TopicCard;
