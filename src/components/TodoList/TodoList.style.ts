import styled from 'styled-components';


export const TodoContainer = styled.div`
    width: 100%;
    padding: 15px;
`

 const TodoItemsList = styled.ul`
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    padding-left: 0;
    list-style: none;
`
export const FailedList = styled(TodoItemsList)`
    &:empty:after {
             content: 'Tasks list is empty';
    }
    &:after {
             width: 100%;
             display: block;
             text-align: center;
             font-size: 12px;
             color: #aaa;
    }
`
export const CompletedList = styled(TodoItemsList)`
    position: relative;
    padding: 60px 0 0 0;

    &:empty:after {
        content: 'Completed list is empty';
    }

    &:before {
        content: '';
        width: 150px;
        height: 1px;
        background: #d8e5e0;

        position: absolute;
        top: 25px;
        left: calc(50% - 75px);
    }

    &:after {
        width: 100%;
        display: block;
        text-align: center;
        font-size: 12px;
        color: #aaa;
    }

`

