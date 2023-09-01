import React, { useEffect }  from 'react'
import { Form, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getAdminDisplayAction } from '../../pages/signin-signup/adminAction'


export const AdminTable = () => {
    const dispatch = useDispatch()
    
    const {adminList} = useSelector((state) => state.adminInfo)

    useEffect(()=>{
      dispatch(getAdminDisplayAction())
    },[dispatch])

  return (
    <div className="mt-5">
        <div className='d-flex justify-content-between mb-3'>
            <div>{adminList.length} Admins found</div>
            <div>
                <Form.Control type='text' placeholder='search by Admin name'/>
            </div>
        </div>
    <Table striped bordered hover className="text-start">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Address</th>
          <th>Email</th>
        </tr>
      </thead>
      {
        adminList.map((item, i) => (
            <tr key={item._id}>
                <td>{i + 1 }</td>
                <td>{item.fName }</td>
                <td>{item.lName }</td>
                <td>{item.address }</td>
                <td>{item.email }</td>
            </tr>
        ))
      }
      <tbody>
      </tbody>
    </Table>
    </div>
  )
}
