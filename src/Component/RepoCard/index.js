import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import style from "./style.module.scss"
import { Container } from 'react-bootstrap';

export const showRepo = (props) => {
  return (
    <>
      <div className="card my-4" style={{ maxHeight: 150 }}>
        <div className="row g-2 my-1">
          <div className={`col-10 ${style.borderRight}`}>
            <Container fluid>
            <div className={`${style.centerBlock}`}>
                <p className={`${style.p}`}>dkh</p>
              </div>
              <div>
                <p className={`${style.p}`}>adfad</p>
              </div>
              <div>adklhb</div>
            </Container>
          </div>
          <div className={`col-2`}>
            <div className={`container`}>
              <div className='row'>
                <button type="button" className="btn btn-primary m-1">Clone</button>
              </div>
              <div className='row'>
                <button type="button" className="btn btn-primary m-1">Clone with sub-module</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}