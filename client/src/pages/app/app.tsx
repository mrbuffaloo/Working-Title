import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getEntrys, TEntry } from '../../api/getEntrys';
import { searchTerm } from '../../api/search';
import './app.css'
import Layout from '../../components/layout';



function App() {
  const [search, setSearch] = useState('');
  const [entrys, setEntrys] = useState<TEntry[]>([]);

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    setSearch("")
    const resualtOfSearch = await searchTerm(search)
    console.log(resualtOfSearch)
  }

  useEffect(() => {
    async function fetchEntrys() {
      const newEntrys = await getEntrys();
      setEntrys(newEntrys);
    }
    fetchEntrys(); 
  }, []);

  return(
  <div className='App'>
    <Layout>
    <p>
      Hello
    </p>
    <ul className='entrys'>
      {entrys.map((entry) => (
        <li key={entry.id}>
          <Link to={`entry/${entry.id}`}>{entry.title}</Link>
        </li>
      ))}
    </ul>
    <form onSubmit={handleSearch}>
      <label htmlFor='Search-box'>Search box</label>
      <input 
        id='Search-box'
        value={search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>{
          setSearch(e.target.value);
        }}
        
      />
      <button>Search</button>
    </form>
    </Layout>
  </div>
  )
}

export default App
