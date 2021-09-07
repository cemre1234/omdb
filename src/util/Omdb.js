const apiKey = "f0d84955";

export const Omdb = {
  async searchTerm(term, page) {
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/http://www.omdbapi.com/?s=${term}&apikey=${apiKey}&page=${page}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    const jsonResponse = await response.json();
    if (jsonResponse.Search) {
      const result1 = jsonResponse.Search.map((item) => {
        return {
          title: item.Title,
          year: item.Year,
          poster: item.Poster,
        };
      });
      result1["totalResults"] = jsonResponse.totalResults;
      return result1;
    }
  },
};
