// SearchBar.tsx
import { useState, useEffect } from 'react';
import { useNavigate, useSearch } from '@tanstack/react-router';
import { useDebounce } from '@/hooks/useDebounce';
import Search from '@/components/svg/Search';
import { useSearchStore } from '@/stores/useSearchStore';

export default function SearchBar() {
  const navigate = useNavigate();
  const searchParams = useSearch({ from: '/_authenticated/main' });
  const { setSearchQuery } = useSearchStore();
  const [inputValue, setInputValue] = useState<string>('');
  const debouncedValue = useDebounce<string>(inputValue, 500);

  useEffect(() => {
    if (debouncedValue !== searchParams.search) {
      setSearchQuery(debouncedValue);
      navigate({
        search: (prev) => ({ ...prev, search: debouncedValue }),
        replace: true,
      });
    }
  }, [debouncedValue, setSearchQuery, navigate, searchParams.search]);

  return (
    <div className="relative w-full">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="찾으시는 단골 가게가 있나요?"
        className="w-full px-5 py-3 pr-12 bg-gray-30 border-none rounded-[12px] text-body2 placeholder:text-gray-200 focus:outline-none"
      />
      <div className="absolute right-5 top-1/2 transform -translate-y-1/2">
        <Search className="size-[25px] text-gray-500" />
      </div>
    </div>
  );
}
