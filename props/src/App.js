import "./App.css";
import Profile from "./profile/Profile";
import profileImg from "./profile/profileImg.jpg";

function App() {
  //Instead of passing each prop individually, I passed them inside user object
  let user = {
    bio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    fullName: "Ezzeddine Jlassi",
    profession: "Fullstack Developer",
    img: profileImg,
    articles: 49,
    followers: 768,
    rating: 8.4,
  };

  //Inline Styling Object
  let styleObject = {
    minHeight: "100vh",
    display: "grid",
    placeItems: "center",
    backgroundColor: "#f7f7f7",
  };

  return (
    <div className="App" style={styleObject}>
      <Profile user={user}>{user.img}</Profile>
    </div>
  );
}

export default App;
