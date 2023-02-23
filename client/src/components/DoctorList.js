import React from 'react'
// import HomePage from './Layout'
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import dp from '../images/dp.png'
const DoctorList = ({doctor}) => {
  const navigate = useNavigate()
  return (
    <>
    <Col md={6} sm={6} xs={12} mt={3}>
         <div className="doctor_list_wrapper"
         onClick={()=>navigate(`/doctor/book-appointment/${doctor._id}`)}
         >
          <div className="doctor_list_header">
            <div className="dp_image">
              <img src={dp} alt="dp" />
            </div>
            <h3>Dr:{doctor?.firstName} {doctor?.lastName}</h3>
          </div>
          <div className="doctor_list_body">
          <Row>
            <Col md={5} sm={4} xs={4}>
              <h5><span><i class="fa-regular fa-envelope"></i></span> Email:</h5>
            </Col>
            <Col md={7} sm={8} xs={8}>
              <p>{doctor?.email}</p>
            </Col>
            <Col md={5} sm={4} xs={4}>
              <h5> <span><i class="fa-sharp fa-solid fa-phone"></i></span> Phone:</h5>
            </Col>
            <Col md={7} sm={8} xs={8}>
            <p>{doctor?.phone}</p>
            </Col>
            <Col md={5} sm={4} xs={6}>
              <h5> <span><i class="fa-sharp fa-solid fa-flask"></i></span> Experience:</h5>
            </Col>
            <Col md={7} sm={8} xs={6} >
            <p>{doctor?.experience}</p>
            </Col>
            <Col md={5} sm={5} xs={6}>
            <h5> <span><i class="fa-solid fa-user-doctor"></i></span> Specialization:</h5>
            </Col>
            <Col md={7} sm={7} xs={6}>
            <p>{doctor?.specialization}</p>
            </Col>
            <Col md={5} sm={4} xs={4}>
              <h5> <span><i class="fa-solid fa-clock"></i></span> Timings:</h5>
            </Col>
            <Col md={7} sm={8} xs={8}>
            <p>{doctor?.timings[0]}-{doctor?.timings[1]}</p>
            </Col>
            <Col md={5} sm={4} xs={4}>
              <h5><span><i class="fa-solid fa-rupee-sign"></i></span> Fee:</h5>
            </Col>
            <Col md={7} sm={8} xs={8}>
            <p>{doctor?.feesPerCunsaltation}</p>
            </Col>
      
          </Row>
         
            {/* <div className="docto_list_item">
            </div> */}
          </div>
         </div>

    </Col>
    </>
  )
}

export default DoctorList