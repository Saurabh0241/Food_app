import React from "react";
import { useEffect, useState } from "react";
import "./About.css";

function About() {
  const [userinfo, setuserinfo] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://api.github.com/users/Saurabh0241");
    const json = await data.json();

    setuserinfo(json);
  };
  const { name, bio, avatar_url, location, blog } = userinfo;
  return (
    <div className="text-center flex  justify-center">
      <div className="border-2 border-black h-[80vh]">
        <img
          className="rounded-lg w-[300px] h-[250px] m-3"
          src={avatar_url}
          alt=""
        />
        <h1 className="font-bold text-lg">Name:-{name}</h1>
        <h1>{bio}</h1>
        <h1>{location}</h1>
        <a href={blog}> Personal_Website </a>
      </div>
    </div>
  );
}

export default About;
