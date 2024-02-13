import axios from './Axios'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";





export async function featuredBusiness() {
    try {
      const response = await axios.get(`/businesses/getAllBusinesses`);
      return response.data;
    } catch (error) {
      throw new Error("Error fetching Business");
    }
  }