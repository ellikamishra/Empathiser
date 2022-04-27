import React from "react"
import { useNavigate } from "react-router-dom";
import "./styles.css"



export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="_-1-introduction flex-col-hstart-vstart clip-contents">
      <div className="navs flex-row-vcenter-hstart clip-contents">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/8buxxh4c7t9-104%3A26?alt=media&token=d23c89b6-5874-4660-9752-677dcdba999c"
          alt="Not Found"
          className="image-1"
        />
        <div className="logo flex-row-vcenter-hcenter">
          <p className="txt-1071">Empathiser</p>
        </div>
        <div className="nav-links flex-row-vcenter-hstart">
          <p className="txt-956">About</p>
          <div className="frame-2 flex-row-vcenter-hcenter">
            <p className="txt-734">Our work</p>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/8buxxh4c7t9-102%3A12?alt=media&token=a3c17b4c-5e3c-402a-b5f1-bc4e12a0285a"
              alt="Not Found"
              className="akar-icons-chevron-down"
            />
          </div>
          <p className="txt-295">contact us</p>
        </div>
        <div className="button flex-row-vcenter-hcenter">
          <p onClick={()=>navigate("/donate")} className="txt-295">donate</p>
        </div>
      </div>
      <div className="group-216 flex-col">
        <div className="container flex-col-hstart-vstart clip-contents">
          <div className="row flex-row-vcenter-hstart">
            <div className="col-md-8 flex-col-hstart-vstart clip-contents">
              <p className="txt-573">Empathiser- Philanthropy for the next </p>
            </div>
          </div>
        </div>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/8buxxh4c7t9-109%3A3?alt=media&token=16f2664b-9cd6-4446-94eb-c64bba368532"
          alt="Not Found"
          className="rectangle-1"
        />
      </div>
      <p  className="txt-056">Get involved</p>
    </div>
  )
}
