export default function TagList({ tags }: { tags: string[] }) {
  return (
    <div className="mt-8">
      <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-200">
        Tags
      </h4>
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((t) => (
          <a
            key={t}
            href={`/tags/${encodeURIComponent(t)}`}
            className="rounded-full bg-sky-50 px-3 py-1 text-sm text-sky-700 hover:bg-sky-100"
          >
            {t}
          </a>
        ))}
      </div>
    </div>
  );
}
