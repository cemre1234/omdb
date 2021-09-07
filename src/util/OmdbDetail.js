const apiKey = "f0d84955";

export const OmdbDetail = {
  async searchTerm(term, page) {
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/http://www.omdbapi.com/?t=${term}&apikey=${apiKey}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    const jsonResponse = await response.json();
    if (jsonResponse) {
        return {
          title: jsonResponse.Title,
          year: jsonResponse.Year,
          poster: jsonResponse.Poster,
          runtime: jsonResponse.Runtime,
          director: jsonResponse.Director,
          actors: jsonResponse.Actors,
        };
    }
  },
};