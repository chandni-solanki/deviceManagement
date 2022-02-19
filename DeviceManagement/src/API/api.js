import genericFetch from "../common/Redux-Utils/genericFetch";


export function getTodaysQuote() {
    let options = {};
    options.method = "GET";
    let url = `https://zenquotes.io/api/today`;
    // if (config.MOCK_API) {
    //   options.method = "GET";
    //   url = `${config.MOCK_API_BASE_URL}fullStatement.json`;
    //   options.body = null;
    // }
    return genericFetch({ url, options });
  }