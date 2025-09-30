import { useLocation, useNavigate } from "react-router-dom";
import { Typography, Button } from "@mui/material";

function SingleRecipePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const recipe = location.state?.recipe;
  console.log(recipe);
  console.log("recipe objecct: ", recipe);
  if (!recipe) return <Typography>Recipe not found</Typography>;

  return (
    <>
      <div>
        <Button variant="contained" color="secondary" onClick={() => navigate(-1)}>
          Go Back
        </Button>
      </div>
      <div>
        <Typography variant="h3">{recipe.title || "No title available"}</Typography>
        <Typography variant="body1">Course:{recipe.course || "No course available"}</Typography>
        <Typography variant="body1">Cuisine:{recipe.cuisine || "No cuisine type available"}</Typography>
        <Typography variant="body1">Total Time to prep and cook:{recipe.totalTime || "Cooking time estimate not available"}</Typography>
        {recipe.photoUrl && <img src={recipe.photoUrl} alt={recipe.title} style={{ width: 300 }}></img>}
        <Typography variant="h6">Ingredients:</Typography>{" "}
        <ul>
          {recipe.ingredients?.split("\n")?.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <Typography variant="body1">Directions:{recipe.directions}</Typography>
      </div>
    </>
  );
}

export default SingleRecipePage;
