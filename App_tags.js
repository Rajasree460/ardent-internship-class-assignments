import React from 'react';
//import './App.css';


const img="myimg.jpeg";

function App() {
  return (
    <div className="App">
    <h1>heading tag</h1>

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
    </table>
    </div>
  );
}


export default App;

