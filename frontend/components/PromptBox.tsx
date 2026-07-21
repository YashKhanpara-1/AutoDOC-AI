"use client";

interface Props {
  request: string;
  setRequest: (value: string) => void;
  loading: boolean;
  onGenerate: () => void;
}

export default function PromptBox({
  request,
  setRequest,
  loading,
  onGenerate,
}: Props) {
  return (
    <div className="mt-16 rounded-3xl bg-zinc-900 border border-zinc-800 p-8">

      <textarea
        rows={7}
        value={request}
        onChange={(e) => setRequest(e.target.value)}
        placeholder="Example: Create a business proposal for implementing AI in customer support."
        className="w-full rounded-xl bg-zinc-950 p-5 text-white outline-none border border-zinc-800"
      />

      <button
        onClick={onGenerate}
        disabled={loading}
        className="mt-6 w-full rounded-xl bg-blue-600 hover:bg-blue-500 transition py-4 text-lg font-semibold"
      >
        {loading ? "🧠 Agent Working..." : "🚀 Generate Document"}
      </button>

    </div>
  );
}