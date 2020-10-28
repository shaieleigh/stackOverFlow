import React, { useState, useEffect} from 'react';
import { fetchQuestions } from '../store/question';
// import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import QuestionLi from '../components/QuestionLi';
import NavBar from '../components/NavBar';
import { Grid } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import './Questions.css'
import { NavLink } from 'react-router-dom'
import PublicIcon from '@material-ui/icons/Public';

const theme = createMuiTheme({
    overrides: {
        MuiGrid: {
            container: {
                width: "60%"
            }
        }
    }
})





export default function Questions() {
    const dispatch = useDispatch();
    const [filters, setFilters] = useState('date');
    useEffect(() => {
        dispatch(fetchQuestions(filters));
      }, [dispatch]);
      const questions = useSelector(state => state.questionReducer);
      let count = 0;
      const countfunc = () => {
          Object.values(questions).forEach(question => {
            count ++
          })
          return count;
        }

      const handleFilter = (e) => {
        if (e.target.id === "11") {
            setFilters('date')
            document.getElementById("11").classList.add("selected")
            document.getElementById("22").classList.remove("selected")
            dispatch(fetchQuestions("date"))
        } else if (e.target.id === "22") {
            document.getElementById("22").classList.add("selected")
            document.getElementById("11").classList.remove("selected")
            dispatch(fetchQuestions("votes"))
        }

      }

    return (
        <>
        <NavBar/>
        <div className="left">
            <div className="yellowsidebar">
                <div className = "blog">
                    <div className="blogHeader">
                        The Overflow Blog
                    </div>
                    <span className="yellowli"><svg aria-hidden="true" class="iconPencilSm" width="14" height="14" viewBox="0 0 14 14"><path d="M11.1 1.71l1.13 1.12c.2.2.2.51 0 .71L11.1 4.7 9.21 2.86l1.17-1.15c.2-.2.51-.2.71 0zM2 10.12l6.37-6.43 1.88 1.88L3.88 12H2v-1.88z"/></svg>Making the most of your ice cream</span>
                    <span className="yellowli"><svg aria-hidden="true" class="iconPencilSm" width="14" height="14" viewBox="0 0 14 14"><path d="M11.1 1.71l1.13 1.12c.2.2.2.51 0 .71L11.1 4.7 9.21 2.86l1.17-1.15c.2-.2.51-.2.71 0zM2 10.12l6.37-6.43 1.88 1.88L3.88 12H2v-1.88z"/></svg>Podcast 281: The story of cheetos</span>
                </div>
                <div className = "meta1">
                    <div className="meta1Header">
                    Featured on Meta
                    </div>
                    <span className="yellowli"><svg aria-hidden="true" class="iconPencilSm" width="14" height="14" viewBox="0 0 14 14"><path d="M11.1 1.71l1.13 1.12c.2.2.2.51 0 .71L11.1 4.7 9.21 2.86l1.17-1.15c.2-.2.51-.2.71 0zM2 10.12l6.37-6.43 1.88 1.88L3.88 12H2v-1.88z"/></svg>Are oreos really vegan?</span>
                </div>
                <div className = "hotmeta1">
                    <div className="hotmeta1Header">
                    Hot Meta Posts
                    </div>
                    <span className="yellowli"><span className="numside">11</span>How come Reese's are so good?</span>
                    <span className="yellowli"><span className="numside">45</span>Can I eat breakfast food for dinner?</span>
                    <span className="yellowli2"><span className="numside">22</span>What's happening to me?</span>
                </div>
            </div>
            <div className="jobsidebar">
                <div className="jobHeader">Looking for a job?</div>
                <span className="job-wrap-grid">
                    <img src="https://i.stack.imgur.com/vjaoL.png?s=32"></img>
                    <div className="jobinfo">
                        <span className="jobtitle">Chocolate Expert</span>
                        <span className="company">Care Choconuity</span>
                        <span className="location">No office location</span>
                        <span className="tagHolder">
                            <span className="tagstwo">CHOCOLATE</span>
                            <span className="tagstwo">YUM</span>
                        </span>
                    </div>
                </span>
                <span className="job-wrap-grid">
                    <img src="https://i.stack.imgur.com/RsT3S.png?s=32"></img>
                    <div className="jobinfo">
                        <span className="jobtitle">Junior Snacks and Fun Engineer</span>
                        <span className="company">JPMorgan Cheese Bank, N.A.</span>
                        <span className="location">Jersey City, NJ</span>
                        <span className="tagHolder">
                            <span className="tagstwo">Cheese</span>
                            <span className="tagstwo">Goldfish</span>
                        </span>
                    </div>
                </span>
                <span className="job-wrap-grid">
                    <img src="https://i.stack.imgur.com/i5fXO.png?s=32"></img>
                    <div className="jobinfo">
                        <span className="jobtitle">Senior Cookie Tester</span>
                        <span className="company">(Poly)Sweet Technologies, Inc</span>
                        <span className="location">San Diego, CA</span>
                        <span className="tagHolder">
                            <span className="tagstwo">Sugar</span>
                            <span className="tagstwo">Spice</span>
                        </span>
                    </div>
                </span>
            </div>

        </div>
        <div className="questioncolumn">
            <ThemeProvider theme={theme}>
            <Grid container align="center" direction="column" spacing={0} alignItems="stretch" className="qgrid">
                <Grid item className="header">
                    <div id="headergroup">
                      <span id="headertext"> All Questions
                        <span id="qcount">{countfunc() + " questions"}</span>
                      </span>

                      <span className="buttonGroup">
                        <button className="ask-button">
                            <NavLink className="ask-buttontext" to="/questions/ask">Ask A Question</NavLink>
                        </button>
                        <span className="filterspan">
                                <button id="11" className="filter1 selected" onClick={handleFilter}>Newest</button>
                                <button id="22" className="filter2" onClick={handleFilter}>Votes</button>
                        </span>
                      </span>


                    </div>

                </Grid>
                {Object.values(questions).map(question =>(
                    <Grid key={question.id} item className="qitem">
                        <QuestionLi key={question.id} question={question}/>
                    </Grid>
                ))}
            </Grid>
            </ThemeProvider>
        </div>
        <div id="nav">
                <span id="pub">
                    PUBLIC
                </span>
                <span id="stack">
                    <PublicIcon/>
                    <NavLink id="smallsnack" to="/questions">
                    <span id="smallsnack">
                        Snack Overflow
                    </span>
                    </NavLink>
                </span>
        </div>
        </>
    )
}
