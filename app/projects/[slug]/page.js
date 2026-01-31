import Image from 'next/image'
import Link from 'next/link'
import { getProjectBySlug, getAllSlugs } from '@/lib/projects'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { ArrowLeft, ExternalLink } from 'lucide-react'

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const project = getProjectBySlug(params.slug)
  if (!project) return { title: 'Project | Tobechukwu Ikenwe' }
  return {
    title: `${project.title} | Tobechukwu Ikenwe`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }) {
  const project = getProjectBySlug(params.slug)
  if (!project) {
    return (
      <>
        <Nav />
        <main className="min-h-screen pt-24 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-2xl font-bold text-surface-900 mb-4">Project not found</h1>
            <Link href="/personal" className="text-primary hover:underline">
              Back to projects
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const backHref = project.category === 'ml' ? '/ml' : '/personal'

  return (
    <>
      <Nav />
      <main className="min-h-screen pt-24 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 text-surface-700 hover:text-primary text-sm font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to projects
          </Link>
          <article className="rounded-2xl bg-white border border-primary/20 overflow-hidden shadow-sm">
            <div className="aspect-video relative bg-surface-700">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 672px"
                className="object-cover"
                priority
              />
            </div>
            <div className="p-8">
              <h1 className="text-3xl font-bold text-surface-900 mb-4">{project.title}</h1>
              <p className="text-surface-600 text-lg leading-relaxed mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.summary && project.summary.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-lg font-semibold text-surface-900 mb-3">What it does</h2>
                  <ul className="space-y-2 text-surface-600 leading-relaxed list-disc list-inside">
                    {project.summary.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-secondary hover:bg-secondary-light text-white font-medium transition-colors"
                >
                  View project code and details
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  )
}
