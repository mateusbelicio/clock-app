import { useFetch } from '@/hooks/useFetch';
import { useEffect, useState } from 'react';

const QUOTE_API_URL = 'https://api.quotable.io/quotes/random';

const initialState = {
  text: '“The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.”',
  author: 'Adam Lovelace',
};

export function useQuote() {
  const [quote, setQuote] = useState(initialState);
  const { data, loading, error, update } = useFetch(QUOTE_API_URL);

  useEffect(() => {
    if (!data) return;

    setQuote({ text: data[0].content, author: data[0].author });
  }, [data]);

  return { quote, isLoading: loading, error, updateQuote: update };
}
