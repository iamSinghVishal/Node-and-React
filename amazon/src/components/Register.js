import React, {Component} from 'react';
import axios from 'axios';

export class RegisterComponent extends Component{
    constructor(){
        super();
        this.state={
            username:"",
            firstname:"",
            lastname:"",
            email:"",
            gender:"",
            agree:"",
            register:"",
            countryList:[],
            itemList:[]

        }
    }
    async componentDidMount(){
        //any external api calls go here
        /*fetch("https://restcountries.eu/rest/v2/all").then(result => {
            console.log(result);
            return result.json();
        }).catch(err => {
            console.log(err);
        }).then(finalResult=>{
            console.log(finalResult);
        })*/
        let countryList = await axios("https://restcountries.eu/rest/v2/all");
        let itemList = await axios("https://pixabay.com/api/?key=18266844-e650db8a9ea5559b5c3139f85&q=yellow+flowers&image_type=photo&pretty=true");
        console.log(countryList);
        this.setState({countryList:countryList.data});

        console.log(itemList);
        this.setState({itemList:itemList.data.hits});
    }
    bindDataToDropdown = ()=>{
        return this.state.countryList.map((item,index)=>{
            return <option value={item.alpha2Code}>{item.name}</option>
        })
    }
    bindData = ()=>{
        return this.state.itemList.map((item,index)=>{
            return <img src={item.previewURL} alt="Logo" />;
            });
    }
    handleInputChange=(e)=>{
        
        let currentState = this.state;

        if(e.target.name=='agree'){
            console.log(e.target.checked);
            currentState[e.target.name]= e.target.checked;
        }
        else{
            currentState[e.target.name]=e.target.value;
        }
        
        this.setState(currentState)
        console.log(this.state);
    }
    render(){
        return <div>
            <h1>Register</h1>
            <table>
            <tr><td><label>User Name  </label></td>
            <input type="text" placeholder="User Name" name="username" onChange={this.handleInputChange}/></tr><br/>
            <tr><td><label>First Name  </label></td>
            <input type="text" placeholder="First Name" name="firstname" onChange={this.handleInputChange}/></tr><br/>
            <tr><td><label>Last Name  </label></td>
            <input type="text" placeholder="Last Name" name="lastname" onChange={this.handleInputChange}/></tr><br/>
            <tr><td><label>Email ID  </label></td>
            <input type="email" placeholder="Email ID" name="email" onChange={this.handleInputChange}/></tr><br/>
        
            <tr><td><label>Age  </label></td>
            <input type="number" placeholder="Age" name="age" onChange={this.handleInputChange}/></tr><br/>
            <tr><td><label >Country List  </label></td>
            <select>{this.bindDataToDropdown()}</select></tr>

            <tr><td><label >Product List  </label></td>
             {this.bindData()}</tr>



            <tr><td><label>Gender  </label></td>
            <input type="radio" value="Male" name="gender" id="gender1" onChange={this.handleInputChange}/>
            <label for="gender1">Male  </label>
            <input type="radio" value="Female" name="gender" id="gender2" onChange={this.handleInputChange}/>
            <label for="gender2">Female  </label>
            <input type="radio" value="Others" name="gender" id="gender3" onChange={this.handleInputChange}/>
            <label for="gender3">Others</label></tr><br/>
            
            <input type="checkbox" value="Agree"  name="agree"  onChange={this.handleInputChange}/>
            <label > I agree to terms and conditions</label><br/><br/>
            <input type="button" value="Register" name="register" onChange={this.handleInputChange}/><br/>
            </table>

    
        </div>


    }
}

export default RegisterComponent;