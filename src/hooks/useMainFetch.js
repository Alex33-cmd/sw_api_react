import { useState, useEffect } from "react";

// API fetch config
import config from "../config";

const initialState = {
  name: "",
};

export const useMainFetch = () => {
  const [state, setState] = useState(initialState);
  //   const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchPlanets = async (id = "") => {
    try {
      setError(false);

      const planets = await config.fetchPlanet(id);
      setState(planets);
    } catch (error) {
      setError(true);
    }
    // setLoading(false);
  };

  // Initial render and search
  useEffect(() => {
    setState(initialState);
    fetchPlanets("1");
  }, []);

  return { state, error };
};
