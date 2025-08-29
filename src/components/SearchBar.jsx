'use client';
import { LayoutGrid, List, MoreHorizontal, Search } from 'lucide-react';


export default function SearchBar({ query, setQuery, view, setView }) {
return (
<div className="flex items-center justify-between gap-2">
<div className="flex-1 flex items-center gap-2 border border-slate-300 rounded-lg bg-white/70 px-3">
<Search className="w-4 h-4 text-slate-500" />
<input
className="flex-1 h-10 outline-none bg-transparent"
placeholder="Search Products"
value={query}
onChange={(e) => setQuery(e.target.value)}
/>
</div>
<div className="flex items-center gap-1">
<button
className={`icon-btn ${view === 'grid' ? 'bg-slate-200' : ''}`}
onClick={() => setView('grid')}
aria-label="Grid view"
>
<LayoutGrid className="w-5 h-5" />
</button>
<button
className={`icon-btn ${view === 'list' ? 'bg-slate-200' : ''}`}
onClick={() => setView('list')}
aria-label="List view"
>
<List className="w-5 h-5" />
</button>
<button className="icon-btn" aria-label="More">
<MoreHorizontal className="w-5 h-5" />
</button>
</div>
</div>
);
}