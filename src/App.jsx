import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { Button, Card, Row, Col } from "react-bootstrap";

function MenuItem({ name, price, nutritionInfo, image }) {
  return (
    <>
      <Col xs={6} md={4} lg={3}>
        <Card>
          <Card.Img variant='top' src={image} fluid />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Subtitle className="text-muted mb-2">
              {price}
            </Card.Subtitle>
            <NutritionalInfo nutritionInfo={nutritionInfo} />
            <Button>Add to Cart</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}

// function NavbarLeft() {
//   return (
//     <Navbar className="sticky-left">
//       <Navbar.Brand></Navbar.Brand>
//     </Navbar>
//   )
// }

function Category({ title, foods }) {
  return (
    <div>
      <h2>{title}</h2>
      <Row className="mb-3">
        {foods}
      </Row>
    </div>
  )
}

function NutritionalInfo({ nutritionInfo }) {
  return (
    <div>
      <p>Calories: {nutritionInfo.calories} kcal <br />
        Protein: {nutritionInfo.protein} g <br />
        Carbs: {nutritionInfo.carbs} g <br />
        Fat: {nutritionInfo.fat} g</p>
    </div>
  )
}

const friedChicken = (
  <>
    <MenuItem
      name={"2pc Fried Chicken Set"}
      price={"RM 10.00"}
      image={"src/assets/fried-chicken.jpeg"}
      nutritionInfo={{
        calories: 540,
        protein: 31,
        carbs: 35,
        fat: 29
      }} />
    <MenuItem
      name={"6pc Nugget"}
      price={"RM 6.00"}
      image={'src/assets/chicken-nuggets.jpg'}
      nutritionInfo={{
        calories: 270,
        protein: 13,
        carbs: 16,
        fat: 16
      }} />
  </>
)

const desserts = (
  <>
    <MenuItem
      name={"Ice Cream"}
      price={"RM 5.00"}
      image={'src/assets/ice-cream.jpg'}
      nutritionInfo={{
        calories: 207,
        protein: 2,
        carbs: 33,
        fat: 6
      }
      } />
    <MenuItem
      name={"Apple Pie"}
      price={"RM 2.00"}
      image={'src/assets/apple-pie.jpg'}
      nutritionInfo={{
        calories: 270,
        protein: 1,
        carbs: 43,
        fat: 10
      }} />
  </>
)


function App() {
  return (
    <>
      <div className="m-5">
        {/* <Col>
          <NavbarLeft />
        </Col>
        <Col> */}
        <div className="mb-5">
          <h1 className="text-center">Uncle Haris Fried Chicken</h1>
        </div>
        <Category title={"Fried Chicken"} foods={friedChicken} />
        <Category title={"Desserts"} foods={desserts} />
        {/* </Col> */}
      </div>
    </>
  )
}

export default App;