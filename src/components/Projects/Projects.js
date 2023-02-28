import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import nafis from "../../Assets/Projects/Nafis.png";
import atlasKavir from "../../Assets/Projects/AtlasKavir.png";
import aramesh from "../../Assets/Projects/Aramesh.png";
import backOffice from "../../Assets/Projects/Backoffice.png";
import CF from "../../Assets/Projects/CF.png";
import jimbo from "../../Assets/Projects/Jimbo.png";
import wallet from "../../Assets/Projects/Wallet(pwa-version).png";
import vote from "../../Assets/Projects/Vote.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={atlasKavir}
              isWebsite={true}
              title="Atlas Kavir"
              description="Designed and Developed the website of AtlasKavir using HTML, CSS, Material UI, and ReactJS, specializes in agricultural products."
              link="https://atlaskavir.ir/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nafis}
              isWebsite={true}
              title="Nafis"
              description="Developed the website of Nafis using HTML, Tailwind css, Next.js and Typescript. which provides fabric selling."
              link="https://nafisfabric.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={backOffice}
              isWebsite={true}
              title="Kuknos BackOffice"
              description="Designed and Developed Kuknos management panel (BackOffice) using HTML, CSS, BootStrap, and ReactJS."
              link="https://backoffice.kuknos.ir/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CF}
              isWebsite={true}
              title="Kuknos Crowdfunding (CF)"
              description="Developed Crowdfunding platform (CF) based on the Stellar Network using HTML, CSS, Ant design, ReactJS."
              link="https://cf.kuknos.ir/landing/home/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aramesh}
              isWebsite={true}
              title="Aramesh"
              description="Developed online election system (Aramesh) based on the Stellar Network using HTML, CSS, Ant design, and ReactJS."
              link="https://aramesh.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vote}
              isWebsite={true}
              title="Kuknos Survey System"
              description="Designed and Developed Online Survey system based on the Stellar Network using HTML, CSS, Ant design, and ReactJS."
              link="https://tceo-vote.kuknos.ir/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wallet}
              isWebsite={false}
              title="Kuknos Wallet (PWA Version)"
              description="Developed Kuknos Wallet (PWA version) based on the Stellar Network using HTML, CSS, Ant design, and ReactJS."
              link="https://m.kuknos.ir/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jimbo}
              isWebsite={false}
              title="Jimbo Market"
              description="Developed an Online Market named JimboMarket using HTML, CSS, Material UI, ReactJS."
              link="https://jimbomarket.ir"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
