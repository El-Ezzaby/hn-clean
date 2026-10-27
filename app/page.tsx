'use client'

import StoryCard from './components/StoryCard'
import { useState, useEffect } from 'react'
import { getTopStories, HNItem } from './lib/hnApi'

export default function HackerNewsRedesign() {
  const [stories, setStories] = useState<HNItem[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('top')

  // Fetch stories whenever the active category tab changes
  useEffect(() => {
    async function loadStories() {
      setLoading(true)

      // Map tabs to HN API category names
      const category = activeTab === 'jobs' ? 'job' : activeTab
      const data = await getTopStories(category, 15)
      setStories(data)
      setLoading(false)
    }

    loadStories()
  }, [activeTab])

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 p-6 max-2-4xl mx-auto">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-zinc-800 pb-4 mb-6 gap-4">
        <div className="flex-items-center gap-3">
          <div className="bg-orange-600 text-white font-bold px-3 py-1.5 rounded-lg text-lg tracking-wider">
            HN
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight">
              Hacker News{' '}
              <span className="text-orange-500 text-xs uppercase bg-orange-950/60 px-2 py-0.5 rounded border border-orange-800 ml-2">
                Modern
              </span>
            </h1>
            <p className="text-xs text-zinc-400">Clean, distraction free live tech discussions.</p>
          </div>
        </div>

        {/* FIlter navigation tabs */}
        <div className="flex bg-zinc-900 p-1 rounded-lg border border-zinc-800 text-xs overflow-x-auto">
          {['top', 'new', 'ask', 'show', 'jobs'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 rounded-md capitalize transition whitespace-nowrap ${activeTab === tab ? 'bg-orange-600 text-white font-medium' : 'text-zinc-400 hover:text-zinc-200'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </header>

      {/* Loading state */}
      {loading ? (
        <div className="flex justify-center items-center py-20 text-zinc-400">
          <div className="animate-pulse flex space-x-2 items-center">
            <div className="h-3 w-3 bg-orange-500 rounded-full"></div>
            <span>Fetching live stories from Hacker News...</span>
          </div>
        </div>
      ) : (
        // Feed list
        <div className="space-y-3">
          {stories.map((story, index) => (
            <StoryCard key={story.id} story={story} index={index} />
          ))}
        </div>
      )}
    </main>
  )

}