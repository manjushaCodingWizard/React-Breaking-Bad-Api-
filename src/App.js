import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './App.css';
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search'

const App = () => {
  const [items,setItems] = useState([]);//items is basically characters in the input
  const [isLoading,setIsLoading] = useState(true);
  const [query,setQuery] = useState('');


  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)     // async keyword is added to functions to tell them to return a promise rather than directly returning the value.The await operator is used to wait for a Promise. It can only be used inside an async function.You can use await when calling any function that returns a Promise, including web API functions. 

      console.log(result.data); //return array with collection of data of characters.
      setItems(result.data);
      setIsLoading(false);
    }

    fetchItems();
  },[query])


  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items}/>   {/*isLoading value will change when we call setIsLoading*/}

    </div>
  );
}

export default App;
