import { Db, MongoClient } from "mongodb";
import Logger from "./loggerService.ts";

class DBService {
  private client: MongoClient | undefined = undefined;
  private db: Db | undefined = undefined;

  constructor() {}

  async connect(url: string, dbName: string): Promise<void> {
    try {
      this.client = await MongoClient.connect(url);
      this.db = this.client.db(dbName);
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      throw error;
    }
  }

  getDB(): Db {
    if (!this.db) {
      throw new Error("MongoDB is not connected");
    }
    return this.db;
  }

  async disconnect(): Promise<void> {
    try {
      await this.client!.close();
      Logger.success("Disconnected from MongoDB");
    } catch (error) {
      Logger.error(`Error disconnecting from MongoDB: ${error}`);
      throw error;
    }
  }
}

export default new DBService();
