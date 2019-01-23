import React, { PureComponent } from 'react'
import { string, number, arrayOf, shape } from 'prop-types'
import { Row, Col, Spinner } from 'reactstrap'

import Image from '../Image'
import Address from '../Address'
import Area from '../Area'
import Price from  '../Price'

import './HouseBlock.scss'

export default class HouseBlock extends PureComponent{
    static propTypes = {
        houses: arrayOf(shape({
            imageUrl: arrayOf(string),
            address: string,
            area: number,
            price: number,
            id: number,
        })),
        templateView: shape({
            id: number,
            template: arrayOf(shape({})),
        }),
    }

    renderTemplateItem = (item, houseData, index) => {
        if (item.component === 'IMAGE') {
            if (item.children) {
                return (
                    <Image imageUrl={houseData.images[0]} key={index}>
                        {item.children.map((templateItem, index) => this.renderTemplateItem(templateItem, houseData, index))}
                    </Image>
                )
            }
            return (
                <Image imageUrl={houseData.images[0]} key={index} />
            )
        }
        if (item.component === 'ADDRESS') {
            return (
                <Address address={houseData.full_address} key={index} />
            )
        }
        if (item.component === 'PRICE') {
            return (
                <Price price={houseData.price} key={index} />
            )
        }
        if (item.component === 'AREA') {
            return (
                <Area area={houseData.area} key={index} />
            )
        }
    }

    renderHouse = (item) => {
        const template = this.props.templateView.template
        return(
            <Col xs='12' md='6' lg='4' key={item.id}>
                <div className='houseBlock'>
                    {template.map((templateItem, index) => this.renderTemplateItem(templateItem, item, index))}
                </div>
            </Col>
        )
    }

    render() {
        const { houses } = this.props
        if(this.props.templateView) {
            return (
                <Row>
                    {houses.map(this.renderHouse)}
                </Row>
            )
        }
        return (
            <Row>
                <div className='houseBlock_spinner'>
                    <Spinner style={{ width: '5rem', height: '5rem' }} />
                </div>
            </Row>
        )
    }
}
