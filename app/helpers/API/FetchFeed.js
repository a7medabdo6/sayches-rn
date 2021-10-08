import {
  PostSerializer,
  AuthorizationHeader,
  APIInstance,
} from "../../helpers/API/API";
import axios from "axios";

export const FetchFeed = async () => {
  const response = await axios.get(APIInstance, AuthorizationHeader);
  console.log(response.data, "response");
  return response.data;
  //setPostData();
};
