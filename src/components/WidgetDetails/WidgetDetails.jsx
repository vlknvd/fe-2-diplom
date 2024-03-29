import './WidgetDetails.css'
import WidgetDetailsPass from './components/WidgetDetailsPass'
import WidgetDetailsRoute from './components/WidgetDetailsRoute'
import WidgetDetailsTotal from './components/WidgetDetailsTotal'

const WidgetDetails = () => {
    return (
        <aside className="aside widget-details">
            <h3 className="details-title">Детали поездки</h3>
            <WidgetDetailsRoute />    
            <WidgetDetailsRoute route={'back'} />
            <WidgetDetailsPass />
            <WidgetDetailsTotal /> 
        </aside>
    )
}

export default WidgetDetails