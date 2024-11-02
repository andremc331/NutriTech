import { ErrorProps, ProfileProps } from "../types";
import { api } from "./api";

class Profile {
  async list(): Promise<ProfileProps[] | ErrorProps> {
    try {
      const { data } = await api.get("/profile");
      return data;
    } catch (error: any) {
      return error;
    }
  }

  async save(birth_date:string, weight:number|null, sex:string, height:number|null): Promise<ProfileProps | ErrorProps> {
    try {
      const { data } = await api.post("/profile", { birth_date, weight, sex, height });
      return data;
    } catch (error: any) {
      return error;
    }
  }

  async delete(): Promise<ProfileProps | ErrorProps> {
    try {
      const { data } = await api.delete("/profile");
      return data;
    } catch (error: any) {
      return error;
    }
  }

}

const profile = new Profile();
export default profile;
