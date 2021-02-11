import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Recipies from '../components/Recipies';
import Button from '../components/Button'
import Input from '../components/Input'
import Form from '../components/Form'
import Container from '../components/Container';
import Title from '../components/Title';



export default function Home() {

  const APP_ID = '7412c37d'
  const APP_KEY = '5a4bcfbf23d063355a16eb2c3e5e786e'

  const [query,setQuery] = useState([]);
  const [search,setsearch] = useState("");
  const [end,setend] = useState("chicken");

  useEffect(()=>{
    getRecepies();
  },[end])

  const getRecepies = async () => {
    const res = await fetch(`https://api.edamam.com/search?q=${end}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await res.json();
    setQuery(data.hits);
  }

  const getEnd = e => {
    e.preventDefault();
    setend(search);
    setsearch('');
  }

  return (
    <>
    <Container>
      <Title>Busca Receitas</Title>
      <Form onSubmit={getEnd}>
        <Input 
        type="text"
        value={search}
        onChange={e=>setsearch(e.target.value)}
        ></Input>
        <Button type="submit">Buscar</Button>
      </Form>
      {query.map((recipe)=>(
        <Recipies 
        title={recipe.recipe.label}
        image={recipe.recipe.image}
        calories={recipe.recipe.calories}
        ingredients={recipe.recipe.ingredients}
        />
      ))}
      </Container>
    </>
  )
}
