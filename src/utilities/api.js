const api = {
  getDefinitionFromDB(){
    const url = "https://wizdom-app.herokuapp.com";
    return fetch(url + "/definition").then((res) => res.json());
  },
  getFactFromDB(){
    const url = "https://wizdom-app.herokuapp.com";
    return fetch(url + "/fact").then((res) => res.json());
  },
  getNewsFromDB(){
    const url = "https://wizdom-app.herokuapp.com";
    return fetch(url + "/news").then((res) => res.json());
  },
  getQuotationFromDB(){
    const url = "https://wizdom-app.herokuapp.com";
    return fetch(url + "/quotation").then((res) => res.json());
  }
};

module.exports = api;