/**
 * Created by nirmal on 10/5/17.
 */
const title = React.createElement(
    'h1',
    {id:'title', className:'header'},
    "Hello World"
);

ReactDOM.render(
    title,
    document.getElementById('react-container')
);