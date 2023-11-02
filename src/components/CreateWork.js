import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { app } from "../config/firebase";
import {
  getStorage,
  ref as refStorage,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { getDatabase, ref as databaseRef, set } from "firebase/database";
import { nanoid } from "nanoid";
function CreateWork() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    image: "",
    yearCreate: "",
    purpose: "",
  });
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const handleAddWork = async (e) => {
    e.preventDefault();
    const db = getDatabase(app);
    await set(databaseRef(db, "works/" + nanoid(10)), formData);
    setFormData({
      title: "",
    description: "",
    content: "",
    image: "",
    yearCreate: "",
    purpose: "",
    });
    setEditorState(EditorState.createEmpty())
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
      const imageRef = refStorage(storageRef, `images/${image.name}`);
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
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    setFormData((prevFormData) => ({
      ...prevFormData,
      content: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    }));
  };
  console.log(formData);
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
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={onEditorStateChange}
        placeholder="Content"
      />
      <Form.Select className="my-2" name="yearCreate" onChange={handleInputChange}>
        <option>Year Create</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </Form.Select>

      <Form.Select className="my-2" name="purpose" onChange={handleInputChange}>
        <option>Purpose</option>
        <option value="Front end developer">Front end developer</option>
        <option value="Back end developer">Back end developer</option>
        <option value="Full stack developer">Full stack developer</option>
      </Form.Select>

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
