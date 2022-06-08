import React, { useEffect, useState } from 'react';
import Loading from './Container/Loading';
import Home from './Container/Home';

const LoadingWithhome = Loading(Home);

function App(props) {


  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const orgdata = [
    { id: 7290, name: "Maithil" },
    { id: 6806, name: "Kartik" },
    { id: 4879, name: "Ritik" }
  ]

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {setLoading(false); setData(orgdata)}, 2000);
  }, [])


  return (
    <div>
      <LoadingWithhome
        isLoading={loading}
        data={data}
      />
    </div>
  );
}

export default App;