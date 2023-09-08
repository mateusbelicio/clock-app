import { useEffect, useState } from 'react';

const QUOTE_API_URL = 'https://api.quotable.io';

const initialState = {
  text: '“The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.”',
  author: 'Adam Lovelace',
};

export function useQuote() {
  const [quote, setQuote] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  async function getQuote() {
    try {
      setIsLoading(true);
      setError('');

      const res = await fetch(`${QUOTE_API_URL}/quotes/random`);
      if (!res.ok)
        throw new Error('Something went wrong. Please try again later.');

      const [data] = await res.json();
      setQuote({ text: data.content, author: data.author });
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  const updateQuote = () => getQuote();

  useEffect(() => {
    // getQuote();
  }, []);

  return { quote, isLoading, error, updateQuote };
}
