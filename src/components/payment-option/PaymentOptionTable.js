import { Button, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { CustomModal } from "../customModal/CustomModal";
import { getOPsAction } from "../../pages/payment-option/poAction";

export const PaymentOptionTable = () => {

    const dispatch = useDispatch()
    const { paymentOptions } = useSelector((state) => state.poInfo)``

    useEffect(() =>{
      dispatch(getOPsAction())
    }, [dispatch])

    const handleOnEdit = (obj) =>{
    };

  return (
    <>
        <CustomModal title="Edit Category" >
        </CustomModal >
      <div className="d-flex justify-content-between mt-5">
        <div> {paymentOptions.length } Paymeny Options Found</div>
        <div>
          <Form.Control placeholder="Serach by name ..." />
        </div>
      </div>
      <Table striped bordered hover className="mt-2 ">
        <thead>
          <tr>
            <th>#</th>
            <th>Status</th>
            <th>Title</th>
            <th>Description</th>
            <th>Added At</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {paymentOptions.map(({ _id, status, title, description, createdAt }, i) => (
            <tr key={_id}>
              <td>{i + 1}</td>
              <td>
                <span
                  className={
                    status === "active"
                      ? "bg-success p-2 rounded"
                      : "bg-danger p-2 rounded"
                  }
                >
                  {status}
                </span>
              </td>
              <td> {title}</td>
              <td>{description}</td>
              <td>{createdAt.slice(0, 10)}</td>
              <td>
                <Button variant="danger" 
                    onClick={ () => handleOnEdit({_id, status, title, description, createdAt})}>
                    Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
