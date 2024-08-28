/* import { useFetchData } from "./hooks/useFetchData.js";

const App = () => {
  const { data, error, loading } = useFetchData("https://dummyjson.com/products");

  console.log(data);
  console.log(error);
  console.log(loading);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!data || !data.products) {
    return <p>No data available</p>;
  }

  return (
    <div>
      <h1>Products Table</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Brand</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {data.products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>${product.price}</td>
              <td>{product.category}</td>
              <td>{product.brand}</td>
              <td>{product.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
 */


/* 
-----------------------------------------------------------------------------

import { useFetchData } from "./hooks/useFetchData.js";

const App = () => {
  const { data, error, loading } = useFetchData("https://dummyjson.com/products");

  console.log(data);
  console.log(error);
  console.log(loading);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!data || !data.products) {
    return <p>No data available</p>;
  }

  const headers = Object.keys(data.products[0]);

  return (
    <div>
      <h1>Products Table</h1>
      <table border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.products.map((product) => (
            <tr key={product.id}>
              {Object.values(product).map((value, index) => (
                <td key={index}>{Array.isArray(value) ? value.join(", ") : value.toString()}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App; */



import { useFetchData } from "./hooks/useFetchData.js";

const App = () => {
  const { data, error, loading } = useFetchData("https://dummyjson.com/products");

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!data || !data.products) {
    return <p>No data available</p>;
  }

  const getHeaders = (products) => {
    const headersSet = new Set();

    products.forEach((product) => {
      Object.keys(product).forEach((key) => {
        if (typeof product[key] === "object" && !Array.isArray(product[key]) && product[key] !== null) {
          Object.keys(product[key]).forEach((nestedKey) => {
            headersSet.add(`${key}.${nestedKey}`);
          });
        } else {
          headersSet.add(key);
        }
      });
    });

    return Array.from(headersSet);
  };

  const headers = getHeaders(data.products);

  const getValue = (product, header) => {
    const keys = header.split(".");
    let value = product;

    keys.forEach((key) => {
      value = value[key];
    });

    // Converti oggetti e array in JSON string per renderli leggibili
    if (Array.isArray(value)) {
      return value.map((item, index) => (typeof item === "object" ? JSON.stringify(item) : item)).join(", ");
    } else if (typeof value === "object" && value !== null) {
      return JSON.stringify(value);
    }

    return value;
  };

  return (
    <div>
      <h1>Products Table</h1>
      <table border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.products.map((product) => (
            <tr key={product.id}>
              {headers.map((header, index) => (
                <td key={index}>{getValue(product, header)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;

