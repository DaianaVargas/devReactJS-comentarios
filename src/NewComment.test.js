import React from 'react'
import { shallow } from 'enzyme'
import NewComment from './NewComment'

describe('<NewComment />', () => {
    it('should handle changes in textarea', () => {
        const wrapper = shallow(<NewComment />)
        const event = {
            target: { value: 'test' }
        }

        wrapper.find('textarea').simulate('change', event)
        expect(wrapper.state().newComment.content).toBe('test')
    })
    it('should call sendComment on button click', () => {
        const sendCommentMock = jest.fn()
        const wrapper = shallow(<NewComment sendComment={sendCommentMock}/>)
        const event = {
            target: { value: 'test'}
        }

        wrapper.find('textarea').simulate('change', event)
        wrapper.find('button').simulate('click')

        expect(sendCommentMock).toBeCalled()
        expect(sendCommentMock.mock.calls[0][0].content).toBe('test')
        expect(wrapper.state().newComment.content).toBe('')
    })
})