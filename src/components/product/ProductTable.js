import { Button, Form } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';

export const ProductTable = () =>{

  const { products} = useSelector((state) => state.productInfo)
  return (
    <div className="mt-5">
        <div className='d-flex justify-content'>
            <div>{products.length}</div>
            <div>
                <Form.Control type='text' placeholder='search by product name'/>
            </div>
        </div>
    <Table striped bordered hover variant="">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>QTY</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {
          products.map((item, i) => (
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td><Button variant='primary'>Edit</Button></td>
            </tr>
          ))
        }
      </tbody>
    </Table>
    </div>
  );
}
