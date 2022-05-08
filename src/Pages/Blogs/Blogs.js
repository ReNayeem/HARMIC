import React from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';
import './Blogs.css'


const Blogs = () => {
    return (
        <div className='mb-5'>
            <PageTitle title="Blogs"></PageTitle>
            <div className='mt-5 mb-4 text-center'>
                <h5 className='item-h5'>Welcome to</h5>
                <h1 className='item-h1'>the blogs page</h1>
            </div>
            <div id="question-answer" className="text-center blogs-page container">
                <hr />
                <h4 className='mb-3 mt-4'>Difference between JavaScript and Node.js</h4>
                <center>
                    <table>
                        <tr>
                            <th className='text-center'>JavaScript</th>
                            <th className='text-center'>Node.js</th>
                        </tr>
                        <tr>
                            <td>1. JavaScript is a programming language that runs in any web browser that has a suitable browser engine.</td>
                            <td>1. Node.js is an interpreter and a runtime environment designed for JavaScript. Node.js comes with some in-built modules that enhance the features of JavaScript programming.</td>
                        </tr>
                        <tr>
                            <td>2. Outside of Node.js JavaScript is used on the client-side of a web application, especially for developing dynamic features.</td>
                            <td>2. Node.js can be used on any operating system to develop applications that interact with system hardware, particularly for web backends.</td>
                        </tr>
                        <tr>
                            <td>3. JavaScript can run on different browser engines like V8 on Google Chrome, Spider Monkey on Firefox, and JavaScript Core on Safari.</td>
                            <td>3. Node.js only runs on the V8 engine used by Chrome.</td>
                        </tr>
                    </table>
                </center>
                <hr />
                <h4 className='mb-3'>What is the purpose of JWT and how does it work?</h4>
                <p>JWT is used as a protective way to authenticate users and share information. The general remittance uses a private or secret key to log the JWT. The receiver of the JWT verification for the token has not changed since it was login by the user.</p>
                <p>JWT are worked by using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
                <hr />
                <h4 className='mb-3'>Differences between SQL and NoSQL databases.</h4>
                <center>
                    <table>
                        <tr>
                            <th className='text-center'>SQL</th>
                            <th className='text-center'>NoSQL</th>
                        </tr>
                        <tr>
                            <td>1. SQL databases are table based databases.</td>
                            <td>1. NoSQL databases can be document based, key-value pairs, graph databases.</td>
                        </tr>
                        <tr>
                            <td>2. SQL databases have fixed databases.</td>
                            <td>2. NoSQL databases can be document based, key-value pairs, graph databases.</td>
                        </tr>
                        <tr>
                            <td>3. Vertically Scalable.</td>
                            <td>3. Horizontal.</td>
                        </tr>
                        <tr>
                            <td>4. ACID Transactions Supported.</td>
                            <td>4. Follows CAP.</td>
                        </tr>
                        <tr>
                            <td>5. Joins required.</td>
                            <td>5. Joins not required.</td>
                        </tr>
                    </table>
                </center>
            </div>
        </div>
    );
};

export default Blogs;