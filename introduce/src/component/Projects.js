function Projects() {
  return (
    <div className="project">
      <div className="project_title">
        <h1>Projects</h1>
        <hr />
      </div>
      <div className="project_container">
        <table>
          <thead>
            <th>Project_Name</th>
            <th>Skill stack</th>
            <th>Period</th>
            <th>People</th>
          </thead>
          <tbody>
            <tr
              name="react_board"
              onClick={(e) => {
                console.log(e.target.parentNode);
              }}
            >
              <td>React_board</td>
              <td>
                <div>Front : React.js</div>
                <div>Back : Express.js</div>
                <div>DB : MongoDB</div>
              </td>
              <td>2.20 ~ 3.02</td>
              <td>Me only</td>
            </tr>
            <tr name="react_board">
              <td>CloneCoding 텀블벅</td>
              <td>
                <div>Front : React.js</div>
                <div>Back : Spring</div>
                <div>DB : MySQL</div>
              </td>
              <td>12.04 ~ 12.22</td>
              <td>Team(5 people)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Projects;
