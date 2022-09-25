import React from "react"
import css from './Statistics.css'
import PropTypes from 'prop-types'

export default function Statistics({ label, percentage }) {
    <>
        <section className={css.statistics}>
            <h2 className="title">Upload stats</h2>

            <ul className="stat-list">
                <li className="item">
                    <span className="label">{label}</span>
                    <span className="percentage">{percentage}</span>
                </li>
                <li className="item">
                    <span className="label">{label}</span>
                    <span className="percentage">{percentage}</span>
                </li>
                <li className="item">
                    <span className="label">{label}</span>
                    <span className="percentage">{percentage}</span>
                </li>
                <li className="item">
                    <span className="label">{label}</span>
                    <span className="percentage">{percentage}</span>
                </li>
            </ul>
        </section>
    </>

}

Statistics.PropTypes = {

}