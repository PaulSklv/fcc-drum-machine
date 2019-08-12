(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a(2),r=a(4),c=a(3),s=a(5),u=a(0),i=a.n(u),m=a(7),d=a.n(m),l={backgroundColor:"#ba0160",border:"5px solid #ba0160",borderRadius:"5px"},p={backgroundColor:"#292828",border:"5px solid #ba0160",borderRadius:"5px"},h=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).componentDidUpdate=function(){a.audioRef.current.volume=a.props.volume},a.componentDidMount=function(){document.addEventListener("keydown",a.onKeyDown)},a.componentWillUnmount=function(){document.removeEventListener("keydown",a.onKeyDown)},a.activatePad=function(){"#ba0160"===a.state.padStyle.backgroundColor?a.setState({padStyle:p}):a.setState({padStyle:l})},a.onSound=function(){if(a.props.statusPower){var e=a.audioRef.current;e.pause(),e.currentTime=0,e.play(),a.activatePad(),setTimeout(function(){return a.activatePad()},100),a.props.nameOnKeyDown(a.props.bankObj.name)}},a.onKeyDown=function(e){a.props.bankObj.buttonCode===e.keyCode&&a.onSound()},a.state={padStyle:p},a.audioRef=i.a.createRef(),a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.bankObj,t=e.id,a=e.button,n=e.name,o=e.url;return i.a.createElement("div",{className:"drum-pad",id:t,onClick:this.onSound,style:this.state.padStyle},i.a.createElement("p",{style:{color:"#ba0160",fontSize:"30px"}},a),i.a.createElement("audio",{src:o,id:a,autoPlay:!1,name:n,ref:this.audioRef}))}}]),t}(i.a.Component),b=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).clicked=function(){!0===a.state.value?a.setState({checkboxTranslate:"translateX(30px)",value:!1}):a.setState({checkboxTranslate:"translateX(0px)",value:!0}),a.props.action(a.state.value)},a.state={checkboxTranslate:"translateX(30px)",value:!0},a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"checkbox-wrapper",onClick:this.clicked},i.a.createElement("div",{className:"checkbox",style:{transform:"".concat(this.state.checkboxTranslate)}}))}}]),t}(i.a.Component),f=function(e){function t(){var e,a;Object(n.a)(this,t);for(var o=arguments.length,s=new Array(o),u=0;u<o;u++)s[u]=arguments[u];return(a=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(s)))).state={vol:13},a.volume=function(e){a.props.action(e.target.value),a.setState({vol:e.target.value})},a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{style:{display:"flex",alignItems:"center"}},i.a.createElement("input",{type:"range",className:"slider",value:this.state.vol,onChange:this.volume}))}}]),t}(i.a.Component),v=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"displayButtons"},i.a.createElement("div",{id:"power"},i.a.createElement("p",{style:{gridArea:"1/1/2/5",marginBottom:0}},"Power"),i.a.createElement("p",null,"OFF"),i.a.createElement(b,{action:this.props.turnPower}),i.a.createElement("p",null,"ON")),i.a.createElement("div",{id:"volume"},i.a.createElement("p",{style:{gridArea:"1/1/2/5",marginBottom:0}},"Volume"),i.a.createElement("p",null,"-"),i.a.createElement(f,{action:this.props.volumeAdj}),i.a.createElement("p",null,"+")),i.a.createElement("div",{id:"bank"},i.a.createElement("p",{style:{gridArea:"1/1/2/5",marginBottom:0}},"Bank"),i.a.createElement("p",null,"Heater"),i.a.createElement(b,{action:this.props.turnBank}),i.a.createElement("p",null,"Piano")),i.a.createElement("div",{id:"info-monitor"},this.props.info))}}]),t}(i.a.Component),k=[{button:"Q",buttonCode:81,id:"chord_1",name:"Chord 1",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"},{button:"W",buttonCode:87,id:"chord_2",name:"Chord 2",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"},{button:"E",buttonCode:69,id:"chord_3",name:"Chord 3",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"},{button:"A",buttonCode:65,id:"shaker",name:"Shaker",url:"https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"},{button:"S",buttonCode:83,id:"open_hh",name:"Open HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"},{button:"D",buttonCode:68,id:"closed_hh",name:"Closed HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"},{button:"Z",buttonCode:90,id:"punchy_kick",name:"Punchy Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"},{button:"X",buttonCode:88,id:"slide_stick",name:"Slide Stick",url:"https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"},{button:"C",buttonCode:67,id:"snare",name:"Snare",url:"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"}],w=[{button:"Q",buttonCode:81,id:"heater_1",name:"Heater 1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{button:"W",buttonCode:87,id:"heater_2",name:"Heater 2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{button:"E",buttonCode:69,id:"heater_3",name:"Heater 3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{button:"A",buttonCode:65,id:"heater_4",name:"Heater",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{button:"S",buttonCode:83,id:"clap",name:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{button:"D",buttonCode:68,id:"open_hh_heater",name:"open HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{button:"Z",buttonCode:90,id:"kick_n_hat",name:"Kick n'hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{button:"X",buttonCode:88,id:"kick",name:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{button:"C",buttonCode:67,id:"closed_hh_heater",name:"Closed HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}],y=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).componentDidMount=function(){a.setState({displayHeight:a.padsHeightRef.current.clientHeight})},a.onTurnPower=function(e){a.setState({power:e,info:!0===e?"ON":"OFF"}),setTimeout(function(){return a.setState({info:""})},2e3)},a.onTurnBank=function(e){!0===e?a.setState({bank:k,info:"Smooth Piano Kit"}):a.setState({bank:w,info:"Heater Kit"})},a.volume=function(e){a.setState({volume:e/100,info:"Volume: ".concat(e)}),setTimeout(function(){return a.setState({info:""})},2e3)},a.nameOnKeyDown=function(e){a.setState({info:e})},a.state={bank:k,power:!0,displayHeight:null,volume:.3,info:""},a.padsHeightRef=i.a.createRef(),a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.state.bank.map(function(t,a,n){return i.a.createElement(h,{key:t.id,bankObj:t,statusPower:e.state.power,volume:e.state.volume,nameOnKeyDown:e.nameOnKeyDown})});return i.a.createElement("div",{id:"drum-machine"},i.a.createElement("div",{id:"drumpads",ref:this.padsHeightRef},t),i.a.createElement("div",{id:"display",style:{height:"".concat(this.state.displayHeight,"px")}},i.a.createElement(v,{turnPower:this.onTurnPower,turnBank:this.onTurnBank,volumeAdj:this.volume,info:this.state.info})))}}]),t}(i.a.Component);d.a.render(i.a.createElement(y,null),document.querySelector("#root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.4863c230.chunk.js.map