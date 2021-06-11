/// <reference types="Cypress" />

class apiTest {

    testApiAndVerifyResponce(method, endPoint, statusCode) {
        cy.request(method, '/' + endPoint).then(resposnce => {
                expect(resposnce.status).to.equal(Number(statusCode))
        })
    }

    testApiUsingPostAndVerifyResponce(dataTable) {
        dataTable.hashes().forEach(elem => {
            var body = {'name':elem.name,'job':elem.job }
            cy.request(elem.method, '/' + elem.endPoint, body).then(resposnce => {
                expect(resposnce.body.name).to.equal(elem.name)
                expect(resposnce.body.job).to.equal(elem.job)
                    expect(resposnce.status).to.equal(Number(elem.statusCode))
            })
        })
    }

    checkMethod(method,endPoint, name,job, statusCode){
       
            switch(method){
                case 'POST':this.testApiUsingPostAndPutAndVerifyResponce(method,endPoint, name,job, statusCode)
                break
                case 'PUT':this.testApiUsingPostAndPutAndVerifyResponce(method,endPoint, name,job, statusCode)
                break
                case 'GET':this.testApiAndVerifyResponce(method, endPoint, statusCode)
                break
                case 'DELETE':this.testApiAndVerifyResponce(method, endPoint, statusCode)
                break
            }
    }

    testApiUsingPostAndPutAndVerifyResponce(method,endPoint, name,job, statusCode){
        var body = {name,job }
        cy.request(method, '/' + endPoint, body).then(resposnce => {
            expect(resposnce.body.name).to.equal(name)
            expect(resposnce.body.job).to.equal(job)
                expect(resposnce.status).to.equal(Number(statusCode))
        })   
    }

}
export default apiTest