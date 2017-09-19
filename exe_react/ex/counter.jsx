import React from 'react'
import { bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import { inc, dec, stepChanged} from './counterActions'

const Counter = (props) => (
    <div>
        <h1>{props.counter.number}</h1>
        <input onChange={props.stepChanged} 
                value={props.counter.step} type='number' />
        <button onClick={props.dec}>Dec</button>
        <button onClick={props.inc}>Inc</button>
    </div>
)

const mapStateToProps = state =>({ counter: state.counter })

const mapDispatchToProps = dispactch => bindActionCreators({inc,dec, stepChanged}, dispactch)

export default connect(mapStateToProps, mapDispatchToProps)(Counter)

