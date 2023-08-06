import React from "react";
import { useEffect, useState } from "react";
import { MENU_URL } from "./Data";

const useReasturantsmenu = (resId) => {
  const [Resinfo, setResinfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch( MENU_URL + resId);
    const json = await data.json();
    
    setResinfo(json.data);
  };

  return Resinfo;
};

export default useReasturantsmenu;
