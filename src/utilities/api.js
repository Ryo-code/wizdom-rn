const api = {
  getFactFromAPI(){
    const url = "https://wizdom-app.herokuapp.com";
    return fetch(url + "/fact").then((res) => res.json()); //omit ".json"?
  }
  
  // getQuoteFromAPI(){
  //   const url = "https://wizdom-app.herokuapp.com";
  //   return fetch(url + "/quotation").then((res) => res.json()).catch(() => {
  //     console.log("Errorrrrr!")
  //   });
  // }
};

module.exports = api;