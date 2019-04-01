import React from 'react'
import Comment from './Comment'
import { render } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'
import Enzyme from 'enzyme'
Enzyme.configure({ adapter: new Adapter })


it('should render', () => {
    const comment = { 
        content: 'test',
        date: '01/04/2019'
    }
    const wrapper = render(<Comment comment={comment}/>)
    expect(wrapper.text()).toBe('Comentário: testCriação: 01/04/2019')
    
})

it('should render empty', () => {
    const wrapper = render(<Comment />)
    expect(wrapper.text()).toBe('Comentário: vazioCriação: ')
    
})