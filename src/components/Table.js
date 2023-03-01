import React, {useState} from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Table } from "reactstrap";
import EditUser from "./EditUser"

const TableData = () => {
  const { user } = useSelector((state) => state, shallowEqual);
  const dispatch = useDispatch();

  const [showEditModal, setShowEditModal] = useState(false);
  const [formData, setFormData] = useState({
    id:"",
    name: "",
    username: "",
    email: "",
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    phone: "",
    website: "",
    company: "",
  });

  const closeEditModal = () => setShowEditModal(false);
  const fieldChngHndlr = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const openEditModal = e => {
    const dataId = e.currentTarget.getAttribute("data-id"),
    rowdata = user.find(item => item.id == dataId);
    setFormData({...rowdata});
    setShowEditModal(true);
  }

  const updateUserData = () => {
    const updatedUserData = [...user],
     rowIndex = updatedUserData.findIndex(item => item.id == formData.id);
    updatedUserData.splice(rowIndex,1,{...formData});
    dispatch({type:"SAVE_USER_DATA", payload:updatedUserData})
    closeEditModal();
  }

  const deleteUser = (e) => {
    const updatedUserData = [...user],
      dataId = e.currentTarget.getAttribute("data-id"),
      rowIndex = updatedUserData.findIndex(item => item.id == dataId);
    updatedUserData.splice(rowIndex,1);
    dispatch({type:"SAVE_USER_DATA", payload:updatedUserData})
    closeEditModal();
  }
  return (
    <div className="p-4">
      <h2 className="mb-4">List Of Users</h2>
      <Table>
        <thead>
          <tr>
            <th>#Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Street</th>
            <th>Suit</th>
            <th>City</th>
            <th>Zipcode</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {(user || []).map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.street}</td>
              <td>{item.suit}</td>
              <td>{item.city}</td>
              <td>{item.zipcode}</td>
              <td>{item.phone}</td>
              <td>{item.website}</td>
              <td>{item.company}</td>
              <td>
                <div className="d-flex align-items-center">
                    <i className="ri-pencil-line me-2 text-primary btn" data-id={item.id} onClick={openEditModal}></i>
                    <i className="ri-delete-bin-line text-danger btn" data-id={item.id} onClick={deleteUser}></i>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <EditUser showEditModal={showEditModal} toggleEditModal={closeEditModal} formData={formData} fieldChngHndlr={fieldChngHndlr} updateUserData={updateUserData}/>
    </div>
  );
};

export default TableData;
