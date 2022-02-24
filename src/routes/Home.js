import React, { useState } from "react";
import { connect } from "react-redux";
import ToDo from "../components/ToDo";
import { actionCreators } from "../store";

function Home({ toDos, addToDo }) {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addToDo(text);
    setText("");
  };

  return (
    <div>
      <h1>ToDo</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange}></input>
        <button>추가</button>
        <ul>
          {toDos.map((toDo) => (
            <ToDo {...toDo} key={toDo.id} />
          ))}
        </ul>
      </form>
      <ul></ul>
    </div>
  );
}

// 현재 상태
// connect 는 home에 보내는 props에 return 값을 추가할 수 있도록 허용해줌
function mapStateToProps(state) {
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text)),
  };
}

// connect 사용(react-redux)
// home을 내보냄과 동시에 상태 state를 내보내고 싶어서
export default connect(mapStateToProps, mapDispatchToProps)(Home);
