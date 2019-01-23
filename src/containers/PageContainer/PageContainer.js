import React, { PureComponent } from 'react'
import { func, arrayOf, shape } from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container} from 'reactstrap'

import HouseBlock from '../../components/HouseBlock'
import TemplateView from '../../components/TemplateView'

import {
    getHouses,
    getAllTemplates,
    setTemplateView
} from '../../reducer/actions'

import { templateSelector } from '../../reducer/selectors'

class PageContainer extends PureComponent {
    static propTypes = {
        houses: arrayOf(shape({})),
        getHouses: func,
        getAllTemplates: func,
        setTemplateView: func,
        templateView: shape({}),
    }

    static defaultProps = {
    }

    componentDidMount(){
        this.props.getHouses()
        this.props.getAllTemplates()
    }

    render() {
        const { houses, setTemplateView, templateView } = this.props

        return(
            <Container>
                <TemplateView setTemplateView={setTemplateView} />
                <HouseBlock houses={houses} templateView={templateView} />
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return{
        houses: state.houses,
        templateView: templateSelector(state)
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    getHouses,
    getAllTemplates,
    setTemplateView
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(PageContainer)
