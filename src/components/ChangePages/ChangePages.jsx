import './ChangePages.css'

const ChangePages = () => {
    const trains = JSON.parse(localStorage.getItem('trains'))
    return (
        <>
            {trains.length > 10 &&
                <div className="change-pages">
                <div className='pages'>
                    <div className='pages-previous'></div>
                    <div className='page choice-page'>1</div>
                    <div className='page'>2</div>
                    <div className='page'>3</div>
                    <div className='pages-next'></div>
                </div>
            </div>}
        </>
    )
}

export default ChangePages