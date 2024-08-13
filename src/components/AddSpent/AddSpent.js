import React from 'react';
import { useState } from 'react';
import './AddSpent.css';


const AddSpent = () => {
    const [amount, setAmount] = useState('');
    const [icon, setIcon] = useState('🎉');
    const [comment, setComment] = useState('');

    const handleSave = () => {
        if (amount) {
            // onSave({
            //   amount: parseFloat(amount),
            //   icon,
            //   comment,
            // });
            setAmount('');
            setIcon('🎉');
            setComment('');
        }
    };

    // if (!isOpen) {
    //   return null;
    // }

    const iconOptions = [
        { value: '🎉', label: 'Развлечения' },
        { value: '🍔', label: 'Еда' },
        { value: '🚗', label: 'Транспорт' },
        { value: '🏠', label: 'Жилье' },
        { value: '🛍', label: 'Покупки' },
    ];

    return (
        <div className='addSpent__container'>
            <h2 className='addSpent__title'>Добавить трату</h2>
            <div className='addSpent__selector'>
                {iconOptions.map((option) => (
                    <label key={option.value} className={`emoji ${icon === option.value ? 'selected' : 'unselected'}`}>
                        <input
                            type="radio"
                            name="icon"
                            value={option.value}
                            checked={icon === option.value}
                            onChange={(e) => setIcon(e.target.value)}
                        />
                        {option.value}
                    </label>
                ))}
            </div>
            <div>
                <label>Цена:</label>
                <input
                    type="number"
                    value={100}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </div>
            <div>
                <label>Комментарий:</label>
                <input
                    type="text"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
            </div>
            <button onClick={handleSave} >Сохранить</button>
        </div>
    );
}

export default AddSpent;