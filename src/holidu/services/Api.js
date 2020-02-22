const endpoint = "https://api.holidu.com/rest/v6/search/offers";

async function getCall(params) {
  try {
    let url = new URL(endpoint);
    if (params) url.search = new URLSearchParams({ ...params });

    const result = await fetch(url, {
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => response.json());

    if (typeof result === "object" && result.offers) return result;

    return false;
  } catch (e) {
    console.log(e);
  }
}

class Api {
  static getApartments(params) {
    return getCall(params);
  }
}

export default Api;
