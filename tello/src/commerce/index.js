import Commerce from '@chec/commerce.js';

import axios from "axios";


export const api = axios.create({
  baseURL: "https://api.chec.io/v1/",
  headers: {
    "Content-Type": "application/json",
    "X-Authorization": "pk_5251279ae5759135e0fa1c78e0fccaf80e0da190c9a9c",
  },
});


export const commerce = new Commerce('pk_5251279ae5759135e0fa1c78e0fccaf80e0da190c9a9c');


    
    