import React from 'react';
import { form,input,label } from 'bootstrap';
import './PageContainer.css';
import { Container, Col, Row} from "react-bootstrap";
import  LineChart  from '../components/Chart';
import Card from '../components/Card';



function PageContainer(){
    console.log("it executes");
    return(
        
       <Container  fluid>
       <div id="page">
       <div class="heading">
       <h1>BMI Tacker </h1>
       </div >
        <Row>
            <Col>
            <form id="text">
            <label for="weight">Weight(in kgs)</label><br />
            <input id="weight" type="number" name="weight" placeholder="50"  />
            </form>
            </Col>
            <Col>
            <form id="text">
            <label for="height">height(in cm)</label><br/>
            <input id="height"  type="number" name="height" placeholder="176" min="1" max="99" />
            </form>
            </Col>

        </Row>
            
        <div class="center">
        <button id="bmi-btn" class="calculate-btn" type="button" disabled >Calculate BMI </button>
        </div>
        </div>
        <LineChart />
        <div class="heading"> 7 Day data</div> 
        <Card />
       </Container>

        
    );

}
export default PageContainer