import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/HomePage";
import StartingPage from "../pages/StartingPage";
import AboutPage from "../pages/About";
import RecipesPage from "../pages/RecipesPage";
import SingleRecipePage from "../pages/SingleRecipePage";
import PageNotFound from "../pages/PageNotFound";

function AppRoutes(props) {
  return (
    <Routes>
      {/*Link to homepage as the default page: */}
      <Route index element={<Homepage {...props} />} />
      {/*Link additional pages: */}
      <Route path="/RecipesPage" element={<RecipesPage {...props} />} />
      <Route path="/StartingPage" element={<StartingPage {...props} />} />
      <Route path="/About" element={<AboutPage {...props} />} />
      <Route path="/recipe/:id" element={<SingleRecipePage {...props} />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AppRoutes;
