import React from 'react'

const Test = () => {
    const arr=['helloamanjeeturishi','hello2','hello3','hello4','hello5']
  return (
    <div>
      {arr.map((id,ele)=>{
        ele="hii"
        console.log(id,"key is")
        return <div key={id}> <p>{ele+ "rishi"}</p> <br /><p>{arr[0]}</p></div>
      })}
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
    </div>
  )
}

export default Test
