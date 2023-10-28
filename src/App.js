import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, Redirect } from 'react-router-dom';


import { Suspense, lazy,useEffect, useState } from 'react';

const DummyTable = lazy(() => import('./tabs/dummyTable'));
const DummyList = lazy(() => import('./tabs/dummyList'));
const DummyChart = lazy(() => import('./tabs/dummyChart'));


const App = () => {
  const [tableData, setTableData] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/tabs.json")
      const data = await response.json()
      console.log(data)
      setTableData(data)
    }

    fetchData()
  }, [])

  useEffect(() => {
    
  }, [tableData])

  return (
    <Router data={tableData}>
      <nav className='tabs'>
        {tableData?.map((item) => (
          <Link className='link' key={item.order} to={item.id}>{item.title}</Link>
        ))}
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<DummyTable />} />
          <Route path="dummyTable" element={<DummyTable />} />
          <Route path="dummyList" element={<DummyList />} />
          <Route path="dummyChart" element={<DummyChart />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
