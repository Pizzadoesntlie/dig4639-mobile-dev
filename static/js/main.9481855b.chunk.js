(this.webpackJsonpw6a=this.webpackJsonpw6a||[]).push([[0],{14:function(e,t,a){},8:function(e,t,a){e.exports=a(9)},9:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(2),s=a(4),c=a(3),u=a(5),i=a(0),l=a.n(i),o=a(7),d=a.n(o),m=(a(14),function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("button",{className:"square",onClick:function(){return e.props.onClick()}},this.props.value)}}]),t}(l.a.Component)),h=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(c.a)(t).call(this,e))).state={squares:Array(9).fill(null)},a}return Object(u.a)(t,e),Object(n.a)(t,[{key:"handleClick",value:function(e){var t=this.state.squares.slice();t[e]="X",this.setState({squares:t})}},{key:"renderSquare",value:function(e){var t=this;return l.a.createElement(m,{value:this.state.squares[e],onClick:function(){return t.handleClick(e)}})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"status"},"Next player: X"),l.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),l.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),l.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),t}(l.a.Component),b=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"game"},l.a.createElement("div",{className:"game-board"},l.a.createElement(h,null)),l.a.createElement("div",{className:"game-info"},l.a.createElement("div",null),l.a.createElement("ol",null)))}}]),t}(l.a.Component);d.a.render(l.a.createElement(b,null),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.9481855b.chunk.js.map