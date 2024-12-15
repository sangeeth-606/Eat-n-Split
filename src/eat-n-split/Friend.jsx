import PropTypes from 'prop-types';

const Friend = ({ friend, onSelection }) => {
    return (
        <li className="friend-item">
            <div className="friend-info">
                <img src={friend.image} alt={friend.name} className="friend-image" />
                <div className="friend-details">
                    <h3 className="friend-name">{friend.name}</h3>
                    {friend.balance < 0 && <p className="balance negative">Owes you {Math.abs(friend.balance)}</p>}
                    {friend.balance > 0 && <p className="balance positive">You owe {Math.abs(friend.balance)}</p>}
                    {friend.balance === 0 && <p className="balance even">Both are even</p>}
                </div>
            </div>
            <button onClick={() => onSelection(friend)} className="select-button">Select</button>
        </li>
    );
};

Friend.propTypes = {
    friend: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
    }).isRequired,
};

export default Friend;