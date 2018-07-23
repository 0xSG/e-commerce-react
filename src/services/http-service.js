import "whatwg-fetch";

class HttpService {
  getProducts = () => {
    fetch("localhost:3007/getproducts")
      .then(products => {
        console.log(products.json());
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export default HttpService;
