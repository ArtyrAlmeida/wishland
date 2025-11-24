import { Route, Routes } from "react-router";
import { LoginPage } from "./pages/LoginPage";
import { WishlistPage } from "./pages/WishlistPage";
import { CreateWishlist } from "./pages/CreateWishlist";
import { EditWishlist } from "./pages/EditWishlist";
import { UserPage } from "./pages/UserPage";

function App() {

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/wishlist/:id" element={<WishlistPage />} />
      <Route path="/wishlist/new" element={<CreateWishlist />} />
      <Route path="/wishlist/edit/:id" element={<EditWishlist />} />
      <Route path="/user/:id" element={<UserPage />} />
    </Routes>
  )
}

export default App
