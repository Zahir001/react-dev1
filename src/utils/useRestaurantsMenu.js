import { useEffect, useState } from "react";
import { RESINFO_URL } from "./constants";

const useRestaurantsMenu = (resId) => {
  const [resInfo, setResInfo] = useState([]);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(`${RESINFO_URL}${resId}`);
    const json = await data.json();
    setResInfo(json);
  }
  return resInfo;
}

export default useRestaurantsMenu;