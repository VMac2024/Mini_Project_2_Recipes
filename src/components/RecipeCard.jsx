import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useNavigate } from "react-router-dom";

// wraps the default MUI Card component to customise it with props
export default function RecipeCard({ recipe }) {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/recipe/${recipe.id}`, { state: { recipe } });
  };
  return (
    <>
      <Card sx={{ maxWidth: 345, minHeight: 345 }}>
        <CardActionArea>
          <CardMedia component="img" height="140" image={recipe.photoUrl} alt={recipe.title} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {recipe.title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={handleViewDetails}>
            See Recipe
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
// ++ Add support for a button text prop as well, test rendering it
