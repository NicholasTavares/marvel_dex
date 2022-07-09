import axios from 'axios';
import md5 from "md5";

const publicKey = "74ccde4d6e0be7994619ba239782ce6b";
const privateKey = "eb8d6f582b242840fc0fa24ca9f19340457589c6";
const time = Number(new Date());
const hash = md5(time + privateKey + publicKey);

export const api = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public',
  params: {
    ts: time,
    apikey: publicKey,
    hash,
  },
});