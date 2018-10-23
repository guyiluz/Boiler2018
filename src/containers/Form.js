import React, { Component } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
export default class FormC extends Component {
constructor(props){
super(props)

this.state={
  name:"",
  a:""


}


}

 HandleIput=(e)=>this.setState({[e.target.name]:e.target.value})

  render() {
const {name,a} = this.state

    return (
      <div>
         <Form onChange ={this.HandleIput}>
    <Form.Field>
      <label>First Name</label>
      <input  name={"name"} value={name}  placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input name={"a"} value={a}   placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
      </div>
    )
  }
}
