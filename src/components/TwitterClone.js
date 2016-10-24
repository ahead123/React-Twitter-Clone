import React from 'react';
import { Button } from 'react-bootstrap';
var EachTweet = require('./EachTweet');


var TwitterClone = React.createClass({

	getInitialState: function() {
		return {
			tweets: [{author:'Twitter Robot',body:'Hello Twitter!',key:Date.now()}]
		};
	},

	componentDidMount: function() {
		this._author.focus();
	},

	addTweet: function(e){

		var tweetArray = this.state.tweets;

		if(this._author.value!="" && this._body.value!=""){

			tweetArray.unshift({
				author : this._author.value,
				body : this._body.value,
				key : Date.now()
			});

			this.setState({
				tweets : tweetArray
			});

			this._author.value="";
			this._body.value = "";
			this._author.focus();

		} else if(this._body.value==""){

			alert("Tweet message cannot be blank!")

		} else if(this._author.value==""){

			alert("Tweet owner cannot be blank!")

		}

		e.preventDefault();

	},

	handleClear: function(somethingToClear){
		this.setState({
			tweets : []
		});

		this._author.focus();
	},

	handleKeyPress: function(e) {
	  
    if(e.charCode==13){
      this.addTweet();  
    }

	},

	render: function() {

		var divStyles = {
			marginTop : 10
		}

    return (
      <div className="row">
      	<div className="col-md-5 col-md-offset-3">
      		<form onSubmit={this.addTweet} onKeyPress={this.handleKeyPress}>
      			<div style={divStyles}>
      				<input placeholder="what's yo name yo?" className="form-control" ref={(input) => this._author = input} />
      			</div>
      			<div style={divStyles}>
      				<textarea placeholder="enter a tweet dude!" className="form-control" ref={(textarea) => this._body = textarea}></textarea>
      			</div>
      			<div style={divStyles}>
      				<Button type="submit" className="btn btn-success">Tweet</Button>
      			</div>
      		</form>
      	</div>
      	<EachTweet entries={this.state.tweets}/>
      	<div className="col-md-5 col-md-offset-3">
      	<Button className="btn btn-danger" onClick={this.handleClear}>Clear All Tweets</Button>
      	</div>
      	
      </div>
    );
  }

});

module.exports = TwitterClone;