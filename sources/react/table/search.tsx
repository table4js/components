import * as React from "react";
import { SearchModel } from "../../table/search";

export interface IAbrisComponentsTableSearchProps {
    model: SearchModel;
}
export interface IAbrisComponentsTableSearchState {
    value: string;
}



export class AbrisComponentsTableSearch extends React.Component <IAbrisComponentsTableSearchProps, IAbrisComponentsTableSearchState> {
    constructor(props: IAbrisComponentsTableSearchProps) {
        super(props);

        // TODO: rewrite with auto-reactivity
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
 
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleClick(event) {
        this.props.model.search(this.state.value);
    }
    
    render() {
        return (
            <div className="abris-search">
                <input className="abris-search__value" value = {this.props.model.searchValue}  onChange={this.handleChange} placeholder = {'Search...'}/>
                <div className="abris-search__button" onClick={this.handleClick} title= 'Search'>
                    <div className="abris-svg-icon abris-search__icon"></div>
                </div>
            </div>
        );
    }
}