import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { Table } from 'antd'
import 'antd/dist/antd.css'

function DisplayJokes() {
let [jokes, setJoke] = useState([])
 
 useEffect(() => {
  
      axios
        .get("https://official-joke-api.appspot.com/jokes/ten")
        .then((res) => setJoke(res.data))
        .catch((err) => console.log(err))
        
         
     }, [])
    //  console.log(jokes)
     
    const handleSort = (a, b) =>{
      let first = a.setup.toLowerCase()
      let second = b.setup.toLowerCase()
      if(first>second){
        return 1
      }
      else if(first<second){
        return -1
      }
      else {

        return 0
      }
      // console.log(a.setup.toLowerCase())
    }
    
      
      const columns = [
        {
          title: 'Id',
          dataIndex: 'id',
          key: 'id',
          sorter:(a, b) => a.id - b.id
        },
        {
          title: 'Setup',
          dataIndex: 'setup',
          key: 'setup',
          sorter:(a, b) => handleSort(a, b)
        },
        {
          title: 'Punchline',
          dataIndex: 'punchline',
          key: 'punchline',
        },
      ];
    

    return (
        <div >
          <div style={{width:"100%", height:"2.5rem", backgroundColor:"brown"}}>
           <h2 style={{textAlign:"center",fontSize:"20px", fontWeight:"bolder", color:"white"}}>Jokes</h2> 
           </div> 
             
           
           
      <Table dataSource={jokes} columns={columns} />
           
        </div>
    )
}

export default DisplayJokes
