import "./App.css";
import Examle from "./components/Spring/examle";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";

function App() {
  const [phone, setPhone] = useState("");
  return (
    <div className="App">
      <PhoneInput
        // country={"us"}
        value={phone}
        masks={{ fr: "(...) ..-..-..", at: "(....) ...-...." }}
        onChange={(e) => setPhone(e.target.value)}
      />
      <div class="container">
        <h1>Sticky</h1>
        <table class="sticky-thc">
          <thead>
            <tr>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>First</td>
              <td>First</td>
              <td>First</td>
              <td>First</td>
              <td>First</td>
            </tr>
            <tr>
              <td>Second</td>
              <td>Second</td>
              <td>Second</td>
              <td>Second</td>
              <td>Second</td>
            </tr>
            <tr>
              <td>Third</td>
              <td>Third</td>
              <td>Third</td>
              <td>Third</td>
              <td>Third</td>
            </tr>
            <tr>
              <td>Fourth</td>
              <td>Fourth</td>
              <td>Fourth</td>
              <td>Fourth</td>
              <td>Fourth</td>
            </tr>
            <tr>
              <td>Fifth</td>
              <td>Fifth</td>
              <td>Fifth</td>
              <td>Fifth</td>
              <td>Fifth</td>
            </tr>
            <tr>
              <td>Sixth</td>
              <td>Sixth</td>
              <td>Sixth</td>
              <td>Sixth</td>
              <td>Sixth</td>
            </tr>
            <tr>
              <td>Seventh</td>
              <td>Seventh</td>
              <td>Seventh</td>
              <td>Seventh</td>
              <td>Seventh</td>
            </tr>
            <tr>
              <td>Eighth</td>
              <td>Eighth</td>
              <td>Eighth</td>
              <td>Eighth</td>
              <td>Eighth</td>
            </tr>
            <tr>
              <td>Ninth</td>
              <td>Ninth</td>
              <td>Ninth</td>
              <td>Ninth</td>
              <td>Ninth</td>
            </tr>
            <tr>
              <td>Tenth</td>
              <td>Tenth</td>
              <td>Tenth</td>
              <td>Tenth</td>
              <td>Tenth</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Examle />
    </div>
  );
}

export default App;
