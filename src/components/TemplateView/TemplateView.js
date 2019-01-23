import React, { PureComponent } from 'react'
import { func } from 'prop-types'
import { Row, Col } from 'reactstrap';

import './TemplateView.scss'

export default class TemplateView extends PureComponent{
    static propTypes = {
        setTemplateView: func,
    }

    handleOnChange = e => {
        this.props.setTemplateView(parseInt(e.target.value))
    }

    render() {

        return (
            <Row className='templateView'>
                <Col md='12'>
                    <h4>Set view template</h4>
                </Col>
                <Col md='3'>
                    <div className='templateView_block'>
                        <select className='templateView_block__select' onChange={this.handleOnChange}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>
                </Col>
            </Row>
        )
    }
}
