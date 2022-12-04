import React, { useState, memo, useEffect } from 'react';
import Menu from '../../components/Menu'

const Button = (props:any) => {
  return <button onClick={()=>props.sedIndex(props.index + 1)}>我是按钮</button>
}

const Input = (props: any)=> {
  console.log(props)
  return <input defaultValue={props.index} type="text" />
}

const MemoInput = memo(Input)

const App: React.FC = () => {
  const [index,sedIndex] = useState(0)
  useEffect(()=>{
  }, [])
  return <div>
     <Menu></Menu>
     {index}
     <div>
      <MemoInput index={index}></MemoInput>
      <Button sedIndex={sedIndex} index={index}></Button>
     </div>
  </div>
};

export default App;