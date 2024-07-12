import { newObj } from "./ui.js";

class Details {
  constructor() {}
  async takeId(id) {
    const options = {
      method: "GET",
      headers: {
        'x-rapidapi-key': 'dbdecf1827mshf07f4b0b0cfd0a3p1de839jsn768a57549e35',
		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
      },
    };

    try {
      const response = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
        options
      );
      const result = await response.json();

      newObj.renderDetail(result);
    } catch (error) {
      console.error(error);
    }
  }
}

export const detailPage = new Details();