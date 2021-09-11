const apiKey = "f0d84955";

export const Omdb = {
  async searchTerm(term, page) {
    const newPage = page * 2 -1;
    const response1 = await fetch(
      `https://cors-anywhere.herokuapp.com/http://www.omdbapi.com/?s=${term}&apikey=${apiKey}&page=${newPage}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    const response2 = await fetch(
      `https://cors-anywhere.herokuapp.com/http://www.omdbapi.com/?s=${term}&apikey=${apiKey}&page=${
        newPage + 1
      }`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    const jsonResponse1 = await response1.json();
    const jsonResponse2 = await response2.json();
    const newArray = jsonResponse1.Search?.concat(jsonResponse2.Search);
    if (newArray) {
      const result = newArray
        .map((item) => {
          return {
            title: item.Title,
            year: item.Year,
            poster: item.Poster,
            imdbID: item.imdbID,
          };
        })
        .filter(
          (item, index) =>
            newArray.findIndex((fItem) => fItem.imdbID === item.imdbID) ===
            index
        );

      return {
        result: result,
        totalResults: jsonResponse1.totalResults,
      };
    }
  },
};
