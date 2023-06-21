import {useState, useEffect,} from 'react'
import HeaderImg from "./cat-facts.png"
import LoadingImg from "./Loading"




const base = "https://catfact.ninja/fact";


const CatFact = () => {

    const [data, setData] =useState("")
    const [loading, setIsLoading] =useState(false)


    const fetchCatFact =  async() => {
        const catFact = await fetch(base)
        const fetchedData = await catFact.json()
        setData(fetchedData.fact)
        setIsLoading(true)
        
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

            fetchCatFact()

        setIsLoading(false)

    }
    useEffect(() => {
    setTimeout(()=>{
            fetchCatFact()
        },3000
        )
        setIsLoading(false)


        
    },[])

  return (
    <form style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    }} 
        onSubmit={handleSubmit}
    >
        <div><img src={HeaderImg}/></div>
        
        { loading ? (<p>{data}</p>) : <LoadingImg />}
        <button>Get new Fact</button>
    </form>
  )
}



export default CatFact