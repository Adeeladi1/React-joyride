import React from 'react';
import array from './Header'
import Todoitem from './Todoitem';
// Maping.....?

// function App()
// {
//     const data= array.map(item => <Todoitem key={item.id} items={item}/>)
//     return(
//         <div>
//         <h3 style={{display:data? "flex": "none" }  } >{data}</h3>
        
//         </div>
//     )
// }

// export default App; 


// Event ...?

// class Increment extends React.Component{
//     constructor()
//     {
//         super()
//         this.state={
//             count:0
//         }

//         this.handleState = this.handleState.bind(this);
//     }

//     handleState()
//     {
//         this.setState(
//             (prevState)=> prevState.count++
//         )
//     }

//     render(){
//         return(
//             <div>
//             <h1>{this.state.count}</h1>
//             <button onClick={this.handleState}>change</button>
//             </div>
//         )
//     }
// }

// export default Increment;

// class Log extends React.Component{
//     constructor()
//     {
//         super()
//         this.state={
//             isLogin:false
//         }
//         this.CheckLogin =this.CheckLogin.bind(this)
//     }

//     CheckLogin()
//     {
//     this.setState(
//         prevState=> {
//             return{
//                 isLogin : !prevState.isLogin
//             }
//         })
//     }
//     render()
//     {
//         const add= this.state.isLogin ? "LogOut" :"Login"
//         const dis= this.state.isLogin ? "LogedOut" : "LogedIn"
//         return(
//             <>
//             <button onClick={this.CheckLogin}>{add}</button>
//             {dis}
//             </>
//         )
//     }
// }

// export default Log;

// class Api extends React.Component{
//     constructor()
//     {
//         super()
//         this.state={
//             loading: false,
//             status:{}
//         }

//         this.componentDidMount()
//         {
//             this.setState({loading:true})

//             fetch()
//             .then(response => response.json())
//             .then(
//                 data => {
//                     this.setState({loading:false ,status:data})
//                 }
//             )
//         }
//     }

//     render()
//     {
//         const text = this.state.loading? "Loading.." : this.state.status.name;
//         return(
            
//              <div>
//                  {text}
//              </div>
//         )
//     }
// }

// export default Api;

// class App extends React.Component{
//     constructor()
//     {
//         super()
//         this.state={
//            firstName:"",
//            lastName:"",
//            isFriendlly:false,
//            gender :"",
//            favcolor: "green"
//         }

//         this.hanleEvent= this.hanleEvent.bind(this);
//     }

//     hanleEvent(event)
//     {
//         const {name,value,type,checked} =event.target
//         type === 'checked' ? this.setState({[name]:checked}) : this.setState({[name]: value})
//     }

//     render()
//     {
//         return(
//             <form>
//             <input type="text" value={this.state.firstName} name="firstName" placeholder="firstName" onChange={this.hanleEvent}/>
//             <br/>
//             <input type="text" value={this.state.lastName} name="lastName" placeholder="lastName" onChange={this.hanleEvent}/>
//             <textarea 
//             value={"Default value"} onChange={this.hanleEvent}
//             />
//             <br />

//             <label>
//                 <input type="checkbox" name="isFriendlly" checked={this.state.isFriendlly} onChange={this.hanleEvent}/>
//             </label> Is Frenly?
//             <br/>
//             <label>
//                 <input type="radio" name="gender" value="male" checked={this.state.gender==="male"} onChange={this.hanleEvent} />
//             </label> Male

//             <br/>

//             <label>
//                 <input type="radio" name="gender" value="female" checked={this.state.gender==="female"} onChange={this.hanleEvent} />
//             </label> Female

//             <label>Favourite Color</label>
//             <select value={this.state.favcolor} onChange={this.hanleEvent} name="favcolor" >
//              <option value="blue">Blue</option>
//              <option value="green">Green</option>
//              <option value="red">Red</option>
//              <option value="offwhite">Offwhite</option>
//             </select>

//             <h1>{this.firstName} {this.lastName}</h1>
//             <h3>your are :{this.state.gender}</h3>
//             <h3>your Favourite Color is :{this.state.favcolor}</h3>
//             </form>
//         )
//     }
// }

// export default App;

// class App extends React.Component{
//     constructor(props)
//     {
//         super(props)
//         this.state={
//             color:"red"
//         }
//     }

//     componentDidMount(){
//         setTimeout(
//             ()=>{
//                 this.setState({color:"yellow"})
//             },2000)
//         }

//     render(){
//         return(
//             <h1>{this.state.color}</h1>
//         )
//     }
// }

// export default App;

// class App extends React.Component{
//     constructor(props)
//     {
//         super(props)
//         this.state={
//         color:"red"
//     }
//     this.hanleUpate= this.hanleUpate.bind(this)
// }

//     shouldComponentUpdate()
//     {
//         return true;
//     }
//     hanleUpate()
//     {
//         this.setState({color:"blue"})
//     }
//     render()
//     {
//         return(
//             <>
//             <h1>{this.state.color}</h1>
//             <button onClick={this.hanleUpate}>change</button></>
//         )
//     }

// }

// export default App;

// class App extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {favoritecolor: "red"};
//     }
//     shouldComponentUpdate() {
//       return true;
//     }
//     changeColor = () => {
//       this.setState({favoritecolor: "blue"});
//     }
//     render() {
//       return (
//         <div>
//         <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//         <button type="button" onClick={this.changeColor}>Change color</button>
//         </div>
//       );
//     }
//   }

//   export default App

// class App extends React.Component{
//       constructor(props)
//       {
//           super(props)
//           this.state={
//               color:"red"
//           }
//       }
//       componentDidMount()
//           {
//               setTimeout(()=>
//               {
//                   this.setState(this.setState({color:"yellow"}))
//               },1000)

//           }
//      getSnapshotBeforeUpdate(preprops ,prevState)
//      {
//         document.getElementById("div1").innerHTML="previous State " + prevState.color;
//      }

//      componentDidUpdate()
//      {
//          document.getElementById("div2").innerHTML="updated state" + this.state.color;
//      }

//      render(){
//          return(
//              <div>
//                  <h1>My Favourite Color is :{this.state.color}</h1>
//                  <div id="div1"></div>
//                  <div id="div2"></div>
//              </div>
//          )
//      }
// }

// export default App;

// import ReactDOM from 'react-dom';

// class Container extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {show: true};
//   }
//   delHeader = () => {
//     this.setState({show: false});
//   }
//   render() {
//     let myheader;
//     if (this.state.show) {
//       myheader = <Child />;
//     };
//     return (
//       <div>
//       {myheader}
//       <button type="button" onClick={this.delHeader}>Delete Header</button>
//       </div>
//     );
//   }
// }

// class Child extends React.Component {
//   componentWillUnmount() {
//     alert("The component named Header is about to be unmounted.");
//   }
//   render() {
//     return (
//       <h1>Hello World!</h1>
//     );
//   }
// }

// ReactDOM.render(<Container />, document.getElementById('root'));
