import { useState, useEffect } from "react";

// API fetch config
import config from "../config";

const initialState = {
  results: [],
};

export const useMainFetch = () => {
  const [state, setState] = useState(initialState);
  //   const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchPlanets = async (page = 1) => {
    try {
      setError(false);

      const planets = await config.fetchPlanetPages(page);
      setState(planets);
    } catch (error) {
      setError(true);
    }
    // setLoading(false);
  };

  // Initial render and search
  useEffect(() => {
    setState(initialState);
    fetchPlanets();
  }, []);

  return { state, error };
};
