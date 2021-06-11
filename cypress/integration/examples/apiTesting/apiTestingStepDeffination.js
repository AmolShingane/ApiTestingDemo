/// <reference types="Cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import apiTest from "../../../Utility/apiTestingStepDeffination"

const apiTestObj = new apiTest()


When('I send method name {string} and end point {string} and verify status code {string}', (method, endPoint, statusCode) => {
    apiTestObj.testApiAndVerifyResponce(method, endPoint, statusCode)
})



When('I send method name {string} and end point {string} and name {string} and job {string} verify status code {string}', (method,endPoint, name,job, statusCode) => {

    apiTestObj.checkMethod(method,endPoint, name,job, statusCode)
    //testApiUsingPostAndPutAndVerifyResponce(method,endPoint, name,job, statusCode)
})

When('I send POST request to create the new employee', (dataTable) => {

    apiTestObj.testApiUsingPostAndVerifyResponce(dataTable)
})

When('I send multiple data', (dataTable) => {
    cy.log('rows : ' + dataTable.rows());
    dataTable.hashes().forEach(elem => {
        cy.log("name :" + elem['name'])
        cy.log("number :" + elem['number'])
    });

})