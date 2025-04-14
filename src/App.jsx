import React, { useState, useEffect } from "react";
import JokeDisplay from "./components/JokeDisplay";

const App = () => {
  const [joke, setJoke] = useState(""); // State for the joke
  const [loading, setLoading] = useState(true); // State for loading

  // Function to fetch a joke from the API
  const fetchJoke = async () => {
    setLoading(true); // Set loading to true before fetching
    try {
      const response = await fetch(
        "https://v2.jokeapi.dev/joke/Programming?type=single"
      );
      const data = await response.json();
      setJoke(data.joke); // Update the joke state
    } catch (error) {
      setJoke("Failed to fetch a joke. Please try again."); // Handle errors
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  // Fetch a joke when the component first renders
  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="app">
      <h1>Programming Jokes</h1>
      <JokeDisplay joke={joke} loading={loading} />
      <button onClick={fetchJoke} disabled={loading}>
        {loading ? "Fetching..." : "Get Another Joke"}
      </button>
    </div>
  );
};

export default App;