import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  services,
  achievements,
  certificates,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Work Timline</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">services</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12">
            <h3 className="color_sec py-4 text-center">🏆 Achievements</h3>
            <hr className="t_border my-4 mx-auto" style={{width: '100px'}} />
          </Col>
        </Row>
        <Row className="sec_sp">
          {achievements.map((data, i) => {
            return (
              <Col lg="6" md="6" sm="12" key={i} className="mb-4">
                <div className="achievement-card h-100">
                  <div className="achievement-card-body">
                    <div className="achievement-icon-wrapper">
                      <span className="achievement-icon">{data.icon}</span>
                    </div>
                    <h5 className="achievement-card-title">{data.title}</h5>
                    <span className="achievement-year">{data.year}</span>
                    <p className="achievement-card-desc">{data.description}</p>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
        <Row className="sec_sp">
          <Col lg="12">
            <h3 className="color_sec py-4 text-center">📜 Certificates</h3>
            <hr className="t_border my-4 mx-auto" style={{width: '100px'}} />
          </Col>
        </Row>
        <Row className="sec_sp">
          {certificates.map((data, i) => {
            return (
              <Col lg="4" md="6" sm="12" key={i} className="mb-4">
                <div className="certificate-card h-100">
                  <div className="certificate-card-body">
                    <div className="certificate-header">
                      <h5 className="certificate-card-title">{data.title}</h5>
                      <span className="certificate-date">{data.date}</span>
                    </div>
                    <p className="certificate-issuer">{data.issuer}</p>
                    <p className="certificate-card-desc">{data.description}</p>
                    <div className="certificate-footer">
                      {data.link !== "#" ? (
                        <a href={data.link} target="_blank" rel="noopener noreferrer" className="certificate-btn">
                          View Certificate
                        </a>
                      ) : (
                        <span className="certificate-btn disabled">Certificate Pending</span>
                      )}
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </HelmetProvider>
  );
};
