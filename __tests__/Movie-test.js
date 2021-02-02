import React from 'react'
import {shallow} from 'enzyme'
import Movie from '../componets/Movie'

describe(<Movie/>,()=>{
    it('renders an movie banner source',()=>{
        const bannerSource = shallow(<Movie/>);
        expect(bannerSource.find('source').toBe(Object))
    })
})