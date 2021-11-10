import axios from "axios";

const apiGreetings = () => async () => {
    axios.get(url).then((response) => {
      const { data } = response;
      const greeting = data.message;
       return greeting
    });
  };

  export default apiGreetings;