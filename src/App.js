import './App.css';
import skills from "./skills";

//change here to your name.
const yourName = "Takuto Yoshikai";

function App() {
  return (
    <div className="App">
      <h2 className="title">{ yourName }'s experiences</h2>
      <div className="skills">
        <table className="skill-table">
          { skills.map((skill) => {
              return (
                <tr>
                  <td>{ skill.name }</td>
                  <td>{ skill.diff() }</td>
                </tr>
              );
            })
          }
        </table>
      </div>
    </div>
  );
}

export default App;
