import React from 'react';
//import './App.css';


//const img="myimg.jpeg";

function App() {
  return (
    <div className="App">
    {/* <h1>heading tag</h1>

     <p>paragraph tag</p>

     <span>
     span <span>tag</span>
     </span>

     <ol>
     <li>list tag</li>
     </ol>

     <ol type="a">
     <li>list tag</li>
     </ol>

     <ul>
     <li>list tag</li>
     </ul>

     <ul type="square">
     <li>list tag</li>
     </ul>

    <img src={img} alt={img} width={'200px'} height={'200px'} />
    
    <table>
      <thead>
        <tr>
          <th>sno</th>
          <th>name</th>
          <th>father name</th>
          <th>mother name</th>
          <th>phn no</th>
          <th>Email id</th>
          <th>roll no</th>
          <th>status</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>abc</td>
          <td>xyz</td>
          <tf>9051485696</tf>
          <td>abc@gmail.com</td>
          <td>cse214002</td>
          <td>active</td>
          <td>
            <button>edit</button>
            <button>edit</button>
          </td>
        </tr>

        <tr>
          <td>2</td>
          <td>abc</td>
          <td>xyt</td>
          <tf>9051485600</tf>
          <td>efg@gmail.com</td>
          <td>cse214003</td>
          <td>active</td>
          <td>
            <button>edit</button>
            <button>edit</button>
          </td>
        </tr>
      
        <tr>
          <td>3</td>
          <td>apc</td>
          <td>xyz</td>
          <tf>9051485900</tf>
          <td>ejg@gmail.com</td>
          <td>cse214013</td>
          <td>active</td>
          <td>
            <button>edit</button>
            <button>edit</button>
          </td>
        </tr>
      
        <tr>
          <td>4</td>
          <td>abc</td>
          <td>xoz</td>
          <tf>9051425600</tf>
          <td>efp@gmail.com</td>
          <td>cse214043</td>
          <td>not active</td>
          <td>
            <button>edit</button>
            <button>edit</button>
          </td>
        </tr>
      
        <tr>
          <td>5</td>
          <td>abc</td>
          <td>oyz</td>
          <tf>9081485600</tf>
          <td>dfg@gmail.com</td>
          <td>cse214073</td>
          <td>active</td>
          <td>
            <button>edit</button>
            <button>edit</button>
          </td>
        </tr>
      
        <tr>
          <td>6</td>
          <td>abi</td>
          <td>xyz</td>
          <tf>9001485600</tf>
          <td>ewg@gmail.com</td>
          <td>cse224003</td>
          <td>active</td>
          <td>
            <button>edit</button>
            <button>edit</button>
          </td>
        </tr>
      
        <tr>
          <td>7</td>
          <td>abc</td>
          <td>xyz</td>
          <tf>9051485600</tf>
          <td>efg@gmail.com</td>
          <td>cse214043</td>
          <td>active</td>
          <td>
            <button>edit</button>
            <button>edit</button>
          </td>
          </tr>
      
        <tr>
          <td>8</td>
          <td>abc</td>
          <td>xyz</td>
          <tf>9059485600</tf>
          <td>efg@gmail.com</td>
          <td>cse214003</td>
          <td>not active</td>
          <td>
            <button>edit</button>
            <button>edit</button>
          </td>
        </tr>
      
        <tr>
          <td>9</td>
          <td>abc</td>
          <td>xyz</td>
          <tf>8051485600</tf>
          <td>efg@gmail.com</td>
          <td>cse215003</td>
          <td>active</td>
          <td>
            <button>edit</button>
            <button>edit</button>
          </td>
        </tr>
      
        <tr>
          <td>10</td>
          <td>ahc</td>
          <td>xyz</td>
          <tf>9051465600</tf>
          <td>eug@gmail.com</td>
          <td>cse214005</td>
          <td>not active</td>
          <td>
            <button>edit</button>
            <button>edit</button>
          </td>
        </tr>
      </tbody>
      </table> */}


      <form>
      <h1>student information form</h1>
      <h2>Personal details</h2>
       <label>Name</label>
       <input type="text" name="name" placeholder="enter name"></input><br></br>
       <label>Father Name</label>
       <input type="text" name="father name" placeholder="enter father name"></input><br></br>
       <label>Mother Name</label>
       <input type="text" name="mother name" placeholder="enter mother name"></input><br></br>
       <label>Date of birth</label>
       <input type="date" name="dob"></input><br></br>
       <label>Mobile no.</label>
       <input type="number" name="mobile" placeholder="enter mobile no"></input><br></br>
       <label>Email Id</label>
       <input type="email" name="email" placeholder="enter email id"></input><br></br>
       <lable>Image</lable>
       <input type="file" name="image" accept=".jpg"></input><br></br>

       <h2>Address</h2>
       <label>Village</label>
       <input type="text" name="vill" placeholder="enter village"></input><br></br>
       <label>Postoffice</label>
       <input type="text" name="post" placeholder="enter postoffice"></input><br></br>
       <label>Police St.</label>
       <input type="text" name="police" placeholder="enter police station"></input><br></br>
       <label>State</label>
       <select name="state">
       <option disabled selected value={''}>--Select State--</option>
       <option value={'West Bengal'}>West Bengal</option>
      <option value={'Kerala'}>Kerala</option>
      <option value={'Madyhapradesh'}>Madyhapradesh</option>
      <option value={'Gujrat'}>gujrat</option>
      <option value={'Other'}>Other</option>
        </select><br></br>
        <label>pin Code</label>
        <input type="number" name="pin" placeholder="enter pincode"></input><br></br>
       

       {/* <label>Gender</label>
       <input type="radio" name="gender" value={'male'}></input>Male
       <input type="radio" name="gender" value={'female'}></input>Female
       <input type="radio" name="gender" value={'other'}></input>Other <br></br>
      
      
       */}


      {/* <lable>Message</lable>
      <textarea name="message"></textarea><br></br>

      <label>Password</label>
      <input type="password" name="pass"></input><br></br> */}

      <h2>Admission</h2>
      <label>Class</label>
       <select name="class">
       <option disabled selected value={''}>--Select class--</option>
       <option value={'XII'}>XII</option>
      <option value={'XI'}>XI</option>
      <option value={'X'}>X</option>
      <option value={'Other'}>Other</option>
        </select><br></br>

        <label>Section</label>
       <select name="section">
       <option disabled selected value={''}>--Select section--</option>
       <option value={'A'}>A</option>
      <option value={'B'}>B</option>
      <option value={'C'}>C</option>
        </select><br></br>

        <lable>CLC</lable>
       <input type="file" name="clc" accept=".pdf"></input><br></br>
    
       <input type="submit" name="ok" value={'Submit'}></input>
      </form>
    </div>
  );
}


export default App;

