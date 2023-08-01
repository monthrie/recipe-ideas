import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  // Changed state variable from animalInput to movieInput
  const [movieInput, setMovieInput] = useState("");
  const [uniqueness, setUniqueness] = useState(1); 
  const [result, setResult] = useState();
 
  async function onSubmit(event) {
    event.preventDefault();
    try {
      // Added this line to convert the movie input string to an array. The trim() method removes any whitespace before or after each movie title.
      const movieArray = [movieInput.trim()];

      // Changed 'animal' to 'movies' in the request body
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ movies: movieArray, uniqueness: uniqueness }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result);
      // Cleared the movie input field after submitting
      setMovieInput("");
    } catch(error) {
      console.error(error);
      alert(error.message);
    }
  }

  console.log(result); // Add this line
   
   
  return (
    <div>
      <Head>
        <title>OpenAI Quickstart</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
  
      <main className={styles.main}>
        <h3>Recipe Ideas</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="movies"
            placeholder="Enter a list of movies"
            value={movieInput}
            onChange={(e) => setMovieInput(e.target.value)}
          />
          <input type="submit" value="Generate Recommendations" />
        </form>
        <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center' }}>
        <span style={{ marginRight: '10px' }}>More famous</span>
        <input
          type="range"
          min="1"
          max="5"
          name="uniqueness"
          value={uniqueness}
          onChange={(e) => setUniqueness(e.target.value)}
        />
        <span style={{ marginLeft: '10px' }}>Lesser known</span>
        </div>
        <div className={styles.result}>
        {result && result.split('\n').map((rec, index) => rec && <p key={index}>{rec}</p>)}
         </div>
      </main>
    </div>
  );
  
}
