import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App(){
  let [글제목, 글제목변경] = useState( ['남자코트 추천', '강남 우동맛집', '파이썬 독학'] );
  let [modal, setModal] = useState([false, false, false]);
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
                modal[index] == true ? <Modal title={글제목[index]}></Modal> : null
              }
            </div>
          )
        })
      }
      <button onClick={ () => {
        let copy = [...글제목];
        copy[0] = '여자코트 추천';
        글제목변경(copy)
        }
      }> 수정버튼 </button>
    </div>
  )
}

function Modal(props){
  return (
    <div className="modal">
        <h4>{props.title}</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}

export default App;