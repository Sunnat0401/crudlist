// custome hooks
import {useFetch} from '../hooks/useFetch'
const MenuLinks = () => {
  const {data:quizzess, isPending , error} = useFetch("http://localhost:3000/quizzes")
  return <div>
    {isPending && <p>Loading</p>}
    {error && <p>error</p>}
    <div className='menu-list'>
     {quizzess.map((item)=>{
      return 1 ;
     })
     }
    </div>
  </div>
   
  
}

export default MenuLinks
