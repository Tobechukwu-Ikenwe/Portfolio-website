import { Link } from "react-router-dom";

export default function SpeechToText() {
  return (
    <div className="max-w-4xl mx-auto py-20 px-6">
      <Link to="/" className="text-blue-500 mb-8 block">← Back to Portfolio</Link>
      <h1 className="text-5xl font-extrabold mb-6">Speech to Text Recognition</h1>
      <div className="prose lg:prose-xl">
        <p>This project uses OpenAI Whisper to transcribe real-time audio...</p>
        {/* Add your project images or technical details here */}
      </div>
    </div>
  );
}