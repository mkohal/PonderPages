import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";
import authService from "./auth";

export class Service {
  client = new Client();
  databases;
  bucket; // yeh variables k andr actual account tb banna chahiye jb constructor call ho

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl) // Your API Endpoint
      .setProject(conf.appwriteProjectId); // Your project ID

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({title, slug, content, featuredImage, status, userId}){
    try{
        return await this.databases.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,// slug ki jga aap ID.unique() se b document ki id le sakte hai pr humne yha slug liya hai
            {   // object k andr aur b jo futher infomation apko backend mai store krna hai aap isme dal sakte ho
                title,
                content,
                featuredImage,
                status,
                userId,
            }
        )

    }catch(error){
      console.log("Appwrite serive :: createPost :: error", error);

    }
  }

  async updatePost(slug, {title,content, featuredImage, status}){
    try{
        return await this.databases.updateDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
            {
                title,    
                content,
                featuredImage,
                status,

            }
        )
    }catch(error){
      console.log("Appwrite serive :: updatePost :: error", error);
    }

  }
   
  // isme to sirf slug se he pta lg jayega konsi post delete krni hai
  // hum is saare process mai slug ko he as a document id refer kr rhe hai
  async deletePost(slug){
    try{
        await this.databases.deleteDocument( // return krne ki jarurat nahi hai yha kyuki hume kuch chahiye he nahi sidha usse delete krdo bs
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug

        )

        return true // true return krege jo batayega ki delete ho gya hai 

    }catch(error){
      console.log("Appwrite serive :: deletePost :: error", error);
      return false
    }


  }

  async getPost(slug){
    try{
      return await this.databases.getDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug

      )

    }catch(error){
      console.log("Appwrite serive :: getPost :: error", error);
      return false
    }
  }

  async getCurrentUserPosts(){
    try {
      const userId = await authService.getCurrentUserId(); // Get the current logged-in user's ID
      if (!userId) {
        console.log("User not logged in");
        return false; // Return false if no user is logged in
      }
  
      const queries = [
        Query.equal("status", "active"), // Only active posts
        Query.equal("userId", userId) // Filter by the logged-in user's ID
      ];
  
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch(error) {
      console.log("Appwrite service :: getPosts :: error", error);
      return false;
    }
  }




  async getPosts(queries = [Query.equal("status", "active")]){
    try{
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries,
      )

    }catch(error){
      console.log("Appwrite serive :: getPosts :: error", error);
      return false; // kya pta ek b value na mili ho
    }
  }

  // file upload services
  async uploadFile(file){
    try{
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      )

    }catch(error){
      console.log("Appwrite serive :: uploadFile :: error", error);
      return false
    }
  }

  async deleteFile(fileId){
    try{
      return await this.bucket.deleteFile(
        conf.appwriteBucketId,
        fileId
      )
      return true

    }catch(error){
      console.log("Appwrite serive :: deleteFile :: error", error);
      return false

    }
  }

  getFilePreview(fileId){ // yeh method ka response fast hota hai isliye chahe async na use kre
    return this.bucket.getFilePreview(
      conf.appwriteBucketId,
      fileId
    )
  }

  
}

const service = new Service(); // yeh object bna liya taki usse he sidha export krde
export default service;
