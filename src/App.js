import InputBox from '../src/components/InputBox';
import Button from '../src/components/Button';
import CardList from '../src/components/CardList';
import './App.scss';
import { useState } from 'react';

const App = () => {
  const [inputVal, setinputVal] = useState("");
  const [cardList, setCardList] = useState([]);

  const addTodo = () => {
    if(inputVal.length > 0) {
      const todoObj = {
        id: Date.now(),
        text: inputVal,
        isDone: false,
        isEdit: false
      }
      setCardList([...cardList, todoObj]);
      setinputVal("");
    }
  }

  const onClose = (todoItem) => {
    let updatedCardList = cardList.filter(item => item.id !== todoItem.id);
    setCardList(updatedCardList);
  }

  const onEdit = (todoItem) => {
    let updatedCardList = cardList.map(item => {
      if(item.id === todoItem.id) {
        return {...item, isEdit: true};
      } else {
        return item;
      }
    });
    setCardList(updatedCardList);
  }

  const onUndo = (todoItem) => {
    let updatedCardList = cardList.map(item => {
      if(item.id === todoItem.id) {
        return {...item, isDone: false};
      } else {
        return item;
      }
    });
    setCardList(updatedCardList);
  }

  const onDone = (todoItem) => {
    let updatedCardList = cardList.map(item => {
      if(item.id === todoItem.id) {
        return {...item, isDone: true};
      } else {
        return item;
      }
    });
    setCardList(updatedCardList);
  }

  const onEditText = (event, todoItem) => {
    let key = window.event.keyCode;
    if (key === 13) {
      let updatedCardList = cardList.map(item => {
        if(item.id === todoItem.id) {
          return {...item, isEdit: false, text: event.target.value};
        } else {
          return item;
        }
      });
      setCardList(updatedCardList);
    }
  }

  return (
    <div className="todo">
      <div className='todo__container'>
        <h1 className=''>Todo App (ReactJs)</h1>
        <div className=''>
          <InputBox className='' val={inputVal} onAddTodo={(val) => setinputVal(val)} />
          <Button onAddTodo={addTodo}/>
        </div>
        <div className=''>
          <CardList list={cardList} onClose={onClose} onEdit={onEdit} onUndo={onUndo} onDone={onDone} onEditText={onEditText} />
        </div>
      </div>
    </div>
  );
}

export default App;
