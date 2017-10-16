import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field , reduxForm } from 'redux-form';
import { Try } from 'js-try';

// Actions
import { createCharacter } from '../actions/index';

// Validators
import { required , isNumber, isAbove, isBellow } from '../validator.js';

// Warning and Error css style
// Disclaimer, Should be pu properly in the corresponding sccs.
const errorStyle = {
    border: "none",
    fontWeight: 700,
    color: "#700",
}

const warningStyle = {
    border: "none",
    fontWeight: 700,
    color: "#700",
}

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
  }) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched &&
          ((error && <span style={errorStyle}>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
)

class CreateCharacter extends React.Component {
    onSubmit (values)  {
    this.props.createPost(values, (post) => {
      this.props.history.push('/');
      return post;
    });
  }

  render () {
    return (
      <div className="character">
      <form onSubmit={ this.handleSubmit }>
        <Field
          name="name"
          type="text"
          component={renderField}
          label="Name"
          validate={[required]}
        />
        <Field
          name="totalLifePoint"
          type="text"
          component={renderField}
          label="Life Point"
          validate={[required, isNumber, isAbove(0), isBellow(150)]}
        />
        <Field
          name="expPoint"
          type="text"
          component={renderField}
          label="Experience"
          validate={[required, isNumber, isAbove(0), isBellow(100)]}
        />
        <Field
          name="attackPoint"
          type="text"
          component={renderField}
          label="Attaque"
          validate={[required, isNumber, isAbove(0), isBellow(30)]}
        />
        <div className="fx-r-c-c">
          <button type="submit">Submit</button>
        </div>
      </form>
      </div>
    );
  }
}

// Catch error using Js_try, a Library to catch error like we do in Ruby.
// Decide to catch error appearing when the component is mount and the form have not been use yet.

function mapStateToProps(state) {
  console.log(state);
  return {
    values: state.try('form').try('character-form').try('values') || {}
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createCharacter }, dispatch);
}


export default reduxForm({
  form: 'character-form' // a unique identifier
})(CreateCharacter);
