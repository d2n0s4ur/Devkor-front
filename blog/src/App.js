import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App(){
  let [글제목, 글제목변경] = useState( ['남자코트 추천', '강남 우동맛집', '파이썬 독학'] );
  let [modal, setModal] = useState([false, false, false]);
  let [input, setinput] = useState('');
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      {
        글제목.map((title, index)  => {
          return (
            <div className="list">
              <h4>{글제목[index]}</h4>
              <p>2월 17일 발행</p>
              <button onClick={ ()=>{let copy = [...modal]; copy[index] = !modal[index]; setModal(copy); } }> {글제목[index]} </button>
              {
                modal[index] == true ? <Modal title={글제목} titlechange={글제목변경} index={index}></Modal> : null
              }
              <button onClick={ ()=>{
                let copy = [...글제목]; copy.splice(index,1); 글제목변경(copy);
                let copymodal = [...modal]; modal.splice(index, 1); setModal(copymodal);
                } }> 삭제 </button>
            </div>
          )
        })
      }
      <input onChange = {(e)=> {setinput(e.target.value)}}/>
      <button onClick={()=>{let copy = [...글제목]; copy.unshift(input); 글제목변경(copy);
        let copymodal = [...modal]; modal.unshift(false); setModal(copymodal);
      }}>추가</button>
    </div>
  )
}

function Modal(props){
  return (
    <div className="modal">
        <h4>{props.title[props.index]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={ () => {
        let copy = [...props.title];
        copy[0] = '여자코트 추천';
        props.titlechange(copy);
        }
      }> 수정버튼 </button>
      </div>
  )
}

export default App;