import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";


// code thoda modify kiya hia appwrite k given code se
export class AuthService {
  client = new Client();
  account;

  constructor() { // jb object bnega constructor khud k khud call  ho jayega
    this.client   // client bnene k bad account bnega isliye new Account humne constructor k andr likha hai bhr nahi
      .setEndpoint(conf.appwriteUrl) // Your API Endpoint
      .setProject(conf.appwriteProjectId); // Your project ID

    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create( // hume await krna hai account creation ka 
        ID.unique(),  // yeh meethod unique id deta hai ID import krne k bad
        email,
        password,
        name
      );
      if (userAccount) {
        return this.login({ email, password }); // agr user ka account bn jata hai to sidha login krdo uska method
        // niche bna rakha hai
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser(){
    try{
        return await this.account.get();

    }catch(error){
      console.log("Appwrite serive :: getCurrentUser :: error", error);
    }

  }

  async getCurrentUserId(){
    try{
        const user = await this.account.get(); // Get the account details
        return user.$id; // Extract and return the userId ($id)
    } catch(error) {
        console.log("Appwrite service :: getCurrentUserId :: error", error);
        return null; // Return null if there's an error
    }
}

  async logout(){
    try{
        await this.account.deleteSessions()

    }catch(error){
      console.log("Appwrite serive :: logout :: error", error);
    }
  }
}

const authService = new AuthService(); // yeh object bna liya taki usse he sidha export krde aur . use kreke jo
// b method class k andr hum bnayege un sb ka access le payega

export default authService;
