import React from 'react'
import { shallow } from 'enzyme'
import Comments from './Comments'
import Comment from './Comment'

describe('<Comments />', () => {
    it('should render Comments', () => {
        const comments = {
            a: { id: 'a', comment: { content: 'Comment 1', date: '01/04/2019' } },
            b: { id: 'b', comment: { content: 'Comment 2', date: '02/04/2019' } },
        }
        const wrapper = shallow(<Comments comments={comments} />)

        expect(wrapper.find(Comment).length).toBe(2)
        expect(wrapper.find(Comment).get(0).props.comment.comment.content).toBe(comments.a.comment.content)
        expect(wrapper.find(Comment).get(1).props.comment.comment.content).toBe(comments.b.comment.content)
        
        // console.log(wrapper.find(Comment).get(0).props.comment.comment.content)
        // console.log(comments.a.comment.content)
    })

    it('should render empty Comments', () => {
        const comments = {}
        const wrapper = shallow(<Comments comments={comments} />)

        expect(wrapper.find(Comment).length).toBe(0)
        // console.log(wrapper.html())
    })
})