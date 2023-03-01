import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Table from "./components/Table";
import "./App.css";

import { getUsers } from "./api";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getUsers()
      .then((res) => {
        const payload = [];
        res.data.forEach(item => {
          const {id, name, username, email, address: {street, suite, city, zipcode}, phone, website, company: {name : company}} = item;
          payload.push({ id, name, username, email, street, suite, city, zipcode, phone, website, company })
        });
        dispatch({ type: "SAVE_USER_DATA", payload });
      })
      .catch(err => console.log(err));
  }, []);
  return <div className="App"><Table /></div>;
}

export default App;
