import React, { useEffect, useState } from 'react';
import Loading from './Container/Loading';
import Exam from './Container/Exam';



const Employee = Loading(Exam);

function App(props) {
  const [loading, getLoading] = useState(false);
  const [data, setData] = useState([]);

  const Data = [
    {

      id: 101,
      name: 'Amit',
      joining_date: "01-06-2021",
      salary: 50000
    },

    {
      id: 102,
      name: 'Piyush',
      joining_date: "01-01-2019",
      salary: 60000
    },
    {
      id: 103,
      name: 'Meet',
      joining_date: "01-03-2020",
      salary: 25000
    },
    {
      id: 104,
      name: 'Lalit',
      joining_date: "01-12-2021",
      salary: 30000
    }
  ]

  useEffect(() => {
    getLoading(true);
    setTimeout(() => { getLoading(false); setData(Data) }, 3000);
  }, [])

  return (
    <div>
      <Employee
        ourLoading={loading}
        data={data}
      />
    </div>
  );
}

export default App;