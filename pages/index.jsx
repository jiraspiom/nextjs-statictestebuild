export default function Home({valor}) {
  return (
    <>
      <h1> valor: {valor}  </h1>
    </>
  )
}

export const getStaticProps = async () =>{
  //const resposta = await fetch('http://localhost:3000/api/valor')
  //const dados = await resposta.json()
  
  const dados = Math.random()
  
  return{
    revalidate: 10,
    props: {
      valor: dados
    }
  }
}
