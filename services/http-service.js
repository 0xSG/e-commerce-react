import "whatwg-fetch";

class HttpService {
  getProducts = () => {
    var promise = new Promise((resolve, reject) => {
      fetch("http://localhost:3007/getproducts")
        .then(data => {
          resolve(data.json());
        })
        .catch(error => {
          reject(error);
        });
    });

    return promise;
  };
}

export default HttpService;
