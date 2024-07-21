import React, { useState } from "react"
import s from "./imageItem.module.css"

const ImageItem = ({ image, index }) => {
  const [isVisible, setIsVisible] = useState(true)

  const handleImageClick = () => {
    setIsVisible(false)
  }

  return (
    <div>
      <img
        className={isVisible ? s.visibleImage : s.hiddenImage}
        src={image}
        alt={`image-${index}`}
        onClick={() => handleImageClick()}
        style={{ cursor: "pointer", margin: "10px" }}
      />
    </div>
  )
}

export default ImageItem
