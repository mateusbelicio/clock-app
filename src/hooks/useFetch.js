import { useEffect, useReducer, useRef } from 'react';

const initialState = {
  error: undefined,
  data: undefined,
  loading: false,
  isToUpdate: false,
};

// REDUCER FUNCTION
function fetchReducer(state, action) {
  switch (action.type) {
    case 'fetch/loading':
      return { ...initialState, loading: true };
    case 'fetch/fetched':
      return { ...initialState, data: action.payload };
    case 'fetch/error':
      return { ...initialState, error: action.payload };
    case 'fetch/finished':
      return { ...state, loading: false, isToUpdate: false };
    case 'fetch/update':
      return { ...state, isToUpdate: true };
    default:
      return state;
  }
}

/**
 * Custom hook to retrieve data from an API using the native Fetch API.
 * Returns the current fetching status: `loading`, `error` or the
 * fetched `data`, if successfully received
 *
 * @param {String} url - URL to fetch the data
 * @param {Object} options - request options
 * @returns
 */
export function useFetch(url) {
  // STATES
  const [{ data, loading, error, isToUpdate }, dispatch] = useReducer(
    fetchReducer,
    initialState,
  );

  // Used to prevent state update if the component is unmounted
  const cancelRequest = useRef(false);

  // HANDLE EFFECTS
  useEffect(() => {
    if (!url && !isToUpdate) return;
    cancelRequest.current = false;

    const fetchData = async () => {
      dispatch({ type: 'fetch/loading' });

      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(response.statusText);

        const data = await response.json();
        if (cancelRequest.current) return;

        dispatch({ type: 'fetch/fetched', payload: data });
      } catch (error) {
        if (cancelRequest.current) return;

        const errorMessage = 'Something went wrong. Please try again later.';
        dispatch({ type: 'fetch/error', payload: errorMessage });

        console.error(errorMessage, error);
      } finally {
        dispatch({ type: 'fetch/finished' });
      }
    };

    fetchData();

    return () => {
      cancelRequest.current = true;
    };
  }, [url, isToUpdate]);

  // UPDATE FUNCTION -> used to force the data to be fetched again
  const update = () => dispatch({ type: 'fetch/update' });

  return { data, loading, error, update };
}
