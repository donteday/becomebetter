import React from 'react';
import { useState } from 'react';
import './AddSpent.css';

const AddSpent = () => {
    const [amount, setAmount] = useState('');
    const [icon, setIcon] = useState('🎉');

    const handleSave = () => {
        if (amount) {
            // onSave({
            //   amount: parseFloat(amount),
            //   icon,
            //   comment,
            // });
            setAmount('');
            setIcon('🎉');
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

    const getFontSize = () => {
        if (amount.length <= 5) return '4rem'; // Размер шрифта для 5 и менее символов
        if (amount.length <= 10) return '3rem'; // Размер шрифта для 6-10 символов
        return '2rem'; // Размер шрифта для более 10 символов
      };

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
            <div className='addSpent__amount'>
                <input
                    type="number"
                    value={amount}
                    placeholder='100₽'
                    onChange={(e) => setAmount(e.target.value)}
                    style={{ fontSize: getFontSize() }}
                />
            </div>

            <button onClick={handleSave} className='btn'>Сохранить</button>
        </div>
    );
}

export default AddSpent;