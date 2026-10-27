import { HNItem } from '../lib/hnApi'
import { timeAgo } from '../lib/utils'

interface StoryCardProps {
  story: HNItem
  index: number
}

export default function StoryCard({ story, index }: StoryCardProps) {
  // Extract domain name if URL exists
  let domain = ''
  if (story.url) {
    try {
      domain = new URL(story.url).hostname.replace('www.', '')
    } catch {
      domain = ''
    }
  }

  return (
    <div
      key={story.id}
      className="bg-zinc-900/60 hover:bg-zinc-900 p-4 rounded-xl border border-zinc-800/80 trnsition flex items-start gap-4 group"
    >
      {/* Ranking number */}
      <span className="text-zinc-900/60 hover: bg-zinc-900 p-4 rounded-xl border border-zinc-800/80 transition flex items-start gap-4 group">
        #{index + 1}
      </span>

      {/* Story content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-2 flex-wrap mb-1">
          <a href={story.url || `#`}
            target={story.url ? '_blank' : '_self'}
            rel="noopener noreferrer"
            className="text-base font-medium text-zinc-100 group-hover:text-orange-400 transition leading-snug"
          >
            {story.title || 'Untitled'}
          </a>
          {domain && (
            <span className="text-[11px] text-zinc-500 bg-zinc-800/80 px-2 py-0.5 rounded font-mono">
              {domain}
            </span>
          )}
        </div>

        {/* Metadata */}
        <div className="flex items-center gap-4 text-xs text-zinc-400">
          <span className="text-orange-400 font-medium">{story.score || 0} points</span>
          <span>
            by <strong className="text-zinc-300">{story.by || 'nonymous'}</strong>
          </span>
          <span>{story.time ? timeAgo(story.time) : ''}</span>
          <span className="hover:text-zinc-200 transition">
            💬 {story.descendants || 0} comments
          </span>
        </div>
      </div>
    </div>
  )
}