import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://44.202.83.200',
});

export const detaultApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2'
})

