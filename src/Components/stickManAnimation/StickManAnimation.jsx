import React from "react"

import s from "./StickManAnimation.module.css"

function StickManAnimation() {
  return (
    <div className={s.wrapper}>
      <img
        src="https://www.svgrepo.com/show/96742/standing-business-man-with-tie-and-right-arm-raised.svg"
        alt=""
        className={s.stickMan}
      />
      <div className={s.wavingHand}>👋🏿</div>

      <div className={s.replicStickman}>
        <h6 className={s.effect} content="HELLO!!! you can return to main pages higher">
          HELLO!!! you can return to main pages higher
        </h6>
      </div>
    </div>
  )
}

export default StickManAnimation
