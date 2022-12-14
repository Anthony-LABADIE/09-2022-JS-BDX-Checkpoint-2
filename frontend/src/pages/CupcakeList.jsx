import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cupcake from "../components/Cupcake";

export default function CupcakeList() {
  const [cupcakelist, SetCupcakeList] = useState([]);
  const [accessorieslist, SetaccessoriesList] = useState([]);
  const [cupcakefiltre, SetCupcakeFiltre] = useState("");

  const handleChange = (event) => {
    SetCupcakeFiltre(event.target.value);
  };

  const getAllCupcake = () => {
    const url = "http://localhost:4000/cupcakes";
    axios.get(url).then((response) => SetCupcakeList(response.data));
  };
  const getAllAccessories = () => {
    const url = "http://localhost:4000/accessories";
    axios.get(url).then((response) => SetaccessoriesList(response.data));
  };
  useEffect(() => {
    getAllCupcake();
    getAllAccessories();
  }, []);

  // Step 3: get all accessories

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          Filter by{" "}
          <select id="cupcake-select" onChange={handleChange}>
            <option value="">---</option>
            {accessorieslist.map((el) => (
              <option key={el.id} value={el.id}>
                {el.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
        {cupcakelist
          .filter(
            (accessory) =>
              cupcakefiltre === "" || accessory.accessory_id === cupcakefiltre
          )
          .map((el) => (
            <Link to={`/CupcakeDetails/${el.id}`}>
              <li key={el.id} className="cupcake-item">
                <Cupcake cupcake={el} />
              </li>
            </Link>
          ))}
        {/* end of block */}
      </ul>
    </>
  );
}
