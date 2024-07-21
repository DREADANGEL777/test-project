import React, { useState, useEffect } from "react"

import s from "./ItemList.module.css"

const ItemList = () => {
  const [inputValue, setInputValue] = useState("")
  const [items, setItems] = useState([])
  const [editIndex, setEditIndex] = useState(null)
  const [editValue, setEditValue] = useState("")
  const [showConfirm, setShowConfirm] = useState(false)
  const [itemToDelete, setItemToDelete] = useState(null)

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("items"))
    if (savedItems) {
      setItems(savedItems)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items))
  }, [items])

  const addItem = () => {
    if (inputValue.trim()) {
      setItems([...items, inputValue])
      setInputValue("")
    }
  }

  const confirmDelete = (index) => {
    setItemToDelete(index)
    setShowConfirm(true)
  }

  const removeItem = () => {
    const newItems = []
    for (let i = 0; i < items.length; i++) {
      if (i !== itemToDelete) {
        newItems.push(items[i])
      }
    }
    setItems(newItems)
    setShowConfirm(false)
    setItemToDelete(null)
  }

  const startEditing = (index) => {
    setEditIndex(index)
    setEditValue(items[index])
  }

  const saveEdit = () => {
    if (editValue.trim()) {
      const newItems = []
      for (let i = 0; i < items.length; i++) {
        if (i === editIndex) {
          newItems.push(editValue)
        } else {
          newItems.push(items[i])
        }
      }
      setItems(newItems)
      setEditIndex(null)
      setEditValue("")
    }
  }

  return (
    <div className={s.container}>
      <h1>TO DO LIST</h1>
      <div className={s.inputContainer}>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button onClick={addItem} className={s.btnStyle}>
          Save
        </button>
      </div>
      <ul className={s.ulStyle}>
        {items.map((item, index) => (
          <li key={index} className={s.listItem}>
            {editIndex === index ? (
              <input
                type="text"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                className={s.editInput}
              />
            ) : (
              <div className={s.itemText}>
                {index + 1}. {item}
              </div>
            )}
            {editIndex === index ? (
              <button onClick={saveEdit} className={s.btnStyle}>
                Save
              </button>
            ) : (
              <div className={s.btnContainer}>
                <button onClick={() => startEditing(index)} className={s.btnStyle}>
                  ✎
                </button>
                <button onClick={() => confirmDelete(index)} className={s.btnStyle}>
                  ✖
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
      {showConfirm && (
        <div className={s.modal}>
          <span className={s.popup}>
            <img src="https://pngimg.com/d/exclamation_mark_PNG75.png" alt="" />
            <h2>Warning</h2>
            <p>Are you sure you want to delete this item?</p>
            <button onClick={removeItem} className={s.btnStyle}>
              Yes
            </button>
            <button onClick={() => setShowConfirm(false)} className={s.btnStyle}>
              No
            </button>
          </span>
        </div>
      )}
    </div>
  )
}

export default ItemList
