import React from "react";

const Blogs = () => {
  return (
    <div className="container fs-4">
      <div className="mt-5">
        <h2 className="text-center">
          What is the difference between javascript and nodejs ?
        </h2>
        <div className="d-flex justify-content-center mt-4 mb-5">
          <h2 className="me-5 bg-info text-white rounded px-5">JS</h2>
          <h2 className="me-5 bg-info px-3 rounded text-white">NodeJs</h2>
        </div>
        <p>
          JavaScript VS Node.js boils down to the matter of a flexible and
          simple frontend programming language versus the framework that allows
          it to extend into the backend realm.
        </p>
        <hr />
        <p>
          JavaScript is a scripting language upon which most websites are based.
          It is often used in combination with HTML and CSS to render web pages,
          as JavaScript can be used to dynamically update HTML elements. It
          allows you to automatically refresh the page to update data, display
          information using cool visuals, and create interactive elements.
        </p>
        <hr />
        <p>
          Node.js is an environment that can run JavaScript code without a
          browser. It is built on Chrome’s V8 JavaScript engine. The Node.js
          environment can be run on OS X, Windows, and Linux. It also includes a
          multitude of JavaScript libraries, which allow developers to leverage
          open source components and tools to get their applications built
          faster.
        </p>
      </div>

      <div className="mt-5">
        <h2 className="text-center">
          What is the differences between sql and nosql databases?
        </h2>
        <div className="d-flex justify-content-center mt-4">
          <h2 className="me-5 bg-info text-white rounded px-5">SQL</h2>
          <h2 className="me-5 bg-info px-3 rounded text-white">NOSQL</h2>
        </div>
        <p className="mt-5">
          Here is the some of the key differences between SQL and NoSQL
          databases.
        </p>
        <hr />
        <p>
          SQL or the Structured Query Language is the most common and popular
          programming language for the relational database management system. It
          is a language designed to extract, store, insert, delete, update and
          manage data for structured data and strategic analysis.
        </p>
      </div>
      <div>
        <h2>Features of SQL :</h2>
        <ul>
          <li>Provide High-Performance Capabilities</li>
          <li>Handle Large Transactions with efficiency</li>
          <li>SQL is easy to learn and manage</li>
          <li>Open Source Programming Language</li>
          <li>
            Supports Data Definition Language and Data Manipulation Language to
            query the databases
          </li>
          <li> Suitable for every type of organization – large or small.</li>
        </ul>
        <hr />
        <p>
          NoSQL database provides a mechanism for storage and retrieval of data
          that is modelled other than tabular form. It was introduced by Carl
          Stroz in the year 1998 called a Non-relational database. Now, it
          stands for Not only SQL. It is not limited to storing data in tables,
          instead, enables the big data to be stored in the structured,
          unstructured, semi-structured or polymorphic form.
        </p>
      </div>
      <div>
        <h2>Features of NoSQL :</h2>
        <ul>
          <li>NoSQL has higher scalability than other management systems</li>
          <li>
            NoSQL allows the distribution of data on more than just one device.
          </li>
          <li>
            With NoSQL Database, you do not require specialized or complex
            hardware or storage solutions.
          </li>
          <li>Does not require data normalization</li>
          <li>Simple API for easy user interfaces</li>
          <li>Can store unstructured, semi-structured, or structured data.</li>
        </ul>
      </div>
      <div className="mt-5 mb-5">
        <h2>What is the purpose of JWT and how does it work?</h2>
        <h2 className="bg-info text-center mt-4 text-white">JWT</h2>
        <p>
          JSON Web Token (JWT) is an open standard for securely transmitting
          information between parties as JSON object.
        </p>
        <hr />
        <p>
          The purpose of using JWT is not to hide data but to ensure the
          authenticity of the data. JWT is signed and encoded, not encrypted.
          JWT is a token based stateless authentication mechanism. Since it is a
          client-side based stateless session, server doesn’t have to completely
          rely on a datastore(database) to save session information
        </p>
      </div>
    </div>
  );
};

export default Blogs;
