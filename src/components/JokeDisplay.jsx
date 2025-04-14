const JokeDisplay = ({ joke, loading }) => {
  return (
    <div className="joke-container">
      {loading ? (
        <p>Loading...</p> // Display loading message
      ) : (
        <p>{joke}</p> // Display the joke
      )}
    </div>
  );
};

export default JokeDisplay;