interface Props {
    result: any;
  }
  
  export default function ResultCard({ result }: Props) {
    if (!result) return null;
  
    return (
      <div className="mt-12 rounded-3xl bg-zinc-900 border border-zinc-800 p-8">
  
        <h2 className="text-3xl font-bold text-green-400">
          ✅ Document Generated
        </h2>
  
        <p className="mt-4 text-zinc-300">
          {result.message}
        </p>
  
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-white">
            {result.plan.document_type}
          </h3>
  
          <p className="text-zinc-400 mt-2">
            {result.plan.tasks.length} Tasks Executed
          </p>
        </div>
  
        <a
          href={`http://127.0.0.1:8000${result.download_url}`}
          target="_blank"
          className="inline-block mt-8 rounded-xl bg-green-600 hover:bg-green-500 transition px-8 py-4 font-semibold"
        >
          ⬇ Download DOCX
        </a>
  
      </div>
    );
  }