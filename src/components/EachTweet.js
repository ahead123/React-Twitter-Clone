import React from 'react';
import moment from 'moment';

var EachTweet = React.createClass({
  render: function() {
 		var newTweets = this.props.entries;

 		function createTweetRows(tweet){
 			return (
 				<div className="well" key={tweet.key+"1"}>
	 				<div key={tweet.key+"2"}>
	 					<p key={tweet.key+"3"}>Posted by: {tweet.author}</p>
	 				</div>
	 				<div key={tweet.key+"4"}>
	 					<h5 className="text-info" key={tweet.key+"5"}>{tweet.body}</h5>
	 				</div>
	 				<div key={tweet.key+"6"}>
	 					<p key={tweet.key+"7"}>Date: {moment(tweet.key).format('LLLL')}</p>
	 				</div>
	 			</div>
 			) 
 		}

 		var mappedTweets = newTweets.map(createTweetRows);

 		return (
 			<div className="page-header col-md-5 col-md-offset-3">
 				{mappedTweets}
 			</div>
 		)
  }
});

module.exports = EachTweet;