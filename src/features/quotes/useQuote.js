import { useFetch } from '@/hooks/useFetch';
import { useEffect, useState } from 'react';

const QUOTE_API_URL = 'https://api.quotable.io/quotes/random';

const initialState = {
  text: '',
  author: '',
};

export function useQuote() {
  const [quote, setQuote] = useState(initialState);
  const { data, loading, error, update } = useFetch(QUOTE_API_URL);

  useEffect(() => {
    if (!data || loading) return;

    setQuote({ text: data[0].content, author: data[0].author });
  }, [data, loading]);

  return { quote, isLoading: loading, error, updateQuote: update };
}
