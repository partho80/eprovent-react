import React from 'react'

function pagination() {
  return (
      <div>
          <div className="pagination-section section-padding-bottom spb-80" data-aos="fade-up">
          <div className="container">
              <nav aria-label="Page navigation example">
                  <ul className="pagination">
                      <li className="page-item"><a className="page-link" href="#"><i className="fas fa-arrow-left"></i></a>
                      </li>
                      <li className="page-item"><a className="page-link active" href="#">1</a></li>
                      <li className="page-item"><a className="page-link" href="#">2</a></li>
                      <li className="page-item"><a className="page-link" href="#">3</a></li>
                      <li className="page-item"><a className="page-link" href="#"><i className="fas fa-arrow-right"></i></a>
                      </li>
                  </ul>
              </nav>
          </div>
      </div>
    </div>
  )
}

export default pagination