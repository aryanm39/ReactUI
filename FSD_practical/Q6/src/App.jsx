import React, { useState, useEffect } from 'react';


function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://dummyjson.com/users');
      const json = await response.json();
      setData(json.users);
    };

    fetchData();
  }, []);

 
  return (
    <>
      <p>
        {data.map((d, index) => (
          <h3 key={index}>{d.firstName + " " + d.lastName+ " " + d.age+ " " + d.gender}<br /></h3>
        ))}
      </p>
    </>
  );
}

export default App;
