import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  // Changed state variable from animalInput to movieInput
  const [ingredientInput, setIngredientInput] = useState("");
  const [effortLevel, setEffortLevel] = useState(1); 
  const [result, setResult] = useState();
  const [recipes, setRecipes] = useState({});
  const [dietaryRequirements, setDietaryRequirements] = useState("");

 
  async function onSubmit(event) {
    event.preventDefault();
    try {
      // Added this line to convert the movie input string to an array. The trim() method removes any whitespace before or after each movie title.
      const ingredientArray = [ingredientInput.trim()];

      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ingredients: ingredientArray, effortLevel: effortLevel }),
        //
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
      // Cleared the movie input field after submitting
      setIngredientInput("");
    } catch(error) {
      console.error(error);
      alert(error.message);
    }
  }

  async function fetchRecipe(mealTitle) {
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

      // Add the new recipe to the recipes state variable
      setRecipes((prevRecipes) => ({
        ...prevRecipes,
        [mealTitle]: data.result,
      }));
    } catch(error) {
      console.error(error);
      alert(error.message);
    }
  }

  console.log(result); 
   
   
  return (
    <div>
      <Head>
        <title>Recipe Ideas Engine</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
  
      <main className={styles.main}>
        <h3>Recipe Ideas</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="ingredients"
            placeholder="Some ingredients you want to use"
            value={ingredientInput}
            onChange={(e) => setIngredientInput(e.target.value)}
          />

      
  
          <label style={{ marginTop: '30px' }}>
        
            <input 
              type="text" 
              value={dietaryRequirements} 
              placeholder="Dietary requirements"
              onChange={(event) => setDietaryRequirements(event.target.value)} 
            />
          </label>
          <input type="submit" value="Generate Meal Ideas" style={{ marginTop: '20px' }} />
        </form>
      
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
                <button onClick={() => fetchRecipe(rec)}>Get Recipe</button>
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
