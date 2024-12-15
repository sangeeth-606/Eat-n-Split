import PropTypes from 'prop-types';

const Friend = ({ friend }) => {
return (
    <li style={{ listStyleType: 'none', marginBottom: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={friend.image} alt={friend.name} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
            <div style={{ marginLeft: '10px' }}>
                <h3 style={{ margin: '10px 0', fontSize: '1.2em' }}>{friend.name}</h3>
                {friend.balance < 0 && <p className="negative" style={{ color: 'red' }}>Owes you {Math.abs(friend.balance)}</p>}
                {friend.balance > 0 && <p className="negative" style={{ color: 'green' }}>You owe {Math.abs(friend.balance)}</p>}
                {friend.balance === 0 && <p className="negative" style={{ color: 'gray' }}>Both are even</p>}
            </div>
        </div>
        <button style={{ padding: '5px 10px', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>Select</button>
    </li>
);
}

Friend.propTypes = {
    friend: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
    }).isRequired,
};

export default Friend;