import { User } from "@/src/models/types/User";

export class UserService {
  public static fetchUsers = async (): Promise<User[]> => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    return await data.json();
  };
}
