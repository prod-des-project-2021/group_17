import SearchBar from "material-ui-search-bar";


export class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: ""
            };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    
    render() {
        return (
        <SearchBar
            value={this.state.value}
            onChange={(newValue) => this.setState({ value: newValue })}
            onRequestSearch={() => doSomethingWith(this.state.value)}
        />
        )   
    }
}

export default SearchBar;