import { Link } from "react-router-dom";

const projectData = [
  {
    title: "Speech to text Recognition",
    path: "/speech-to-text",
    description: "Audio transcription pipeline using OpenAI Whisper.",
    tags: ["Python", "ML", "Vite"]
  },
  {
    title: "Climate Monitor",
    path: "/climate-monitor",
    description: "Bare metal sensor programming with Arduino.",
    tags: ["C++", "IoT", "Hardware"]
  }
];

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto p-10">
      <h2 className="text-3xl font-bold mb-8">My Work</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projectData.map((project, i) => (
          <Link to={project.path} key={i} className="group p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all">
            <h3 className="text-xl font-bold group-hover:text-blue-600">{project.title}</h3>
            <p className="text-gray-600 my-2">{project.description}</p>
            <div className="flex gap-2">
              {project.tags.map(tag => <span key={tag} className="text-xs bg-blue-100 px-2 py-1 rounded">{tag}</span>)}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}