import { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Label, Input, FormGroup, Form, Button } from "reactstrap";

const EditUser = ({ showEditModal, toggleEditModal, formData, fieldChngHndlr, updateUserData }) => {
  return (
    <Modal isOpen={showEditModal} toggle={toggleEditModal} size="lg">
      <ModalHeader toggle={toggleEditModal}>Edit User</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label>Name</Label>
            <Input type="text" name="name" value={formData.name} onChange={fieldChngHndlr} />
          </FormGroup>
          <FormGroup>
            <Label>UserName</Label>
            <Input type="text" name="username" value={formData.username} onChange={fieldChngHndlr} />
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input type="text" name="email" value={formData.email} onChange={fieldChngHndlr} />
          </FormGroup>
          <FormGroup>
            <Label>Street</Label>
            <Input type="text" name="street" value={formData.street} onChange={fieldChngHndlr} />
          </FormGroup>
          <FormGroup>
            <Label>Suite</Label>
            <Input type="text" name="suite" value={formData.suite} onChange={fieldChngHndlr} />
          </FormGroup>

          <FormGroup>
            <Label>City</Label>
            <Input type="text" name="city" value={formData.city} onChange={fieldChngHndlr} />
          </FormGroup>
          <FormGroup>
            <Label>Zipcode</Label>
            <Input type="text" name="zipcode" value={formData.zipcode} onChange={fieldChngHndlr} />
          </FormGroup>
          <FormGroup>
            <Label>Phone</Label>
            <Input type="text" name="phone" value={formData.phone} onChange={fieldChngHndlr} />
          </FormGroup>
          <FormGroup>
            <Label>Website</Label>
            <Input type="text" name="website" value={formData.website} onChange={fieldChngHndlr} />
          </FormGroup>
          <FormGroup>
            <Label>Company</Label>
            <Input type="text" name="company" value={formData.company} onChange={fieldChngHndlr} />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={updateUserData}>
          Save
        </Button>
        <Button color="secondary" onClick={toggleEditModal}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditUser;
