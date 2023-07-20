import { useState, useEffect } from "react"
import {auth, db} from "../FirebaseConfig";
const Home = () => {

  const [user, setUser] = useState(null);  
  
  useEffect(() => {
    setUser(auth.currentUser);
  }, []);

  console.log(user);

  return (
    <div className="container mx-auto mt-16">
        <p>{user && user.displayName}</p>
    </div>
  )
}

export default Home