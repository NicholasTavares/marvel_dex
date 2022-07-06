import axios from 'axios';
import md5 from "md5";

const publicKey = "3ce21735f07dcd61bfee2a0241651923";
const privateKey = "bbdf3be4217ee0758cb02cb0b11b14a927f67c4c";
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