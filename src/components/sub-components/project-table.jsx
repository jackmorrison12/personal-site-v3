import React, {Component} from "react";

class ProjectTable extends Component {

    render() {

        return(
            
            <div className="project-page-table">
                <table class="project-page-table-desktop">
                    <tr>
                        <th>Week</th>
                        <th>Teacher Slides</th>
                        <th>Student Slides</th>
                        <th>Worksheet</th>
                        <th>Worksheet Answers</th>
                        <th>Jupyter Notebook</th>
                        <th>Leaderboard</th>
                        <th>Kahoot</th>
                        <th>GitHub</th>
                    </tr>
                    {this.props.data.python.map((item, i) => {
                        return(
                            <tr>
                                <td className="project-page-table-header">{item.name}</td>
                                <td><a href ={item.teacher_slides}>Teacher Slides {i+1}</a></td>
                                <td><a href ={item.student_slides}>Student Slides {i+1}</a></td>
                                <td><a href ={item.worksheet}>Worksheet {i+1}</a></td>
                                <td><a href ={item.answers}>Worksheet Answers {i+1}</a></td>
                                {item.notebook ? <td><a href ={item.notebook}>Jupyter Notebook {i+1}</a></td> : <td class="project-page-table-empty"></td>}
                                {item.leaderboard ? <td><a href ={item.leaderboard}>Leaderboard {i+1}</a></td> : <td class="project-page-table-empty"></td>}
                                {item.kahoot ? <td><a href ={item.kahoot}>Kahoot {i+1}</a></td> : <td class="project-page-table-empty"></td>}
                                <td><a href ={item.github} className="icon"><i class="fa fa-github fa-2x icon-3d-10 icon-3d-dark "></i></a></td>
                            </tr>
                        );
                    })}

                </table>
                <div class="project-page-table-mobile">
                    {this.props.data.python.map((item, i) => {
                        return(
                            <>
                                <h4>Week {i+1} - {item.name}</h4>
                                <p><a href ={item.teacher_slides}>Teacher Slides</a></p>
                                <p><a href ={item.student_slides}>Student Slides</a></p>
                                <p><a href ={item.worksheet}>Worksheet</a></p>
                                <p><a href ={item.answers}>Worksheet Answers</a></p>
                                {item.notebook ? <><p><a href ={item.notebook}>Jupyter Notebook</a></p></> : ""}
                                {item.leaderboard ? <><p><a href ={item.leaderboard}>Leaderboard</a></p></> : ""}
                                {item.kahoot ? <><p><a href ={item.kahoot}>Kahoot</a></p></> : ""}
                                <p></p><a href ={item.github} className="icon"><i class="fa fa-github fa-2x icon-3d-10 icon-3d-dark project-page-table-mobile-icon"></i></a>    
                            </>                                   
                            );
                    })}

                </div>
            </div>
        );
    }

}

export default ProjectTable;