import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { app } from "../config/firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

function CreateWork() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
  });
  const handleAddWork = (e) => {
    e.preventDefault();
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = async (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      const storageRef = getStorage(app);
      const imageRef = ref(storageRef, `images/${image.name}`);
      const uploadTask = uploadBytesResumable(imageRef, image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");

              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setFormData((prevFormData) => ({
              ...prevFormData,
              image: downloadURL,
            }));
          });
        }
      );
    }
  };
  return (
    <Form onSubmit={handleAddWork}>
      <h2>Add work</h2>
      <Form.Control
        className="mb-2"
        type="text"
        name="title"
        value={formData.title}
        onChange={handleInputChange}
        placeholder="Please enter title..."
        required
      />
      <Form.Control
        className="mb-2"
        type="des"
        name="description"
        value={formData.description}
        placeholder="Please enter description..."
        required
        onChange={handleInputChange}
      />
      <Form.Control
        className="mb-2"
        type="file"
        required
        onChange={handleImageChange}
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default CreateWork;
