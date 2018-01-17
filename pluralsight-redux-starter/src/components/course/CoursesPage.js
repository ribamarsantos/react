import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';


class CoursesPage extends React.Component {
  constructor ( props, context){
    super(props, context);

  }

  is.props.actions.createCourse(this.state.course);
  }
  courseRow(course, index){
    return <div key={index}> {course.title}</div>;
  }
  render () {
    return (
      <div>
        <h1> Courses</h1>
          {this.props.courses.map(this.courseRow)}

      </div>
    );
  }
}
function mapStateToProps(state, ownProps){
  return{
    courses: state.courses
  };
}
function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(courseActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
