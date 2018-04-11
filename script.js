var Counter = React.createClass({
    getInitialState: function() {
            console.log('[getInitialState]: ustawiam stan początkowy')
	   
	    return {
            	counter: 0
        };
    },

     componentWillMount() {
        console.log('[componentWillMount]: przed renderowaniem')   
    },

    componentDidMount() {
        console.log('[componentDidMount]: po renderowaniu')
    },
	
     increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },
	
     decrement: function() {
	 this.setState({
            counter: this.state.counter - 1
  	});
    },

    render: function() {
	  console.log('[render]: renderowanie...');
       
	  return (
		React.createElement('div', {},				
                   React.createElement('button', {onClick: this.decrement}, 'minus'),
                   React.createElement('span', {}, 'Licznik ' + this.state.counter),
            	   React.createElement('button', {onClick: this.increment}, 'plus'),
               )
        );
     }
});

var element = React.createElement('div', {},
   		 React.createElement(Counter),
    		 React.createElement(Counter),
    		 React.createElement(Counter)
);

ReactDOM.render(element, document.getElementById('app'));
