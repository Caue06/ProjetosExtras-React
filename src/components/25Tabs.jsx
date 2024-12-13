import React, { useState } from "react";

function Tabs() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div>
            <div className="tab-header">
                <button onClick={() => setActiveTab(0)}>Tab 1</button>
                <button onClick={() => setActiveTab(1)}>Tab 2</button>
                <button onClick={() => setActiveTab(2)}>Tab 3</button>
            </div>
            <div className="tab-content">
                {activeTab === 0 && <p>Conteúdo da Tab 1</p>}
                {activeTab === 1 && <p>Conteúdo da Tab 2</p>}
                {activeTab === 2 && <p>Conteúdo da Tab 3</p>}
            </div>
        </div>
    )
}

export default Tabs