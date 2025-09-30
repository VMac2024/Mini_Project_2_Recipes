export default function StartingPage() {
  return (
    <>
      <div className="StartingPage">
        <h1>Starting out</h1>
        <h2>Cooking 101: The Basics</h2>
        <p>
          For those of you who have never so much as picked up a knife before, cooking might seem overwhelming at first, but it's all about
          mastering a few simple skills and having the right tools on hand. Start with easy recipes, learn how to chop safely, and get
          comfortable with heat control. Taste as you go, and don’t be afraid to experiment—cooking is as much about creativity as it is
          about following instructions.
        </p>
        <p>
          Here, we set out some basics every kitchen should have. This is not an exhaustive list, nor is it fixed. The idea of this list is
          to give you a start from which you can design and build your own staples and your own cooking style.{" "}
        </p>
        <h2>Essential Kitchen Tools</h2> <img src="./src/assets/images/Cookware.jpg" className="StartImage" />
        <ul>
          {" "}
          <li>
            <strong>Chef's Knife:</strong> A good, sharp knife makes chopping easier and safer.
          </li>
          <li>
            <strong>Cutting Board:</strong> Protects your counters and keeps things clean.{" "}
          </li>{" "}
          <li>
            <strong>Non-Stick Frying Pan:</strong> Great for eggs, pancakes, and quick sautés.
          </li>
          <li>
            <strong>Saucepan:</strong> For boiling, steaming, and making sauces.
          </li>{" "}
          <li>
            <strong>Large Pot:</strong> Needed for soups, stews, pasta, and boiling vegetables.
          </li>{" "}
          <li>
            <strong>Baking Sheet:</strong> For roasting vegetables, baking cookies, and more.
          </li>
          <li>
            <strong>Wooden Spoon & Spatula:</strong> Versatile tools for stirring and flipping.
          </li>
          <li>
            <strong>Measuring Cups & Spoons:</strong> Essential for following recipes accurately.
          </li>
        </ul>
        <h2> Pantry Staples</h2>
        <img src="./src/assets/images/PantryStaples.jpg" className="StartImage" />
        <ul>
          <li>
            <strong>Oils:</strong> Olive oil for cooking, vegetable oil for high heat.
          </li>
          <li>
            <strong>Salt & Pepper:</strong> Basics for seasoning any dish.
          </li>
          <li>
            <strong>Flour & Sugar:</strong> For baking and thickening sauces.
          </li>
          <li>
            <strong>Rice & Pasta:</strong> Easy, filling bases for meals.
          </li>
          <li>
            <strong>Canned Tomatoes:</strong> Great for sauces, soups, and stews.
          </li>
          <li>
            <strong>Dried or Canned Beans:</strong> Protein-packed and versatile.
          </li>
          <li>
            <strong>Garlic & Onions:</strong> The foundation of many savory dishes.
          </li>
          <li>
            <strong>Spices:</strong> Start with basics like cumin, paprika, and chili flakes.
          </li>
          <li>
            <strong>Soy Sauce or Vinegar:</strong> Adds depth and balance to flavors.
          </li>
        </ul>
        <p> With these essentials, you'll have everything you need to start cooking simple, delicious meals!</p>
      </div>
    </>
  );
}
