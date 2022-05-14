import {Label, Input } from './Filter.styled'
import React from 'react'
import { useDispatch } from 'react-redux'
import { changeFilter } from 'redux/filterSlice'

function Filter() {
    const dispatch = useDispatch();
    return (
        <Label>
            Find contacts by name
            <Input type='text' name='filter' onChange={evt => dispatch(changeFilter(evt.currentTarget.value))}/>
        </Label>
    )
}

export default Filter