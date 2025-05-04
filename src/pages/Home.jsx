// import { Link } from "react-router-dom";
import CardComponent from "../components/CardComponent";
import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import "../pagesCSS/Home.css";

const Home = () => {
  const [data, setData] = useState([]);

  const getAllMess = async () => {
    try {
      const response = await axios.get(
      "https://backend-mess-buddy.vercel.app/api/profile", 
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
        withCredentials: true, // Required for cookies/auth
      }
    ).then((result) => {
        console.log(result.data.data);
        setData(result.data.data);
    });
    } catch (error) {
      console.log(error.essage);
    }
  };

  useEffect(() => {
    getAllMess();
  }, []);
  return (
    <div className="mainComponent">
      {/* {data.map((mess,i)=>
        <>
          <p key={i}>{mess.title}</p>
        </>
      )} */}

      {data.map((mess, key) => (
        <CardComponent key={key} data={mess} />
      ))}
    </div>
  );
};

export default Home;
