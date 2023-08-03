import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [ingredientInput, setIngredientInput] = useState("");
  const [effortLevel, setEffortLevel] = useState(1); 
  const [result, setResult] = useState();
  const [recipes, setRecipes] = useState({});
  const [dietaryRequirements, setDietaryRequirements] = useState("");
  // New state variable for tracking loading state
  const [isLoading, setIsLoading] = useState(false); // <-- New line

  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true); // Start loading
    try {
      const ingredientArray = [ingredientInput.trim()];

      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          ingredients: ingredientArray, 
          effortLevel: effortLevel, 
          dietaryRequirements: dietaryRequirements 
        })
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result);
      setIngredientInput("");
    } catch(error) {
      console.error(error);
      alert(error.message);
    } finally {
      setIsLoading(false); // End loading
    }
  }

  async function fetchRecipe(mealTitle) {
    setIsLoading(true); // Start loading
    try {
      const response = await fetch("/api/recipe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mealTitle }),
      });
 
      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setRecipes((prevRecipes) => ({
        ...prevRecipes,
        [mealTitle]: data.result,
      }));
    } catch(error) {
      console.error(error);
      alert(error.message);
    } finally {
      setIsLoading(false); // End loading
    }
  }
   
  return (
    <div>
      <Head>
        <title>Meal Ideas Engine</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
  
      <main className={styles.main}>
        <h3>Meal Ideas Engine</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="ingredients"
            placeholder="Some ingredients you have..."
            value={ingredientInput}
            onChange={(e) => setIngredientInput(e.target.value)}
          />

          <label style={{ marginTop: '20px' }}>
            <input 
              type="text" 
              value={dietaryRequirements} 
              placeholder="paleo, thai, dessert, soup, spicy, etc."
              onChange={(event) => setDietaryRequirements(event.target.value)} 
              style={{ width: '90%' }}
            />
          </label>
          {/* Disabled submit button while loading */}
          <input type="submit" value="Generate Ideas" style={{ marginTop: '20px' }} disabled={isLoading} />
        </form>
      
        {/* Loading message */}
        {isLoading && <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Generating ideas...</p>} {/* <-- New line */}
        
        <div style={{ marginTop: '40px', display: 'flex', alignItems: 'center' }}>
          <span style={{ marginRight: '10px' }}>Quick and easy</span>
          <input
            type="range"
            min="1"
            max="5"
            name="effortLevel"
            value={effortLevel}
            onChange={(e) => setEffortLevel(e.target.value)}
          />
          <span style={{ marginLeft: '10px' }}>More time and effort</span>
        </div>
        <div className={styles.result}>
          {
            result && result.split('\n').map((rec, index) => rec && (
              <div key={index}>
                <div className={styles.titleContainer}>
                  <p>{rec}</p>
                  {/* Disabled Get Recipe button while loading */}
                  <button onClick={() => fetchRecipe(rec)} disabled={isLoading}>Get Recipe</button>
                </div>
                {recipes[rec] && recipes[rec].split('\n').map((line, lineIndex) => <p className={styles.smallText} key={lineIndex}>{line}</p>)}
              </div>
            ))
          }
        </div>
      </main>
    </div>
  );
}
