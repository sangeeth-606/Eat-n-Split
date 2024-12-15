/* eslint-disable react/prop-types */
// import React from 'react'

const SplitForm = ({selectedFriend} ) => {
return (
    <form action="" style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Split a Bill with {selectedFriend.name} </h2>
            <label htmlFor="" style={{ display: 'block', marginBottom: '5px' }}>Bill Amount</label>
            <input type="text" style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />

            <label htmlFor="" style={{ display: 'block', marginBottom: '5px' }}>Your Expense</label>
            <input type="text" style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />

            <label htmlFor="" style={{ display: 'block', marginBottom: '5px' }}> {selectedFriend.name} s Expense</label>
            <input type="text" disabled style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc', backgroundColor: '#f9f9f9' }} />

            <label htmlFor="" style={{ display: 'block', marginBottom: '5px' }}>Who is paying the bill?</label>
            <select name="" id="" style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '5px', border: '1px solid #ccc' }}>
                    <option value="">You</option>
                    <option value="">X</option>
            </select>

            <button style={{ width: '100%', padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#007BFF', color: '#fff', fontSize: '16px', cursor: 'pointer' }}>Split</button>
    </form>
)
}

export default SplitForm