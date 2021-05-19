import React from "react";
import "../styles/services.css";
function Services() {
  const Person = ({ icon, name, job, children }) => {
    const faclass = "fa fa-${icon}";
    return (
      <article className="person">
        <i className={faclass} />
        <h4>{name}</h4>
        <h4>{job}</h4>
        {children}
      </article>
    );
  };

  const PersonList = () => {
    return (
      <section className="person-list">
        <Person icon="github" name="Avishka" job="engineer" />
        <Person icon="facebook" name="abc" job="engineer">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
          </p>
        </Person>
        <Person icon="linkedin" name="def" job="engineer" />
      </section>
    );
  };

  return <PersonList />;
}
export default Services;
