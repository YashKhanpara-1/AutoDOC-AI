export default function Navbar() {
    return (
      <nav className="w-full border-b border-zinc-800 bg-zinc-950/70 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">
              🤖 AutoDoc AI
            </h1>
            <p className="text-zinc-400 text-sm">
              Autonomous Document Generator
            </p>
          </div>
  
          <div className="text-blue-400 font-medium">
            Python • FastAPI • Groq AI
          </div>
        </div>
      </nav>
    );
  }