import axios from "axios";
import { baseUrl, apiKey } from "../common/baseUrl";

export const getPopulerMovie = async () =>
  await axios.get(
    `${baseUrl}movie/popular?api_key=${apiKey}&language=tr-TR&page=1`
  );

export const getMovies = async (type = "top_rated") =>
  await axios.get(
    `${baseUrl}movie/${type}?api_key=${apiKey}&language=tr-TR&page=1`
  );

export const searchMovies = async (page) =>
  await axios.get(
    `${baseUrl}movie/popular?api_key=${apiKey}&language=tr-TR&page=${page}`
  );
export const getTvPopulerMovie = async () =>
  await axios.get(
    `${baseUrl}tv/popular?api_key=${apiKey}&language=tr-TR&page=1`
  );

export const getMovieById = async (id) =>
  await axios.get(
    `${baseUrl}movie/${id}?api_key=${apiKey}&language=tr-TR&page=1`
  );

export const getVideoMovie = async (id) =>
  await axios.get(
    `${baseUrl}movie/${id}/videos?api_key=${apiKey}&language=tr-TR`
  );

export const getMovieImages = async (id) =>
  await axios.get(
    `${baseUrl}/movie/${id}/images?api_key=${apiKey}&language=tr-TR`
  );
export const getMovieCredits = async (id) =>
  await axios.get(
    `${baseUrl}/movie/${id}/credits?api_key=${apiKey}&language=tr-TR`
  );

export const getMovieGenres = async () =>
  await axios.get(
    `${baseUrl}genre/movie/list?api_key=${apiKey}&language=tr-TR`
  );
export const getMovieGenreById = async (id, page) =>
  await axios.get(
    `${baseUrl}discover/movie?with_genres=${id}&api_key=${apiKey}&language=tr-TR&page=${page}`
  );

export const getMovieSearch = async (page, searchValue) => {
  const uri = searchValue ? "search/movie" : "movie/popular";
  return await axios.get(
    `${baseUrl}${uri}?api_key=${apiKey}&query=${searchValue}&language=tr-TR&page=${page}`
  );
};
