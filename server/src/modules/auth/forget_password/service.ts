import * as repository from "./repository";
import crypto from "crypto";

function generateToken(size : number = 16) : string {
  return crypto.randomBytes(size).toString('hex');;
}