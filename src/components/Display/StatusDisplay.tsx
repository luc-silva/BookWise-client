export const StatusDisplay = () => {
    return (
        <div id="status-panel">
            <div>
                <div id="read-total">Read: 0</div>
                <div id="not-read-total">Not Read: 0</div>
                <div id="dropped-total">Dropped: 0</div>
            </div>
            <div id="percentage-box">
                <div id="percentage-books-read-text">
                    Percentage of books read:
                </div>
                <div id="percentage-books-read">0%</div>
            </div>
        </div>
    );
};
