import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../actions'

const Filters = (props) => (
  <div>
    <label>
      <input
        onChange={(event) => {props.selectFilter(event.currentTarget.value)}}
        type="radio"
        name="filters"
        value="all"
        defaultChecked={true}
      />
      All
    </label>

    <label>
      <input
        onChange={(event) => {props.selectFilter(event.currentTarget.value)}}
        type="radio"
        name="filters"
        value="completed"
      />
      Completed
    </label>

    <label>
      <input
        onChange={(event) => {props.selectFilter(event.currentTarget.value)}}
        type="radio"
        name="filters"
        value="active"
      />
      Active
    </label>
  </div>
)

export default connect(null, {
  selectFilter: actions.selectFilter,
})(Filters)
