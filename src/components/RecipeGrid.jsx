import Grid from "@mui/material/Grid2";
import RecipeCard from "./RecipeCard";
import { useData } from "../hooks/useData";
import { useEffect, useReducer } from "react";
//useReducer rather than useState for better handling with multiple filters, etc.

const itemsPerPage = 12;

//set initial state:
const initialState = {
  course: "all",
  cuisine: "all",
  currentPage: 1,
};

//function to manage changes in state.
function reducer(state, action) {
  switch (action.type) {
    case "set_course":
      return { ...state, course: action.payload, currentPage: 1 };
    case "set_cuisine":
      return { ...state, cuisine: action.payload, currentPage: 1 };
    //this code found online: Would be great to understand the better way to do this. Struggled to get the filters & pagination working together.
    case "next_page":
      return { ...state, currentPage: state.currentPage + 1 };
    case "prev_page":
      return { ...state, currentPage: state.currentPage - 1 };
    default:
      return state;
  }
}

// layout cards in a grid
export default function RecipeGrid() {
  const items = useData("https://api.sampleapis.com/recipes/recipes");

  const [state, dispatch] = useReducer(reducer, initialState);
  //set up filter states for course & cuisine filters & pagination (current page):
  const { course, cuisine, currentPage } = state;

  useEffect(() => {
    console.log("fetched items:", items);
  }, [items]);

  //set filter function:
  const filteredRecipes = items.filter(
    (item) => (cuisine === "all" || item.cuisine === cuisine) && (course === "all" || item.course === course)
  );

  //pagingation:
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredRecipes.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <div className="filterBox">
        <div className="Filter">
          <label>Filter by Cuisine Type:</label>
          <select id="filterCuisine" value={cuisine} onChange={(e) => dispatch({ type: "set_cuisine", payload: e.target.value })}>
            <option value="All">All</option>
            <option value="Asian">Asian</option>
            <option value="American">American</option>
            <option value="Italian">Italian</option>
            <option value="Mexican">Mexican</option>
          </select>
        </div>
        <div className="Filter">
          <label>Filter by Course:</label>
          <select id="filterCourse" value={course} onChange={(e) => dispatch({ type: "set_course", payload: e.target.value })}>
            <option value="All">All</option>
            <option value="Main Course">Mains</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Snacks and Sandwiches">Snacks</option>
            <option value="Desserts">Desserts</option>
            <option value="Lunch">Lunches</option>
            <option value="Side Dishes">Sides</option>
          </select>
        </div>
      </div>
      <div>
        <Grid container spacing={2} my={2} sx={{ marginTop: "80px" }}>
          {currentItems.length > 0 ? (
            currentItems.map((recipe) => (
              <Grid item key={recipe.id} size={{ xs: 12, sm: 6, md: 3 }}>
                {/* use 4/12 columns on xs screens up */}
                <RecipeCard recipe={recipe} />
              </Grid>
            ))
          ) : (
            <p>No recipes found matching your search.</p>
          )}
        </Grid>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "prev_page" })} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={() => dispatch({ type: "next_page" })} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </>
  );
}
