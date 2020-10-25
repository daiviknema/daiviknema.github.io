import React from "react";
import styled from "styled-components";

const Achievements = () => {
  const Emphasis = styled.span`
    font-weight: 600;
  `;
  return (
    <ul style={{ paddingLeft: "12px", marginTop: "8px" }}>
      <li>
        <Emphasis>
          Teaching Assistant, Data Structures and Algorithms course
        </Emphasis>{" "}
        at BITS Pilani: Co-supervised two lab sections and contributed to design
        of lab assignments. DSA is a compulsory course for all Computer Science
        sophomores at BITS, Pilani.{" "}
        <Emphasis>
          Teaching Assistantship positions at BITS are competitive and awarded
          only to students who have performed exceptionally well in previous
          iterations of the course
        </Emphasis>
      </li>
      <li>
        <Emphasis>
          ACM-ICPC 2015, ranked 85<sup>th</sup> out of over 1000 participating
          teams:
        </Emphasis>{" "}
        Qualified for Chennai on-site regional round
      </li>
      <li>
        Final Shortlist for{" "}
        <Emphasis>
          Aditya Birla Scholarship: only students that secure a rank within the
          top 20 in various all-India engineering entrance examinations are
          invited to apply
        </Emphasis>
      </li>
      <li>
        <Emphasis>
          JEE Advanced 2014, All India Rank 2605 (Percentile Rank: 99.8):
        </Emphasis>{" "}
        Approximately 1,290,000 students appeared for the JEE in 2014.
      </li>
      <li>
        <Emphasis>
          BITSAT 2014, Scored 416 out of a maximum possible 450 (Percentile Rank
          >= 99.83):
        </Emphasis>{" "}
        Out of approximately 150,000 students that attempt the exam every year,
        only 256 scored higher than 400 in 2014
      </li>
      <li>
        <Emphasis>Regional Mathematics Olympiad 2012</Emphasis>, Greater Mumbai
        Division: Qualified for Indian National Mathematics Olympiad. Attended
        INMO Training Camp at Homi Bhabha Center for Science Education, Mumbai
      </li>
      <li>
        Selected for{" "}
        <Emphasis>
          Kishore Vaigyanik Protsahan Yojana (KVPY) Mentorship Scheme, 2012: All
          India Rank: 366.
        </Emphasis>{" "}
        Invited to attend the National Science Camp at IISc Bangalore.
      </li>
      <li>
        Qualified{" "}
        <Emphasis>
          National Standard Examination in Junior Science (NSEJS), 2012
        </Emphasis>
        : Selected to appear for Indian National Junior Science Olympiad
        (INJSO).{" "}
        <Emphasis>Only 300 students all across India are selected.</Emphasis>
      </li>
    </ul>
  );
};

export default Achievements;
