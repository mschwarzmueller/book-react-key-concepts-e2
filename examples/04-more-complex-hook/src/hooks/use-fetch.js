import { useCallback, useEffect, useReducer } from 'react';

const initialHttpState = {
  data: null,
  isLoading: false,
  error: null,
};

function httpReducer(state, action) {
  if (action.type === 'FETCH_START') {
    return {
      ...state,
      isLoading: state.data ? false : true,
      error: null,
    };
  }

  if (action.type === 'FETCH_ERROR') {
    return {
      data: null,
      isLoading: false,
      error: action.payload,
    };
  }

  if (action.type === 'FETCH_SUCCESS') {
    return {
      data: action.payload,
      isLoading: false,
      error: null,
    };
  }

  return initialHttpState;
}

function useFetch(url) {
  const [httpState, dispatch] = useReducer(httpReducer, initialHttpState);

  const fetchPosts = useCallback(async function fetchPosts() {
    dispatch({ type: 'FETCH_START' });

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Failed to fetch posts.');
      }

      const posts = await response.json();

      dispatch({ type: 'FETCH_SUCCESS', payload: posts });
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR', payload: error.message });
    }
  }, [url]);

  useEffect(
    function () {
      fetchPosts();
    },
    [fetchPosts]
  );

  return [httpState, fetchPosts];
}

export default useFetch;
