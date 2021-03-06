import { combineReducers } from "redux";
import exercisesIndex from "./ExercisesIndexReducer";
import exercise from "./ExerciseItemReducer";
import showExercise from "./ShowExerciseReducer";
import logId from "./ShowLogReducer";
import newExercise from "./NewExerciseReducer";
import newLog from "./NewLogReducer";
import logIn from "./LogInReducer";
import showProfile from "./ShowProfileReducer";
import signUp from "./SignUpReducer";

export default combineReducers({
  exercisesIndex,
  exercise,
  showExercise,
  logId,
  newExercise,
  newLog,
  logIn,
  showProfile,
  signUp
});
