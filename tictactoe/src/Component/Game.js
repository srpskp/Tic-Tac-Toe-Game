import React, { useState } from 'react'
import Swal from 'sweetalert2'
const boxdata ={
       display:'grid',
     
       gridTemplateRows:'repeat(3,10vw)',
       gridTemplateColumns:'repeat(3,10vw)',
       fontFamily:'Roboto , sans-serif',
       backgroundColor:'#ccc',
     
       width:'100px',
       margin:'0 auto',
       marginTop:'50px',
       
       
}

const btnStyle = {
  fontSize:'8vw'
}

export default function Game() {
  const [char, setchar] = useState('x')
    const [perform, setperform] = useState([
        '','','',
        '','','',
        '','','',
    ])
    let hendalclick=(index) =>{
      console.log(index)
      perform[index] = char
      checkwinner(char)
      if(char=='x'){
        setchar('o')
      }
      else{
        setchar('x')
      }
      setperform([...perform])

    }

    let checkwinner = (ch,index) => {
      if( ((perform [0]==perform[1]) && (perform [1]==perform[2]) && (perform [2]==ch)) ||
            ((perform [3]==perform[4]) && (perform [4]==perform[5]) && (perform [5]==ch)) ||
                ((perform [6]==perform[7]) && (perform [7]==perform[8]) && (perform [8]==ch)) ||
                     ((perform [0]==perform[3]) && (perform [3]==perform[6]) && (perform [6]==ch)) ||
                         ((perform [1]==perform[4]) && (perform [4]==perform[7]) && (perform [7]==ch)) ||
                              ((perform [2]==perform[5]) && (perform [5]==perform[8]) && (perform [8]==ch)) ||
                                  ((perform [0]==perform[4]) && (perform [4]==perform[8]) && (perform [8]==ch)) ||
                                       ((perform [2]==perform[4]) && (perform [4]==perform[6]) && (perform [6]==ch)) 
      )
       
        {
        // console.log('winner')

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Winner',
          showConfirmButton: false,
          timer: 2000
        })

      }

      // if(perform [0] !== perform[1] !== perform [2] !== perform[3] !== perform [4] !== perform[5] !== perform [6] !== perform[7] !== perform [8]  !== ch   ){
      //   // console.log('Fail')

      //   Swal.fire({
      //     icon: 'error',
      //     title: 'Oops...',
      //     text: 'Something went wrong!',
      //     footer: '<a href="">Why do I have this issue?</a>'
      //   })
      // }
      

    }
    // let checkwinner = (perform) =>{
    //   const winnerlogic = [
    //     [0,1,2],
    //     [3,4,5],
    //     [6,7,8],
    //     [0,3,6],
    //     [1,4,7],
    //     [2,5,8],
    //     [0,4,8],
    //     [2,4,6],
    //   ]

    //    for(let i=0; i<winnerlogic.length ; i++)
    //    {
    //       const [a,b,c] = winnerlogic[i]
    //       if (perform[a] != null && perform[a]===perform[b] && perform[a]===perform[c]){
    //         return true;
    //       }
    //    }
    //    return false
    // }

      // const winner = checkwinner(perform);
      // let status;
      // if (winner) {
      //   status = 'Winner: ' + winner;
      //   console.log(status)
      // } else {
      //   status = 'Next player: '
      //   console.log(status)
      // }


    // let hendalclick=(index) =>{
    //   console.log(index)
    //   // checkwinner(perform)
    //   perform[index] = char
    //   if(char=='x'){
    //     setchar('o')
    //   }
    //   else{
    //     setchar('x')
    //   }
    //   setperform([...perform])

    // }

    // const winner = checkwinner(perform);
    // let status;
    // if (winner) {
    //   status = 'Winner: ' + winner;
    //   console.log(status)
    // } else {
    //   status = 'Next player: '
    //   console.log(status)
    // }
  return (
    <div className='box' style={boxdata}>
        {
            perform?perform.map((item,index)=>(
                   <button  style={btnStyle} onClick={() => hendalclick(index)}>{item}</button>
            )):<h2>Loading..</h2>
        }    
    </div>
  )
}
