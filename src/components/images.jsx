// eslint-disable-next-line no-unused-vars
import React from 'react'
import ncc from "../assets/ncc.png";
import dlss from "../assets/dlss.png";
import mayurlogo from "../assets/mayurlogo.png";

export default function images() {
  return (
    <div className="image-container">
          <img src={ncc} className="foo-logo" alt="" />
          <img src={dlss} className="foo-logo" alt="" />
          <img src={mayurlogo} className="foo-logo" alt="" />
        </div>
  )
}
