import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function MediaCard() {
  return (
    <>
      <Card sx={{ margin: "auto", textAlign: "justify", width: "85%", backgroundColor: "azure", boxShadow: 5 }}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            fontFamily={"Kanit"}
          >
            <strong>Techinical Support and Consulting Manager</strong> at
            Sistema Info
            <Typography variant="body2" color="text" fontFamily={"Kanit"}>
              <strong>january 2019 - actual job</strong>
            </Typography>
          </Typography>
          <Typography variant="body2" color="text" fontFamily={"Kanit"}>
            As a dynamic team leader, I successfully managed and motivated two
            diverse teams, driving direct growth for a team of ten
            professionals. My role often involved direct interaction with
            clients and various users, handling challenging situations with ease
            and leading critical discussions in war rooms. Within our consulting
            team, I played a pivotal role in onboarding new customers, ensuring
            seamless adoption of our cutting-edge solutions. Working closely
            with the technical support team, I guaranteed our clients' continued
            satisfaction by providing comprehensive product assistance and
            leveraging all features to their advantage.
            <ul>
              <li>
                Spearheaded Grafana indicators, making possible data-driven
                decisions;
              </li>
              <li>
                Demonstrated Python expertise in Power BI dashboards, enhancing
                data analysis;
              </li>
              <li>
                Managed Technical Support & Consult teams, ensuring seamless
                collaboration;
              </li>
              <li>Exceeded KPIs, driving continuous improvement;</li>
              <li>
                Championed professional development through feedback sessions;
              </li>
              <li>
                Provided technical guidance in critical situations, enhancing
                customer satisfaction;
              </li>
              <li>
                Created and managed knowledge base, fostering continuous
                learning.
              </li>
            </ul>
            <strong>Used skills:</strong> Grafana · SQL · Microsoft Power BI ·
            Python · Management
          </Typography>
        </CardContent>
      </Card>
      <br />
      <Card sx={{ margin: "auto", textAlign: "justify", width: "85%", backgroundColor: "azure", boxShadow: 5 }}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            fontFamily={"Kanit"}
          >
            <strong>Techinical Support</strong> at Sistema Info
            <Typography variant="body2" color="text" fontFamily={"Kanit"}>
              <strong>december 2017 - january 2019</strong>
            </Typography>
          </Typography>
          <Typography variant="body2" color="text" fontFamily={"Kanit"}>
            Support Analyst with a key role in delivering exceptional service
            for a custom product at Latin America's largest transportation
            company, JSL S/A. Expert in swiftly identifying and resolving user
            issues through technical investigation, utilizing Oracle queries,
            REST request simulations, and application log analysis. Valuable
            assistance to QA team during sprint releases, performing unit tests
            for seamless product deployments. Thrives in fast-paced environments
            with a passion for problem-solving, ensuring top-notch support and
            optimal customer satisfaction.
            <ul>
              <li>
                Proficient in technical analysis of logs and API/web services
                data;
              </li>
              <li>
                Exceptional customer service through effective communication
                (telephone, email, tickets);
              </li>
              <li>
                Skilled in Oracle database consultation for efficient problem
                resolution;
              </li>
              <li>
                Adept at creating optimized queries for personalized reports;
              </li>
              <li>
                Proven ability to develop comprehensive technical articles for
                end-users;
              </li>
              <li>
                Collaborative team player, providing valuable insights during
                sprint tests with QA;
              </li>
              <li>
                In-depth knowledge of transport laws and electronic payment
                systems for freight.
              </li>
            </ul>
            <strong>Used skills:</strong> SQL · Oracle · API Rest · Technical Support · QA
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
