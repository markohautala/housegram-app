import React from 'react';

function Upload() {
  return (
    <div className="container mt-5">
      <div className="card p-4" style={{ borderRadius: '10px' }}>
        <form>
          <div className="row">
            <div className="col-12 col-md-4 d-flex flex-column align-items-center mb-4 mb-md-0">
              <div
                className="d-flex justify-content-center align-items-center"
                style={{
                  width: '100%',
                  height: '200px',
                  border: '2px dashed #ccc',
                  borderRadius: '10px',
                  backgroundColor: '#f8f9fa',
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '48px', color: '#6c757d' }}>
                  add_photo_alternate
                </span>
              </div>
              <p className="mt-2 text-center" style={{ color: '#6c757d' }}>Click or tap to upload image of dream house</p>
            </div>

            <div className="col-12 col-md-8">
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="Enter a title"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  rows="3"
                  placeholder="Write a description"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-dark">
                Add Housepost
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Upload;
