import axios from "axios";
import {useEffect} from "react";

const Job = () => {
  useEffect(() => {
    axios
      .get("https://onesix-api.vercel.app/api/v1/jobs/")
      .then((res) => console.log(res.data.results));
  }, []);
  return <div></div>;
};

export default Job;
