export const EditBook = () => {
    return (
        <div id="edit-popup">
        <h2>Edit</h2>
        <div>
            <p>Title:</p>
            <input type="text" id="edit-title" />
        </div>
        <div>
            <p>Author:</p>
            <input type="text" id="edit-author" />
        </div>
        <div id="pages-tags">
            <div>
                <span>Pages:</span>
                <input type="text" id="edit-pages" />
            </div>
            <div>
                <span>Tags:</span>
                <input type="text" id="edit-tags" />
            </div>
            <div>
                <span>Status</span>
                <select id="edit-status">
                    <option value="Read">Read</option>
                    <option value="Not Read">Not Read</option>
                    <option value="Dropped">Dropped</option>
                </select>
            </div>
        </div>
        <div>
            <p>Webstore Link:</p>
            <input type="text" id="edit-webstorelink" />
        </div>
        <div>
            <p>Description:</p>
            <textarea id="description-input" />
        </div>
        <div id="edit-btn-panel">
            <button id="save-changes">Save Changes</button>
            <button id="close-edit-panel">Close</button>
        </div>
    </div>
    )
}