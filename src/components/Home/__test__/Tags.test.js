import {shallow} from "enzyme"
import React from "react"
import Tags from "../Tags";

it('renders tag',function(){
    onclick = jest.fn();
    tags = ['test','as']
    shallow(<Tags
    tags={tags}
    onClickTag={onclick}/>)
    expect(1+1).toEqual(2)
})