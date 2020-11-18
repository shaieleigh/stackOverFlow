import React, { useEffect} from 'react';
import { fetchQuestion } from '../store/question';
import { fetchAnswers } from '../store/answer';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import QuestionDisplay from '../components/QuestionDisplay';
import AnswerDisplay from '../components/AnswerDisplay';
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Oreo from '../components/Oreo';
import './QuestionId.css'
import { Button } from '@material-ui/core';
import NavBar from '../components/NavBar';
import PublicIcon from '@material-ui/icons/Public';
import { NavLink } from 'react-router-dom'
import AnswerForm from './AnswerForm'


const colors = {
    text: 'white',
    background: '#0095FF',
}

const useStyles = makeStyles({
    root: {
      color: colors.text,
      width: "10%",
      height: "50%",
      backgroundColor: colors.background,
      "&:hover": {
        backgroundColor: colors.background
      }
    },
})

const theme = createMuiTheme({
    overrides: {
        MuiGrid: {
            container: {
                width: "60%"
            }
        },
        MuiButton: {
            label: {
              textTransform: "none",
              font: "13px Roboto",
              padding: "5px"
         },

        }


    }
})

export default function QuestionId() {
    const classes = useStyles()
    let { id } = useParams();
    console.log(id)
    const dispatch = useDispatch();
    useEffect(() => {
        debugger
        dispatch(fetchQuestion(id));
      }, [dispatch, id]);
      useEffect(() => {
        debugger
        dispatch(fetchAnswers(id));
      }, [dispatch, id]);
    const question = useSelector(state => state.questionReducer);
    const answers = useSelector(state => state.answer);

    const answerrender = () => {
        if (answers) {
            const list1 = []
            for (let i = 0; i < answers.length; i++) {
                list1.push(
                <Grid key={answers[i].id} item className="aitem2">
                    <AnswerDisplay key={answers[i].id} answer={answers[i]}/>
                </Grid>
                )
            }
            return list1;
        } else {
            return

        }

    }

    let count = 0;
    const countfunc = () => {
        if (answers) {
          Object.values(answers).forEach(answer => {
            count ++
          })
          if (count > 0) {
            return (<span id="acount">{count + " answers"}</span>);
          }
        }
        return
    }

    console.log(question)
      return (
        <>
            <NavBar/>
            <div className="left2">
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
            <div className="questioncolumn1">
            <ThemeProvider theme={theme}>
            <Grid container align="center" direction="column" spacing={0} alignItems="stretch" className="qgrid1">
                <Grid item className="header1">
                    <div id="headergroup1">
                    <span id="headertext1">{question.title}

                    </span>
                    <Button classes={classes}><NavLink id="linkz2" to="/questions/ask">Ask Question</NavLink></Button>


                    </div>

                </Grid>
                <Grid item className="qitem2">
                    <Oreo id="oreoadd"/>
                    <span id="report">Report this add</span>
                </Grid>
                <Grid key={question.id} item className="qitem1">
                    <QuestionDisplay key={question.id} question={question}/>
                </Grid>
                <Grid key={66} item className="aitem1">
                    {countfunc()}
                </Grid>
                {answerrender()}
                <Grid key={67} item className="aitem1">
                    <span id="acount">Your Answer</span>
                </Grid>
                <Grid key={68} item className="qitem1">
                    <AnswerForm questionId={question.id}/>
                </Grid>
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
