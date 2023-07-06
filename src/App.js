import * as UserCard from './Component/UserCard';
import * as RepoCard from './Component/RepoCard';

function App() {
  return (
    <>
      <UserCard.UserCard
        user={{
          name: "ZMK firmware",
          twitter: "@johndoe",
          avatar: "https://marmelab.com/posters/avatar-46.jpeg?size=32x32"
        }}
      />

      <RepoCard.RepoCard
        user={{
          name: "ZMK firmware",
          twitter: "@johndoe",
          avatar: "https://marmelab.com/posters/avatar-46.jpeg?size=32x32"
        }}
      />
    </>

  )
}

export default App;
