import React, { useState } from 'react';
import { Form, Button, Image, Container, Row, Col } from 'react-bootstrap';

function Upload() {
  const [postData, setPostData] = useState({
    title: '',
    description: '',
    image: '',
  });

  const { title, description, image } = postData;

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Revoke the previous object URL to free up memory
      if (image) {
        URL.revokeObjectURL(image);
      }

      // Create a new object URL and update the state
      const newImageURL = URL.createObjectURL(file);
      setPostData({
        ...postData,
        image: newImageURL,
      });
    }
  };

  const handleRemoveImage = () => {
    if (image) {
      URL.revokeObjectURL(image);
    }
    setPostData({
      ...postData,
      image: '',
    });

    // Reset the file input value to allow re-uploading of the same file
    const fileInput = document.getElementById('image-upload');
    if (fileInput) {
      fileInput.value = '';
    }
  };

  const handleImageClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    document.getElementById('image-upload').click();
  };

  return (
    <Container className="mt-5">
      <div className="card p-4" style={{ borderRadius: '10px' }}>
        <Form>
          <Row>
            <Col xs={12} md={4} className="d-flex flex-column align-items-center mb-4 mb-md-0">
              <Form.Group className="text-center">
                {image ? (
                  <>
                    <figure onClick={handleImageClick} style={{ cursor: 'pointer' }}>
                      <Image
                        src={image}
                        rounded
                        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                      />
                    </figure>
                    <div className="d-flex flex-column align-items-center">
                      <Button
                        variant="outline-primary"
                        className="mt-2"
                        onClick={handleImageClick}
                      >
                        Change the image
                      </Button>
                      <Button
                        variant="outline-danger"
                        className="mt-2"
                        onClick={handleRemoveImage}
                      >
                        Remove Image
                      </Button>
                    </div>
                  </>
                ) : (
                  <Form.Label
                    className="d-flex flex-column align-items-center"
                    htmlFor="image-upload"
                    style={{
                      width: '100%',
                      height: '200px',
                      border: '2px dashed #ccc',
                      borderRadius: '10px',
                      backgroundColor: '#f8f9fa',
                      justifyContent: 'center',
                      display: 'flex',
                      cursor: 'pointer'
                    }}
                    onClick={handleImageClick}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '48px', color: '#6c757d' }}>
                      add_photo_alternate
                    </span>
                    <p className="mt-2 text-center" style={{ color: '#6c757d' }}>Click or tap to upload image of dream house</p>
                  </Form.Label>
                )}
                <Form.Control
                  type="file"
                  id="image-upload"
                  accept="image/*"
                  onChange={handleChangeImage}
                  style={{ display: 'none' }}
                />
              </Form.Group>
            </Col>

            <Col xs={12} md={8}>
              <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={title}
                  onChange={handleChange}
                  placeholder="Enter a title"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="description"
                  value={description}
                  onChange={handleChange}
                  placeholder="Write a description"
                />
              </Form.Group>

              <Button variant="dark" type="submit">
                Add Housepost
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </Container>
  );
}

export default Upload;
