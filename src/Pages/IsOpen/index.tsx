import { useEffect, useState } from "react";
import { instance } from "../../Services/api";
import { ContainerDashboard } from "./style";
import { useNavigate } from "react-router-dom";

export interface iContextContactDashboard {
  setModalRegister: React.Dispatch<React.SetStateAction<boolean>>;
  modalRegister: boolean;
}
interface ITypeRestaurant {
  id: string;
  name: string;
}

interface IRestaurant {
  id: string;
  name: string;
  email: string;
  phone: string;
  document: string;
  description: string;
  profileImage: string;
  createdAt: string;
  updatedAt: string;
  typeRestaurant: ITypeRestaurant;
}

export const IsOpen = () => {
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const listRestaurants = () => {
      instance
        .get(`/restaurants`)
        .then((response) => {
          setRestaurants(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    listRestaurants();
  }, []);

  return (
    <>
      <ContainerDashboard>
        <main>
          <header>
            <button className="btnProfileEdit">
              <img
                className="logoIcon"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQydF5sraW83_BCDo11oNYwFKk5ZV_KMw8UmOzRyGluRA&s"
                alt=""
              />
              Editar
            </button>

            <button onClick={() => navigate("/login")}>Logar</button>
          </header>
          <ul className="restaurant-list">
            {restaurants.map((restaurant) => (
              <li key={restaurant.id} className="restaurant-item">
                <img src={restaurant.profileImage} alt="Profile" />
                <h2>{restaurant.name}</h2>
                <p>Phone: {restaurant.phone}</p>{" "}
                <p>Description: {restaurant.description}</p>
                <p>Type: {restaurant.typeRestaurant.name}</p>
              </li>
            ))}
          </ul>
        </main>
      </ContainerDashboard>
    </>
  );
};
