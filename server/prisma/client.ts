import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma";
import { getRuntimeDatabaseUrl } from "./dbUrl";

const adapter = new PrismaPg({ connectionString: getRuntimeDatabaseUrl() });
const prisma = new PrismaClient({ adapter });

export default prisma;
