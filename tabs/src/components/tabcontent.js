import React from 'react';


const TabContent = (props) => {
    const { tab, setTab} = props;

    const onClickHandler = (index) => {
        setTab({
        ...tab,
        selectedTab: index,
        })
    
    }

    return (
        <div>
            <nav className= "nav">
            {
                tab.content.map((tab, index)=>(
                    <div className= { "nav" } onClick={() => onClickHandler(index)}>
                        Tab {index +1}
                    </div>
                
                ))

            }
            
            </nav>
            <div className="border">
            <p> {props.tab.content[props.tab.selectedTab]}</p>
            </div>
        </div>

    )

}

export default TabContent;