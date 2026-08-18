import { useParams, Link } from "react-router-dom";
import { topics } from "../data/topics";
import { AiOutlineLink } from "react-icons/ai";

function TopicDetailsPage() {
  const { slug } = useParams();
  const topic = topics.find((topic) => topic.slug === slug);

  if (!topic) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-900 p-4">
        <div className="w-full max-w-md rounded-2xl border border-slate-700 bg-slate-800 p-6 text-center shadow-lg">
          <h1 className="text-xl font-bold text-slate-100">Topic Not Found</h1>
          <p className="mt-2 text-sm text-slate-400">
            The requested topic does not exist or the link is broken.
                </p>
                <div className="border rounded-md "><Link to="/topics">Back to topics</Link></div>
        </div>
      </main>
    );
  }

  return (
    <div className="flex min-h-screen items-start justify-center bg-slate-900 p-4 sm:p-6 lg:p-10">
      <article className="w-full max-w-2xl rounded-2xl border border-slate-700 bg-slate-800 p-6 shadow-lg sm:p-8 lg:p-10">
        <h1 className="text-2xl font-bold leading-tight text-slate-100 sm:text-3xl lg:text-4xl">
          {topic.title}
        </h1>

        <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base lg:text-lg">
          {topic.description}
        </p>

        <Link
          className="mt-4 sm:mt-6 inline-flex w-fit items-center rounded-md bg-yellow-400 px-4 py-2 text-lg font-semibold text-sky-900 transition hover:bg-yellow-300"
          to={`/quiz/${topic.id}`}
        >
          Start Quiz
        </Link>
        <div className="mt-6 flex flex-col gap-3 border-t border-slate-700 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-medium text-slate-200">
            Read official documentation:
          </p>

          <a
            href={topic.docsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open documentation for ${topic.title}`}
            className="inline-flex items-center gap-2 break-words rounded-lg bg-blue-800 px-4 py-2 text-sm font-medium text-blue-100 transition hover:bg-blue-700 hover:underline sm:text-base"
          >
            Open docs
            <AiOutlineLink className="h-4 w-4" />
          </a>
        </div>
      </article>
    </یهر>
  );
}

export default TopicDetailsPage;
